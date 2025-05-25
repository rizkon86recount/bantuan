function Tentang() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Tentang Aplikasi
      </h1>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Aplikasi ini dikembangkan sebagai alat bantu untuk menentukan apakah
        suatu keluarga termasuk dalam kategori penerima bantuan sosial. Dengan
        memanfaatkan algoritma machine learning, sistem ini mampu memberikan
        hasil prediksi secara cepat dan objektif.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Tujuan Pengembangan
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Mendukung proses pendataan keluarga miskin secara efisien</li>
          <li>Memberikan referensi awal dalam distribusi bantuan sosial</li>
          <li>
            Menunjang transparansi dan akurasi dalam pengambilan keputusan
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Teknologi yang Digunakan
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>React.js & Tailwind CSS untuk tampilan antarmuka pengguna</li>
          <li>Express.js untuk layanan API backend</li>
          <li>Scikit-learn (Python) untuk pemodelan prediksi</li>
          <li>
            <strong>Algoritma Random Forest</strong> sebagai model klasifikasi
            utama
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Tentang Random Forest
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Random Forest</strong> adalah algoritma ensemble learning yang
          membangun banyak pohon keputusan dan menggabungkan hasilnya untuk
          meningkatkan akurasi prediksi. Dalam proyek ini, Random Forest
          digunakan untuk mengklasifikasikan status ekonomi keluarga berdasarkan
          fitur-fitur seperti pendapatan, pekerjaan, jumlah tanggungan, dan
          kepemilikan aset.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Tahan terhadap overfitting</li>
          <li>Mampu menangani data kategorikal dan numerik</li>
          <li>Memberikan hasil prediksi yang stabil dan akurat</li>
        </ul>

        {/* Tambahkan Ilustrasi */}
        <div className="mt-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/76/Random_forest_diagram_complete.png"
            alt="Ilustrasi Algoritma Random Forest"
            className="rounded-lg shadow-md border border-gray-200"
          />
          <p className="text-sm text-gray-500 mt-2 italic text-center">
            Gambar: Struktur sederhana Random Forest (sumber: Wikimedia Commons)
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Pengembang</h2>
        <p className="text-gray-700">
          Aplikasi ini dibuat oleh <strong>Adi</strong> sebagai bagian dari
          proyek akhir skripsi dengan fokus pada pemanfaatan machine learning
          dalam mendukung kebijakan sosial berbasis data.
        </p>
      </div>
    </main>
  );
}

export default Tentang;
