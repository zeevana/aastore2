import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const PaymentPage = () => {
  const location = useLocation();
  const { amount, type } = location.state || { amount: 0, type: "Tidak ada tipe" };

  const handlePayment = async () => {
    try {
      const response = await axios.post("/api/create-transaction", {
        totalAmount: amount, // Jumlah yang akan dibayar
        type: type, // Jenis produk
      });

      const snapToken = response.data.token;

      window.snap.pay(snapToken, {
        onSuccess: (result) => alert("Transaksi berhasil! " + JSON.stringify(result)),
        onPending: (result) => alert("Transaksi masih pending: " + JSON.stringify(result)),
        onError: (result) => alert("Terjadi kesalahan: " + JSON.stringify(result)),
        onClose: () => alert("Pembayaran dibatalkan"),
      });
    } catch (error) {
      console.error("Error making payment:", error);
      alert("Gagal membuat transaksi");
    }
  };

  return (
    <div className="payment-container">
      <h1>Pembayaran</h1>
      <div className="payment-details">
        <h2>Game:</h2>
        <p>
          <b>Tipe Harga:</b> {type}
        </p>
        <p>
          <b>Total Pembayaran:</b> Rp {amount.toLocaleString("id-ID")},-
        </p>
        <button className="payment-button" onClick={handlePayment}>
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
