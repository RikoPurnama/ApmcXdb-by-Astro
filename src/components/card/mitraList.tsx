import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';

const MitraList = () => {
  const [openMitra, setOpenMitra] = useState(false);

  const arrow = openMitra ? "-rotate-45" : "rotate-45";

  return (
    <div onClick={() => setOpenMitra((prev) => !prev)} className="w-full max-w-[320px] md:max-w-[678px] min-w-[270px] px-8 py-4 mt-8 mx-auto bg-primary-transparent-1 border border-primary-transparent rounded-xl cursor-pointer">
      <p
        className="flex justify-between items-center"
      >
        Keuntungan dari Mitra adalah{" "}
        <GoArrowRight className={`text-primary text-2xl ${arrow}`} />
      </p>
      {openMitra && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="px-8">
          <ol className="flex flex-col pt-2 list-decimal">
            <li>Harga Voucher yang dijual</li>
            <li>Tidak repot ganti password setiap hari</li>
            <li>Jangkauan luas selagi ada sinyal</li>
            <li>Pembayaran Voucher jualan nanti kalau habis</li>
            <li>Tidak ada target</li>
          </ol>
        </motion.div>
      )}
    </div>
  );
};

export default MitraList;
