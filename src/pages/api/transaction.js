import midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-wkTyIguA0OaTZ_DeSy13Iyrm",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { totalAmount } = req.body;

    const transactionDetails = {
      transaction_details: {
        order_id: `ORDER-${Date.now()}`,
        gross_amount: totalAmount,
      },
    };

    const transaction = await snap.createTransaction(transactionDetails);
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Midtrans Error:", error.message);
    res.status(500).json({ error: "Failed to create transaction" });
  }
}
