import { Link } from "react-router-dom";
import { FaBars,  FaChartBar, FaPlus } from "react-icons/fa6";
// import { FaHome } from "react-icons/fa"

const btnStyles = `hover:text-red text-white transition-colors duration-300 focus`;

function NavButtons({ onToggleNav, onToggleSidebar }) {
  return (
    <div className="flex items-center justify-between gap-7">
      <button className={`3xl:hidden ${btnStyles}`} onClick={onToggleNav}>
        <FaBars className="h-6 w-6" />
      </button>
      {/* <Link to="/" className={btnStyles}>
        <FaHome className="h-6 w-6" />
      </Link> */}
      <button className={btnStyles}>
        <FaChartBar className="h-6 w-6" onClick={onToggleSidebar} />
      </button>
      <div className="focus hidden rounded-sm border-2 border-solid border-gray-350 p-1.5 lg:block">
        <Link
          to="https://voting-system-admin-six.vercel.app"
          className="mr-2 flex items-center justify-between gap-2 text-sm font-bold uppercase text-white outline-none"
        >
          <FaPlus className="h-8 w-8 rounded-sm bg-red p-2 text-white transition-transform duration-1000 hover:rotate-[360deg]" />
          Nominate now
        </Link>
      </div>
    </div>
  );
}

export default NavButtons;
