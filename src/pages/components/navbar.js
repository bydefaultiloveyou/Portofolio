import Link from "next/link";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="relative">
      <nav className="relative w-full h-16 flex">
        <section className="w-1/2 h-full px-4 flex items-center">
          <p className=" -rotate-3 font-semibold text-3xl text-blue-500">
            巫女Meysa
          </p>
        </section>
        <section className="w-1/2 h-full text-4xl flex items-center opacity-60 justify-end p-4 space-x-4">
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
      </nav>
    </header>
  );
};

export default Navbar;
