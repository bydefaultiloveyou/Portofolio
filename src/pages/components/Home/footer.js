import Link from "next/link";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full p-4">
      <p className=" text-3xl font-bold"> 😁 Terima Kasih</p>
      <p className="mt-3 opacity-70">
        terima kasih untuk kalian semua karena sudah mampir ke portfolio ini,
        jika teman teman ingin membuat sebuah website jangan ragu ragu untuk
        menghubungi saya
      </p>

      <section className="h-full text-3xl flex items-center opacity-60 p-4 space-x-4">
        <Link href="https://github.com/bydefaultiloveyou" target="_blank">
          <AiFillGithub />
        </Link>
        <Link href="https://www.instagram.com/_justmeysa/" target="_blank">
          <AiOutlineInstagram />
        </Link>
        <Link href="https://meysadesu.vercel.app" target="_blank">
          <BiLink />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
