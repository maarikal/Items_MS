-- CreateTable
CREATE TABLE "User"
(
    "id"       INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email"    TEXT,
    "password" TEXT
);

-- CreateTable
CREATE TABLE "Item"
(
    "id"          INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name"        TEXT,
    "description" TEXT,
    "image"       TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item" ("name");
