-- CreateTable
CREATE TABLE "Lomba" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "registrationDate" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "contact" INTEGER NOT NULL,
    "poster" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Lomba_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lomba" ADD CONSTRAINT "Lomba_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
