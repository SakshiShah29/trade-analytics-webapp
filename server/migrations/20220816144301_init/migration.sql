/*
  Warnings:

  - You are about to drop the column `social` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "social";

-- AlterTable
ALTER TABLE "Trades" ADD COLUMN     "postID" INTEGER;

-- AddForeignKey
ALTER TABLE "Trades" ADD CONSTRAINT "Trades_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
