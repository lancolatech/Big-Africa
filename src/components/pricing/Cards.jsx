import TertiaryButton from "../buttons/TertiaryButton";

import img1 from "../../images/pricing/img1.webp";
import img2 from "../../images/pricing/img2.webp";
import img3 from "../../images/pricing/img3.webp";

const imgStyles = `grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0`;

const headingStyles = `clip-path-left group-hover:clip-path-right absolute bottom-[-1px] right-1/2 w-3/4 translate-x-1/2 bg-white py-5 text-lg font-bold text-red transition-all duration-500 group-hover:bg-red group-hover:text-white`;

function Cards() {
  return (
    <div className="relative z-10 grid gap-8 xl:grid-cols-2 2xl:grid-cols-3">
      {/* 01 */}
      <div className="flex flex-col shadow-2xl">
        <div className="group relative overflow-hidden">
          <img src={img1} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Kids classes</h4>
        </div>
        <div className="relative z-[1] space-y-8 bg-white py-10">
          <h5 className="text-2xl text-gray-300">
            ksh <span className="text-6xl font-bold text-gray-600">300</span> p/s
          </h5>
          <ul className="space-y-3 font-medium text-gray-300">
            <li>On Saturday</li>
            <li>We have kids classes</li>
            <li>Age from 4 years</li>
            <li>Time 9am to 1pm</li>
            
          </ul>
          <TertiaryButton>Book now</TertiaryButton>
        </div>
      </div>

      {/* 02 */}
      <div className="flex flex-col shadow-2xl">
        <div className="group relative overflow-hidden">
          <img src={img2} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Dance Class</h4>
        </div>
        <div className="relative z-[1] space-y-8 bg-white py-10">
          <h5 className="text-2xl text-gray-300">
            ksh <span className="text-6xl font-bold text-gray-600">300</span> p/s
          </h5>
          <ul className="space-y-3 font-medium text-gray-300">
            <li>Saturday Afternoon</li>
            <li>We have dance classes</li>
            <li>From 2pm to 6pm</li>
            <li>Come one come all</li>
            <li></li>
            
          </ul>
          <TertiaryButton>Book now</TertiaryButton>
        </div>
      </div>

      {/* 03 */}
      <div className="flex flex-col shadow-2xl xl:col-span-2 xl:w-1/2 xl:justify-self-center 2xl:col-span-1 2xl:w-auto">
        <div className="group relative overflow-hidden">
          <img src={img3} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Jump Sessions</h4>
        </div>
        <div className="relative z-[1] space-y-8 bg-white py-10">
          <h5 className="text-2xl text-gray-300">
            ksh <span className="text-6xl font-bold text-gray-600">200</span> p/s
          </h5>
          <ul className="space-y-3 font-medium text-gray-300">
            <li>On Sunday</li>
            <li>We have  Jump Sessions</li>
            <li>From 2pm to 5pm</li>
            <li>Come one come all</li>
          </ul>
          <TertiaryButton>Book now</TertiaryButton>
        </div>
      </div>
    </div>
  );
}

export default Cards;
