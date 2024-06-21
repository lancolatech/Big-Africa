import progression from "../../images/who-we-are/progression.png";
import workout from "../../images/who-we-are/workout.png";
import nutritions from "../../images/who-we-are/nutritions.png";

const cardStyles =
  "relative z-10 flex flex-col items-center gap-4 overflow-hidden rounded-br-3xl rounded-tl-3xl bg-white bg-[url('./images/who-we-are/card-bg.webp')] bg-cover bg-center bg-no-repeat px-5 py-10 text-center shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:z-[-1] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:bg-opacity-0";

function FeatureCards() {
  return (
    <div className="mt-[-50px] grid gap-14 2xl:grid-cols-3 2xl:gap-6">
      <div className={cardStyles}>
        <img src={progression} alt="progression" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">Jump Session Dance Programme</h5>
        <p className="font-medium">
        Join us every Sunday from 2pm to 6pm at Rupa`z Fun N Fitness Centre Dance Studios for our Jump Session Dance Programme. This weekly dance program is designed for the youth, providing a safe and supportive space to learn and interact. Whether you`re a beginner or an experienced dancer, our sessions are the perfect opportunity to enhance your skills and make new friends. 

Location: Rupa`z Fun N Fitness Centre Dance Studios  
Time: Sundays, 2pm - 6pm
        </p>
      </div>
      <div className={cardStyles}>
        <img src={workout} alt="workout" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">Legeza Dance Battle</h5>
        <p className="font-medium">
        Get ready for the annual Legeza Dance Battle! Open to dancers from across East Africa, this competition empowers participants by exposing them to international dance standards. Compete for a chance to win money and other exciting prizes. The Legeza Dance Battle is more than just a competition; it`s an opportunity to showcase your talent on a grand stage and connect with fellow dancers.
        Event Date: Insert Date Here for our upcoming event 
        Location: Insert Location Here
        </p>
      </div>
      <div className={cardStyles}>
        <img src={nutritions} alt="nutritions" className="h-auto w-20" />
        <h5 className="text-2xl font-bold uppercase">High School Talent Tou</h5>
        <p className="font-medium">
        Our High School Talent Tour brings opportunities directly to students. We visit various high schools, providing platforms for students to showcase their talents in dance, singing, spoken word, poetry, arts, eating competitions, and modeling. Winners are awarded certificates and given the chance to record at Big Afrique Studios in Rupa`z Fun N Fitness Centre. Join us in celebrating and nurturing the diverse talents of our youth.
          Contact Us: 0746520010
        </p>
      </div>
    </div>
  );
}

export default FeatureCards;
