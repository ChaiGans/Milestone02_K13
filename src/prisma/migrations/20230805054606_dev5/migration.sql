/*
  Warnings:

  - You are about to drop the column `balance` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `compete` on the `User` table. All the data in the column will be lost.
  - Added the required column `category` to the `Lomba` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lomba" ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "balance",
DROP COLUMN "compete",
ADD COLUMN     "fave" TEXT[],
ADD COLUMN     "instance" TEXT;

-- CreateTable
CREATE TABLE "Compete" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Compete_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Compete" ADD CONSTRAINT "Compete_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
