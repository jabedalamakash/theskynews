/*
  Warnings:

  - The values [Popular,Featured,Latest,Uncategorized] on the enum `remarktypes` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `img1` on the `news_list` table. All the data in the column will be lost.
  - You are about to drop the column `img2` on the `news_list` table. All the data in the column will be lost.
  - You are about to drop the column `img3` on the `news_list` table. All the data in the column will be lost.
  - You are about to drop the column `img4` on the `news_list` table. All the data in the column will be lost.
  - You are about to drop the column `keywords` on the `news_list` table. All the data in the column will be lost.
  - You are about to alter the column `slug` on the `news_list` table. The data in that column could be lost. The data in that column will be cast from `VarChar(300)` to `VarChar(100)`.
  - Added the required column `author` to the `news_list` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `news_list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "remarktypes_new" AS ENUM ('popular', 'featured', 'latest', 'uncategorized');
ALTER TABLE "news_list" ALTER COLUMN "remarks" TYPE "remarktypes_new" USING ("remarks"::text::"remarktypes_new");
ALTER TYPE "remarktypes" RENAME TO "remarktypes_old";
ALTER TYPE "remarktypes_new" RENAME TO "remarktypes";
DROP TYPE "remarktypes_old";
COMMIT;

-- AlterTable
ALTER TABLE "news_list" DROP COLUMN "img1",
DROP COLUMN "img2",
DROP COLUMN "img3",
DROP COLUMN "img4",
DROP COLUMN "keywords",
ADD COLUMN     "author" VARCHAR(100) NOT NULL,
ADD COLUMN     "img" VARCHAR(300) NOT NULL,
ALTER COLUMN "slug" SET DATA TYPE VARCHAR(100);
