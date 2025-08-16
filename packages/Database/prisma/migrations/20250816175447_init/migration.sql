-- CreateTable
CREATE TABLE "public"."user" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL,
    "Username" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");
