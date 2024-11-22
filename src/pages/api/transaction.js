import midtransClient from 'midtrans-client';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { price, type } = req.body;

            // Pastikan data price dan type ada dan valid
            if (!price || !type) {
                return res.status(400).json({ error: 'Price and type are required' });
            }

            // Konfigurasi Midtrans menggunakan kunci langsung (tanpa menggunakan .env)
            const snap = new midtransClient.Snap({
                isProduction: false,  // Gunakan false untuk sandbox
                serverKey: 'SB-Mid-server-wkTyIguA0OaTZ_DeSy13Iyrm',  // Ganti dengan Server Key Anda
                clientKey: 'SB-Mid-client--jucMGGRSNhaA_C1'   // Ganti dengan Client Key Anda
            });

            // Proses harga (pastikan harga diproses dengan benar, menghapus simbol dan koma)
            const cleanPrice = parseInt(price.replace('Rp', '').replace('.', '').replace(',', '').trim());

            // Validasi jika harga bersih tidak valid
            if (isNaN(cleanPrice) || cleanPrice <= 0) {
                return res.status(400).json({ error: 'Invalid price format' });
            }

            // Siapkan parameter untuk transaksi
            const parameter = {
                transaction_details: {
                    order_id: 'order-id-' + new Date().getTime(),  // Membuat order_id unik berdasarkan waktu
                    gross_amount: cleanPrice  // Harga bersih tanpa simbol Rp dan titik
                },
                credit_card: {
                    secure: true  // Mengaktifkan opsi pembayaran kartu kredit yang aman
                },
                item_details: [
                    {
                        id: 'item-1',  // ID produk, bisa disesuaikan jika ada banyak item
                        name: type,  // Nama item dari parameter 'type'
                        price: cleanPrice,  // Harga item bersih
                        quantity: 1  // Jumlah item (1 item)
                    }
                ]
            };

            // Buat transaksi di Midtrans
            const transaction = await snap.createTransaction(parameter);

            // Kirimkan URL untuk melanjutkan ke halaman pembayaran Midtrans
            res.status(200).json({ redirect_url: transaction.redirect_url });
        } catch (error) {
            // Tangani kesalahan dengan log yang lebih informatif
            console.error('Error creating payment:', error);
            res.status(500).json({ error: 'Failed to create payment, please try again later.' });
        }
    } else {
        // Jika bukan POST request, kirimkan status 405 Method Not Allowed
        res.status(405).send('Method Not Allowed');
    }
}
