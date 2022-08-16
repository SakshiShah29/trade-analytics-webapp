-- CreateTable
CREATE TABLE "Trades" (
    "id" SERIAL NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedOn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,
    "exchange" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "tradeCurrency" TEXT NOT NULL,
    "fees" TEXT NOT NULL,
    "feesCurrency" TEXT NOT NULL,
    "strategy" TEXT NOT NULL,
    "clientOrderID" TEXT,
    "social" JSONB NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
