/*
  Warnings:

  - You are about to drop the column `postID` on the `Trades` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trades" DROP CONSTRAINT "Trades_postID_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "TradesID" INTEGER;

-- AlterTable
ALTER TABLE "Trades" DROP COLUMN "postID";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_TradesID_fkey" FOREIGN KEY ("TradesID") REFERENCES "Trades"("id") ON DELETE SET NULL ON UPDATE CASCADE;
