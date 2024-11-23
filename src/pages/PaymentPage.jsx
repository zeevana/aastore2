import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Data yang dikirim melalui navigasi
  const { state } = location;
  const { harga, kelas } = state || {};

  // State untuk loading, error, dan pembayaran
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (isProcessing || !harga || !kelas) return; // Cegah panggilan ganda
    setIsProcessing(true); // Tandai sebagai sedang diproses
    setError(null);
  
    try {
      const response = await fetch("/api/create-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: kelas.id,
          type: harga.type,
          price: String(harga.price),
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Terjadi kesalahan saat memproses pembayaran");
      }
  
      const data = await response.json();
  
      if (data.token) {
        // Pastikan token valid
        window.snap.pay(data.token, {
          onSuccess: (result) => {
            console.log("Success:", result);
            alert("Pembayaran berhasil!");
          },
          onPending: (result) => {
            console.log("Pending:", result);
            alert("Pembayaran tertunda.");
          },
          onError: (error) => {
            console.error("Error:", error);
            alert("Pembayaran gagal.");
          },
          onClose: () => {
            alert("Anda menutup halaman pembayaran.");
          },
        });
      } else {
        console.error("Token pembayaran tidak ditemukan.");
        alert("Gagal mendapatkan token pembayaran.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setIsProcessing(false); // Reset flag setelah transaksi selesai
    }
  };
  

  // Jika data tidak ditemukan, tampilkan pesan error
  if (!harga || !kelas) {
    return (
      <div className="error-container">
        <p>Data pembayaran tidak ditemukan.</p>
        <button onClick={() => navigate(-1)}>Kembali</button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">Detail Pembayaran</h2>

        <div className="payment-info">
          <div className="product-preview">
            <img src={kelas.image} alt={kelas.title} className="payment-image" />
            <h3 className="product-name">{kelas.title}</h3>
          </div>

          <div className="payment-details">
            <div className="detail-item">
              <span className="detail-label">Item:</span>
              <span className="detail-value">{harga.type}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Harga:</span>
              <span className="detail-value price">
                Rp {harga.price.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}
        <button
          className="payment-button"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Memproses Pembayaran..." : "Bayar Sekarang"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
