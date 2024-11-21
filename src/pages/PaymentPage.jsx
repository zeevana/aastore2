import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const { amount, type } = location.state || { amount: 0, type: "Tidak ada tipe" };

  const handlePayment = async () => {
    try {
      const response = await axios.post("/api/transaction", {
        totalAmount: amount,
        type: type,
      });

      const snapToken = response.data.token;

      window.snap.pay(snapToken, {
        onSuccess: (result) => alert("Transaksi berhasil! " + JSON.stringify(result)),
        onPending: (result) => alert("Transaksi pending: " + JSON.stringify(result)),
        onError: (result) => alert("Terjadi kesalahan: " + JSON.stringify(result)),
        onClose: () => alert("Pembayaran dibatalkan"),
      });
    } catch (error) {
      console.error("Error creating transaction:", error);
      alert("Gagal membuat transaksi.");
    }
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "SB-Mid-client--jucMGGRSNhaA_C1");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="payment-container">
      <h1>Pembayaran</h1>
      <div>
        <p><b>Tipe Produk:</b> {type}</p>
        <p><b>Total Pembayaran:</b> Rp {amount.toLocaleString("id-ID")}</p>
        <button onClick={handlePayment}>Bayar Sekarang</button>
      </div>
    </div>
  );
};

export default PaymentPage;
