import progression from "../../images/who-we-are/progression.png";
import workout from "../../images/who-we-are/workout.png";
import nutritions from "../../images/who-we-are/nutritions.png";
import SecondaryButton from "../buttons/SecondaryButton";
const cardStyles =
  "relative z-10 flex flex-col items-center gap-4 overflow-hidden rounded-br-3xl rounded-tl-3xl bg-white bg-[url('./images/who-we-are/card-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-1 text-center shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:z-[-1] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:bg-opacity-0";

function FeatureCards() {
  return (
    <div className="mt-[-50px] grid gap-14 2xl:grid-cols-3 2xl:gap-6">
      <div className={cardStyles}>
        <img src={progression} alt="progression" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">Jump Session Dance Programme</h5>
        <p className="font-medium">
        Join us at Rupa`z Fun N Fitness Centre Dance Studios for our Jump Session. 
        </p>
        <SecondaryButton to="/classes">Read More</SecondaryButton>
      </div>
      <div className={cardStyles}>
        <img src={workout} alt="workout" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">Legeza Dance Battle</h5>
        <p className="font-medium">
        Get ready for the annual Legeza Dance Battle! Open to dancers from across East Africa.  
        </p>
        <SecondaryButton to="/Legeza">Read More</SecondaryButton>
      </div>
      <div className={cardStyles}>
        <img src={nutritions} alt="nutritions" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">High School Talent Tou</h5>
        <p className="font-medium">
        Our High School Talent Tour brings opportunities directly to students across East Africa. 
        </p>
        <SecondaryButton to="/HighSchool">Read More</SecondaryButton>
      </div>
    </div>
  );
}

export default FeatureCards;
