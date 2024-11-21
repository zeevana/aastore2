import midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
  isProduction: false, // Ganti ke `true` jika menggunakan environment production
  serverKey: "SB-Mid-server-wkTyIguA0OaTZ_DeSy13Iyrm", // Ganti dengan server key Midtrans Anda
  clientKey: "SB-Mid-client--jucMGGRSNhaA_C1", // Ganti dengan client key Midtrans Anda
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
    console.error("Error creating transaction:", error);
    res.status(500).json({ message: "Failed to create transaction" });
  }
}
