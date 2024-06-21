import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

import CloseButton from "./CloseButton";
import Logo from "../logo/Logo";

import img1 from "../../images/sidebar/1.jpg";
import img2 from "../../images/sidebar/2.jpg";
import img3 from "../../images/sidebar/3.jpg";
import img4 from "../../images/sidebar/4.jpg";
import img5 from "../../images/sidebar/5.jpg";
import img6 from "../../images/sidebar/6.jpg";

function Sidebar({ isSidebarOpen, handleToggleSidebar }) {
  return (
    <aside
      className={`fixed bottom-0 left-0 top-0 z-50 flex w-3/4 flex-col gap-12 overflow-y-scroll bg-white px-9 py-7 shadow-2xl transition-all duration-300 ${
        isSidebarOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      }`}
    >
      <header>
        <Logo size="w-32" type="black" />
        <CloseButton onClick={handleToggleSidebar} />
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">About Us</h2>
        <p className="font-medium text-gray-400">
        Discover the vibrant world of dance with BADA. We offer diverse programs to inspire and nurture the talents of East Africa`s youth. Explore our programs and join our community of passionate dancers.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Gallery</h2>
        <div className="grid grid-cols-3 gap-2.5 3xl:gap-4">
          <img
            src={img1}
            alt=""
            className="h-full w-full cursor-pointer rounded-lg"
          />
          <img
            src={img2}
            alt=""
            className="h-full w-full cursor-pointer rounded-lg"
          />
          <img
            src={img3}
            alt=""
            className="h-full w-full cursor-pointer rounded-lg"
          />
          <img
            src={img4}
            alt=""
            className="h-full w-full cursor-pointer rounded-lg"
          />
          <img
            src={img5}
            alt=""
            className="h-full w-full cursor-pointer rounded-lg"
          />
          <img
            src={img6}
            alt=""
            className="h-full w-full cursor-pointer rounded-lg"
          />
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Contact Info</h2>
        <div className="flex flex-col items-start gap-2">
          <Link
            to="/"
            className="focus flex items-center gap-2 font-medium text-gray-400 transition-colors duration-300 hover:text-red"
          >
            <FaLocationDot className="text-red" />
            Rupa`z Fun N Fitness Centre
          </Link>
          <Link
            to="tel:+982122542971"
            className="focus flex items-center gap-2 font-medium text-gray-400 transition-colors duration-300 hover:text-red"
          >
            <FaPhone className="text-red" /> (+254) 746520010
          </Link>
          <Link
            to="mailto:example@gymate.com"
            className="focus flex items-center gap-2 font-medium text-gray-400 transition-colors duration-300 hover:text-red"
          >
            <FaEnvelope className="text-red" /> info@bigafriquedanceacademy.com
          </Link>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Follow Us</h2>
        <div className="flex gap-3">
          <Link className="rounded-full bg-red p-3 text-white">
            <FaFacebookF className="h-auto w-6" />
          </Link>
          <Link className="rounded-full bg-red p-3 text-white">
            <FaXTwitter className="h-auto w-6" />
          </Link>
          <Link className="rounded-full bg-red p-3 text-white">
            <FaInstagram className="h-auto w-6" />
          </Link>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
