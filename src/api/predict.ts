export interface StatusEkonomiInput {
  Pendapatan_Keluarga: number;
  Status_Pekerjaan: number;
  Jumlah_Tanggungan: number;
  Kepemilikan_Aset: number;
}

export async function predictStatusEkonomi(
  data: StatusEkonomiInput
): Promise<number> {
  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Gagal terhubung ke API.");
  }

  const result = await response.json();
  return result.status_ekonomi; // sesuai JSON dari Flask
}
