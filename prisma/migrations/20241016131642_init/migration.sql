-- CreateTable
CREATE TABLE "public"."events" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "genre" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "duration" TEXT,
    "age_rating" TEXT,
    "operating_hours" TEXT,
    "notices" TEXT,
    "discounted_price" DECIMAL(10,2),
    "discount_description" TEXT,
    "type" TEXT,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);
