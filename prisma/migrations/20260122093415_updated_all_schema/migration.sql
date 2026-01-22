/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `linkedSheetId` on the `Form` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[googleItemId]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[formId,order]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdById` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `settings` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "createdBy",
DROP COLUMN "linkedSheetId",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "isAcceptingResponses" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "responderUri" TEXT,
ADD COLUMN     "settings" JSONB NOT NULL,
ALTER COLUMN "revisionId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Form_createdById_idx" ON "Form"("createdById");

-- CreateIndex
CREATE INDEX "Form_status_idx" ON "Form"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Question_googleItemId_key" ON "Question"("googleItemId");

-- CreateIndex
CREATE INDEX "Question_formId_idx" ON "Question"("formId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_formId_order_key" ON "Question"("formId", "order");
