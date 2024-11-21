import midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-wkTyIguA0OaTZ_DeSy13Iyrm",
  clientKey: "SB-Mid-client--jucMGGRSNhaA_C1",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { totalAmount, type } = req.body;

  try {
    const transactionDetails = {
      transaction_details: {
        order_id: `ORDER-${Date.now()}`,
        gross_amount: totalAmount,
      },
      item_details: [
        {
          id: 1,
          price: totalAmount,
          quantity: 1,
          name: type,
        },
      ],
    };

    const transaction = await snap.createTransaction(transactionDetails);
    res.status(200).json({ token: transaction.token });
  } catch (error) {
    console.error("Midtrans Error: ", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to create transaction" });
  }
}
