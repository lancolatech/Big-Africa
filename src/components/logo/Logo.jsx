import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/Big_Afrique2.ico";
import logoBlack from "../../images/logo/Big_Afrique2.ico";

function Logo({ size = "w-auto", type = "white" }) {
  return (
    <div className="w-full">
      <div className="w-35 h-35  rounded-full">
        <Link
          to="/"
          className="focus inline-block "
          style={{ borderRadius: 20 }}
        >
          <img
            src={`${type === "black" ? logoBlack : logoWhite}`}
            alt="Big Africa Logo"
            className={`h-auto ${size} w-35 h-35 bg-black rounded-full`}
          />
        </Link>
      </div>
    </div>
  );
}

export default Logo;
