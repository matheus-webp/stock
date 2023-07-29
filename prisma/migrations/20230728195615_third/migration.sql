/*
  Warnings:

  - Made the column `price` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    CONSTRAINT "Product_username_fkey" FOREIGN KEY ("username") REFERENCES "User" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("description", "id", "name", "price", "quantity", "username") SELECT "description", "id", "name", "price", "quantity", "username" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT
);
INSERT INTO "new_User" ("name", "password") SELECT "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
