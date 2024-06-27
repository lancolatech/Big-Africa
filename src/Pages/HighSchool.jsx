import HeroPages from "../components/hero-pages/HeroPages";
import Images from "../components/highschool/Images";
import History from "../components/about-page/history/History";
import Title from "../components/highschool/Title";

function HighSchool() {
  return (
    <main>
      <HeroPages page="HighSchool" />
      <Title/>
      <Images />
      
      <History />
    </main>
  );
}

export default HighSchool;

