import express, {NextFunction, Request, Response} from 'express';
import {handleErrors} from './handleErrors';
import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';

const verifier = require('@gradeup/email-verify');

const prisma = new PrismaClient();
const router = express.Router();

// Routes
router.post(
    '/check-email',
    requireValidEmail,
    handleErrors(async (req: Request, res: Response) => {
        return res.status(200).send({message: 'Email is valid'});
    })
);

router.post(
    '/',
    requireValidEmail,
    handleErrors(async (req: Request, res: Response) => {
        // Validate password
        if (!req.body.password) {
            return res.status(400).send({error: 'Password is required'});
        }

        // Check if the password is correct
        if (req.body.password.length < 8) {
            return res
                .status(400)
                .send({error: 'Password must be at least 8 characters long'});
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Save user to database using Prisma
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                password: hashedPassword,
            },
        });

        // Copy the user object
        const userCopy: any = {...user};

        // Remove the password from the user object
        delete userCopy.password;

        // Return user
        return res.status(201).send(userCopy);
    })
);

// Middleware
async function requireValidEmail(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Validate email
    if (!req.body.email) {
        return res.status(400).send({error: 'Email is required'});
    }

    try {
       /* const result = await verifyEmail(req.body.email);
        if (!result.success) {
            return res.status(400).send({error: result.info});
        }*/

        // Check if user already exists
        const userExists = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });

        if (userExists) {
            return res.status(409).send({error: 'Email already exists'});
        }
    } catch (error: any) {
        const errorObject = tryToParseJson(error);
        if (errorObject && errorObject.info) {
            return res.status(400).send({error: errorObject.info});
        }
        return res.status(400).send({error: error});
    }
    next();
}

// Utility functions
async function verifyEmail(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
        verifier.verify(email, (err: any, info: any) => {
            if (err) {
                reject(JSON.stringify(info));
            } else {
                resolve(info);
            }
        });
    });
}

function tryToParseJson(jsonString: string): any {
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === 'object') {
            return o;
        }
    } catch (e) {
    }
    return false;
}

export default router;
