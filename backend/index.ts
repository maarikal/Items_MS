import express, {Express, NextFunction, Request, Response} from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import {Error} from './types';
import * as dotenv from 'dotenv';
import usersRoutes from "./routes/usersRoutes";
import cors from 'cors';

dotenv.config();
const port: Number = Number(process.env.PORT) || 3000;
const app: Express = express();
const swaggerDocument: Object = YAML.load('./swagger.yaml');
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());

// Adding data to the Items database
async function createItem(name: string, description: string, image: string) {
    const newItem = await prisma.item.create({
        data: {
            name,
            description,
            image,
        },
    })
    return newItem
}

createItem("punane tulp", 'see on kevadlill, sibulaga', 'https://live.staticflickr.com/5120/7070214021_a1bd2773d9_b.jpg')
    .then((result) => console.log(result))
    .catch((error) => console.error(error))

createItem("valge nartsiss", 'kevadlill, ka sibulaga', 'https://lillesibulad.ee/wp-content/uploads/2022/08/narcissus-recurvus-584113_1920.jpg')
    .then((result) => console.log(result))
    .catch((error) => console.error(error))

createItem("sinilill", 'kevadlill, mis õitseb metsas', 'https://www.muhutikand.ee/wp-content/uploads/2010/04/sl21.jpg')
    .then((result) => console.log(result))
    .catch((error) => console.error(error))


// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    return res.status(err.statusCode || 500).send(err.message || 'Internal Server Error');
});

// Routes
app.use('/users', usersRoutes);

// Health check
app.get('/health-check', (req, res) => {
    res.status(200).send('OK');
});

// Start the server
app.listen(port, () => console.log(`Running at http://localhost:${port} and docs at http://localhost:${port}/docs`));
