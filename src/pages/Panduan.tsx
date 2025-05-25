function Panduan() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        📘 Panduan Penggunaan
      </h1>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Halaman ini berisi petunjuk langkah demi langkah dalam menggunakan
        sistem prediksi status ekonomi. Sistem ini dirancang untuk membantu
        menentukan apakah suatu keluarga termasuk kategori penerima bantuan
        sosial berdasarkan data yang Anda masukkan.
      </p>

      <ol className="list-decimal list-inside text-gray-800 space-y-3 text-base">
        <li>
          Buka halaman <strong>Prediksi</strong> melalui menu navigasi di atas.
        </li>
        <li>
          Isi seluruh data yang diminta, yaitu:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
            <li>
              <strong>Pendapatan Keluarga:</strong> Tidak ada, di bawah UMR,
              atau di atas UMR
            </li>
            <li>
              <strong>Status Pekerjaan:</strong> Tidak bekerja, bekerja tidak
              tetap, atau tetap
            </li>
            <li>
              <strong>Jumlah Tanggungan:</strong> 1 orang, 2 orang, atau lebih
              dari 2 orang
            </li>
            <li>
              <strong>Kepemilikan Aset:</strong> Tidak memiliki rumah atau
              memiliki rumah sendiri
            </li>
          </ul>
        </li>
        <li>
          Setelah mengisi data, klik tombol <strong>Prediksi</strong>.
        </li>
        <li>
          Sistem akan menampilkan hasil klasifikasi:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
            <li>
              <span className="text-green-700 font-semibold">
                Tidak Termasuk Keluarga Miskin
              </span>{" "}
              jika data tidak sesuai kriteria
            </li>
            <li>
              <span className="text-red-700 font-semibold">
                Termasuk Keluarga Miskin
              </span>{" "}
              jika memenuhi kriteria yang ditetapkan
            </li>
          </ul>
        </li>
      </ol>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-yellow-800">
          💡 <strong>Tips:</strong> Gunakan data yang akurat untuk mendapatkan
          hasil prediksi yang sesuai kenyataan.
        </p>
      </div>
    </main>
  );
}

export default Panduan;
