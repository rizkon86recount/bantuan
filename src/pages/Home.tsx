import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Selamat Datang di Aplikasi Prediksi Status Ekonomi
          </h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Aplikasi ini membantu Anda menentukan apakah suatu keluarga termasuk
            dalam kategori penerima bantuan sosial berdasarkan data yang
            relevan. Gunakan sistem ini secara akurat untuk keperluan sosial dan
            pendataan masyarakat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/prediksi"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              🚀 Mulai Prediksi Sekarang
            </Link>
            <Link
              to="/panduan"
              className="inline-block text-blue-600 hover:underline font-medium mt-1 sm:mt-0"
            >
              Lihat Panduan →
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:block">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3208/3208721.png"
            alt="Ilustrasi Prediksi"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>

      {/* Panduan */}
      <section
        id="panduan"
        className="mt-20 bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          📘 Panduan Penggunaan
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>
            Masuk ke halaman <strong>Prediksi</strong>
          </li>
          <li>Isi seluruh data keluarga sesuai kondisi sebenarnya</li>
          <li>
            Klik tombol <em>Prediksi</em> dan lihat hasilnya
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
