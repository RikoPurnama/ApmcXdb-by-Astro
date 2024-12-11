import React, { useEffect, useState } from "react";

import MitraVoc from "./react/carousel/mitraVoc";

const mitraVoucher = () => {
  const [totalClients, setTotalClients] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [clients, setClients] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (totalClients === null || totalClients <= 0) {
      setMessage("Masukkan jumlah klien yang valid!");
      return;
    }

    try {
      const response = await fetch("/api/updateclients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ totalClients }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Jumlah klien berhasil diperbarui!");
        setToggleUpdate(!toggleUpdate);
        fetchClientData();
      } else {
        setMessage(data.message || "Gagal memperbarui jumlah klien!");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setMessage("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  const fetchClientData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/clients");
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Gagal memuat data klien:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClientData();

    const checkSession = async () => {
      try {
        const response = await fetch("/api/checksession");
        if (!response.ok) {
          throw new Error("Session invalid");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      setUser(null); // Pastikan user null jika gagal
      }
    };

    checkSession();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-32">
        <div className="w-full">
          <div className="w-full px-4 pb-8 flex flex-col justify-center items-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-center">
              apmcXdb<span className="text-primary">Net</span> Telah Memiliki{" "}
              {isLoading ? (
                <p>...</p>
              ) : (
                <>
                  {clients.map((Clients) => (
                    <span key={Clients.id}>{Clients.total}+</span>
                  ))}
                </>
              )}{" "}
              Clients untuk saat ini
            </h3>
            <h4 className="text-base text-slate-600">
              Berikut adalah beberapa mitra Voucher dari apmcXdb
              <span className="text-primary">Net</span>
            </h4>

            {user && (
              <>
                {toggleUpdate ? (
                  <form
                    action=""
                    method="post"
                    onSubmit={handleSubmit}
                    className="py-4"
                  >
                    <input
                      type="number"
                      name="Update Client"
                      id="Update Client"
                      value={totalClients || ""} // Bind ke state
                      onChange={(e) =>
                        setTotalClients(parseInt(e.target.value, 10))
                      } // Update state
                      className="border p-2 mb-2 w-full"
                      placeholder="Masukkan jumlah klien"
                      required
                    />

                    <button
                      type="submit"
                      className="w-full bg-primary text-white p-2 text-center rounded-md"
                    >
                      Simpan
                    </button>
                    {message && <p>{message}</p>}
                  </form>
                ) : (
                  <button
                    onClick={() => setToggleUpdate(true)}
                    className="px-4 py-2 mt-4 border border-dark/50 rounded-md"
                  >
                    Update jumlah Clients
                  </button>
                )}
              </>
            )}
          </div>
          <MitraVoc />
        </div>
      </div>
    </section>
  );
};

export default mitraVoucher;
