import midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
  isProduction: false, // Ubah ke true jika menggunakan server produksi
  serverKey: "SB-Mid-server-wkTyIguA0OaTZ_DeSy13Iyrm", // Ganti dengan server key Anda
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { totalAmount, type } = req.body;

    console.log("Incoming request:", { totalAmount, type });

    if (!totalAmount || typeof totalAmount !== "number" || totalAmount <= 0) {
      console.error("Invalid totalAmount:", totalAmount);
      return res.status(400).json({ error: "Invalid totalAmount" });
    }

    if (!type || typeof type !== "string") {
      console.error("Invalid type:", type);
      return res.status(400).json({ error: "Invalid type" });
    }

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
      customer_details: {
        first_name: "Customer",
        last_name: "Name",
        email: "customer@example.com",
        phone: "08123456789",
      },
    };

    console.log("Transaction Details:", transactionDetails);

    const transaction = await snap.createTransaction(transactionDetails);
    console.log("Transaction Token:", transaction.token);

    res.status(200).json({ token: transaction.token });
  } catch (error) {
    console.error("Midtrans Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to create transaction" });
  }
}
