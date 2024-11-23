import { useParams, useNavigate } from "react-router-dom";
import { semuaKelas } from "../data/index";
import { Card } from "react-bootstrap";

const KelasDetail = () => {
  const { kelasId } = useParams();
  const navigate = useNavigate();

  // Cari kelas berdasarkan ID
  const kelas = semuaKelas.find((kelas) => kelas.id === parseInt(kelasId));

  // Jika kelas tidak ditemukan
  if (!kelas) {
    return <div>Kelas tidak ditemukan</div>;
  }

  // Fungsi untuk menangani klik pada harga item
  const handleBuy = (harga) => {
    navigate("/payment", { state: { harga, kelas } });
  };

  return (
    <div className="box-kl">
      <div className="logo-k mb-3">
        <img src={kelas.image} alt={kelas.title} className="logo-l" />
      </div>

      <h3 className="mb-4">Harga:</h3>
      <div className="card-container">
        {kelas.price.map((harga, index) => (
          <Card
            key={index}
            className="mb-3"
            onClick={() => handleBuy(harga)}
            style={{ cursor: "pointer" }}
          >
            <Card.Body className="d-flex align-items-center">
              {/* Gambar di sebelah kiri */}
              <img
                src={harga.image}
                alt={harga.type}
                style={{ width: "35px", marginRight: "20px" }}
              />
              <div>
                {/* Harga type */}
                <Card.Title>{harga.type}</Card.Title>
                {/* Harga price */}
                <Card.Text>Rp {harga.price.toLocaleString("id-ID")}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KelasDetail;
