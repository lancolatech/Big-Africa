import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="font-medium text-gray-300">
      <p className=" ">
        Privacy Policy | &copy; <span>{new Date().getFullYear()}</span> BADA
      </p>
      <p>
        Designed by{" "}
        <Link
          to="https://www.lancolatech.com/"
          target="_blank"
          className="focus text-red"
        >
          Lancola Tech Company LTD 
        </Link>
      </p>
    </div>
  );
}

export default Copyright;
