import React, { useState } from "react";
import { predictStatusEkonomi, type StatusEkonomiInput } from "../api/predict";
import { motion, AnimatePresence } from "framer-motion";

function PrediksiStatusEkonomi() {
  const [formData, setFormData] = useState<StatusEkonomiInput>({
    Pendapatan_Keluarga: 0,
    Status_Pekerjaan: 0,
    Jumlah_Tanggungan: 0,
    Kepemilikan_Aset: 0,
  });

  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value),
    });
  };

  const handlePredict = async () => {
    try {
      setLoading(true);
      const prediction = await predictStatusEkonomi(formData);
      setResult(prediction);
    } catch (err) {
      alert("Gagal menghubungi server prediksi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-3 text-gray-800">
        Form Prediksi Status Ekonomi
      </h1>
      <p className="mb-6 text-gray-500">
        Masukkan informasi berikut untuk mengetahui apakah keluarga termasuk
        miskin atau tidak.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {[
          {
            label: "Pendapatan Keluarga",
            name: "Pendapatan_Keluarga",
            options: [
              [0, "Tidak Ada Pendapatan"],
              [1, "Di Bawah UMR"],
              [2, "Di Atas UMR"],
            ],
          },
          {
            label: "Status Pekerjaan",
            name: "Status_Pekerjaan",
            options: [
              [0, "Tidak Bekerja"],
              [1, "Bekerja Tidak Tetap"],
              [2, "Bekerja Tetap"],
            ],
          },
          {
            label: "Jumlah Tanggungan",
            name: "Jumlah_Tanggungan",
            options: [
              [0, "1 Orang"],
              [1, "2 Orang"],
              [2, "Lebih dari 2 Orang"],
            ],
          },
          {
            label: "Kepemilikan Aset",
            name: "Kepemilikan_Aset",
            options: [
              [0, "Tidak Memiliki Rumah"],
              [1, "Memiliki Rumah Sendiri"],
            ],
          },
        ].map(({ label, name, options }) => (
          <div key={name}>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              {label}
            </label>
            <select
              name={name}
              value={formData[name as keyof StatusEkonomiInput]}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {options.map(([val, text]) => (
                <option key={val} value={val}>
                  {text}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        onClick={handlePredict}
        className="mt-6 w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50 transition flex justify-center items-center"
        disabled={loading}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
            />
          </svg>
        ) : (
          "Prediksi Status"
        )}
      </button>

      <AnimatePresence>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`mt-6 p-4 rounded-md border text-center ${
              result === 1
                ? "bg-red-50 text-red-700 border-red-200"
                : "bg-green-50 text-green-700 border-green-200"
            }`}
          >
            <p className="text-lg font-semibold">Status Ekonomi:</p>
            <p className="text-2xl font-bold mt-1">
              {result === 1
                ? "Termasuk Keluarga Miskin"
                : "Tidak Termasuk Keluarga Miskin"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default PrediksiStatusEkonomi;
