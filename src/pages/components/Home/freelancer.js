import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const Freelance = () => {
  return (
    <main className=" w-full p-4 h-52 mb-7">
      <p className=" text-3xl font-bold"> 🥳 Information</p>
      <p className=" mt-2 opacity-60">
        Saya juga membuka jasa pembuatan website jika temen temen tertarik bisa
        chat saya di
      </p>
      <Link href={"https://wa.me/6287895013427"}>
        <p className="flex item-center mt-3 rounded-3xl justify-center py-2 px-3 w-40 bg-green-500 font-bold text-white">
          <BsWhatsapp className="mr-3 text-xl" /> Whatsapp
        </p>
      </Link>
    </main>
  );
};

export default Freelance;
