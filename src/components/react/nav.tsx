import { useMediaQuery } from "../../util/useMediaQuery";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const matches = useMediaQuery("(min-width: 1280px)");
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
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

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to log out");
      }

      setUser(null);
      localStorage.clear();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header
      className={`w-full h-16 md:h-20 fixed bg-white shadow-[0_0_2px_0_rgb(0,0,0,0.2)] z-40`}
    >
      <div className="h-full container mx-auto px-8 lg:px-32 flex justify-between items-center">
        <a href="/" className="text-xl lg:text-2xl font-bold text-black">
          apmcXdb<span className="text-primary">Net</span>
        </a>

        {matches && (
          <nav>
            <ul className="flex justify-between items-center gap-6">
              <li>
                <a
                  className="hover:text-primary transition-all duration-200 ease-in-out"
                  href="/"
                >
                  {" "}
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-all duration-200 ease-in-out"
                  href="#Product"
                >
                  Product & Layanan
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-all duration-200 ease-in-out"
                  href="#Region"
                >
                  Cakupan Wilayah
                </a>
              </li>
            </ul>
          </nav>
        )}

        {!matches && (
          <button
            onClick={() => setToggle((prevToggle) => !prevToggle)}
            className="space-y-1.5 z-50"
            name="HumburgerMenu"
          >
            <motion.span
              animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }}
              className="block w-8 h-0.5 bg-black rounded"
            ></motion.span>
            <motion.span
              animate={{ width: toggle ? 0 : 24 }}
              className="block w-6 h-0.5 bg-black rounded"
            >
              {" "}
            </motion.span>
            <motion.span
              animate={{
                rotateZ: toggle ? -45 : 0,
                y: toggle ? -8 : 0,
                width: toggle ? 32 : 16,
              }}
              className="block w-4 h-0.5 bg-black rounded"
            >
              {" "}
            </motion.span>
          </button>
        )}

        <AnimatePresence>
          {toggle && !matches && (
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 35 }}
              className="w-full h-screen fixed bottom-0 left-0 flex justify-center items-center bg-white text-black"
            >
              <ul className="flex flex-col gap-16 text-lg">
                <li>
                  <a onClick={() => setToggle(false)} href="/">
                    {" "}
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggle(false)} href="#Product">
                    Product & Layanan
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggle(false)} href="#Region">
                    Cakupan Wilayah
                  </a>
                </li>
                {user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full py-1 border border-dark rounded-md"
                    >
                      Log out
                    </button>
                  </li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {matches && (
          <div className="flex items-center gap-8">
            <a
              className="py-2 px-4 bg-primary text-white rounded-md"
              href="https://wa.me/6289677600427"
              target="_blank"
            >
              Hubungi Kami
            </a>
            {user && (
              <button onClick={handleLogout} className="font-semibold py-2 px-4 border border-dark rounded-md">
                Log out
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
