import trainers from "../../images/who-we-are/dancing-1.png";
import equipments from "../../images/who-we-are/power-red.png";
import machines from "../../images/who-we-are/icons8.png";

function Facilities() {
  return (
    <div className="mb-24 flex flex-col items-center justify-center gap-12 text-center lg:flex-row lg:gap-0 2xl:justify-start">
      <div className="flex flex-col items-center gap-4">
        <img
          src={trainers}
          alt="trainers"
          className="hover:rotate-y-180 h-auto w-16 transition-all duration-700"
        />
        <h4 className="w-48 text-xl font-bold uppercase">
          Professional trainers
        </h4>
      </div>
      <div className="flex flex-col items-center gap-4 lg:border-l lg:border-r lg:border-gray-150">
        <img
          src={equipments}
          alt="equipments"
          className="hover:rotate-y-180 h-auto w-16 transition-all duration-700"
        />
        <h4 className="w-48 text-xl font-bold uppercase">Legeza Battle</h4>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          src={machines}
          alt="machines"
          className="hover:rotate-y-180 h-auto w-16 transition-all duration-700"
        />
        <h4 className="w-48 text-xl font-bold uppercase">Jump Sessions</h4>
      </div>
    </div>
  );
}

export default Facilities;
