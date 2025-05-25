function Tentang() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Tentang Aplikasi
      </h1>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Aplikasi ini dirancang sebagai alat bantu untuk mengidentifikasi status
        ekonomi keluarga berdasarkan sejumlah indikator sosial. Dengan
        pendekatan berbasis <strong>machine learning</strong>, aplikasi ini
        mampu memberikan prediksi secara cepat, objektif, dan akurat terkait
        kemungkinan suatu keluarga termasuk dalam kategori penerima bantuan
        sosial.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Tujuan Pengembangan
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Mempermudah proses pendataan masyarakat kurang mampu secara digital
          </li>
          <li>
            Menjadi acuan awal dalam penyaluran bantuan sosial yang lebih tepat
            sasaran
          </li>
          <li>
            Mendukung transparansi dan efisiensi dalam pengambilan kebijakan
            berbasis data
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Teknologi yang Digunakan
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>React.js & Tailwind CSS</strong> – Untuk membangun antarmuka
            pengguna yang responsif
          </li>
          <li>
            <strong>Express.js</strong> – Untuk API backend yang menghubungkan
            frontend dengan model prediksi
          </li>
          <li>
            <strong>Scikit-learn (Python)</strong> – Untuk membangun dan melatih
            model prediksi
          </li>
          <li>
            <strong>Random Forest</strong> – Algoritma utama dalam klasifikasi
            status ekonomi
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Tentang Algoritma Random Forest
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Random Forest</strong> adalah metode ensemble learning yang
          terdiri dari banyak pohon keputusan. Hasil prediksi dari setiap pohon
          digabungkan untuk menghasilkan keputusan akhir yang lebih stabil dan
          akurat. Dalam proyek ini, algoritma ini digunakan untuk
          mengklasifikasikan status ekonomi berdasarkan fitur-fitur penting
          seperti pendapatan, jenis pekerjaan, jumlah tanggungan, dan
          kepemilikan aset.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Mengurangi risiko overfitting</li>
          <li>Mampu menangani data numerik maupun kategorikal</li>
          <li>Cocok untuk sistem klasifikasi berbasis banyak variabel</li>
        </ul>

        <div className="mt-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/76/Random_forest_diagram_complete.png"
            alt="Ilustrasi Random Forest"
            className="rounded-lg shadow-md border border-gray-200"
          />
          <p className="text-sm text-gray-500 mt-2 italic text-center">
            Gambar: Ilustrasi Random Forest – sumber: Wikimedia Commons
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Pengembang</h2>
        <p className="text-gray-700 leading-relaxed">
          Aplikasi ini dikembangkan oleh <strong>Sulis Rizkiyani</strong>{" "}
          sebagai bagian dari proyek akhir skripsi dalam bidang sistem informasi
          dan kecerdasan buatan. Sistem ini diharapkan dapat menjadi kontribusi
          nyata dalam mendukung kebijakan sosial yang berbasis data dan
          teknologi.
        </p>
      </div>
    </main>
  );
}

export default Tentang;
