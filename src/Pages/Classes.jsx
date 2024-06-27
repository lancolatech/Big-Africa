import HeroPages from "../components/hero-pages/HeroPages";
import ClassCards from "../components/classes-page/ClassCards";
import Title from "../components/classes-page/Title";
import Images from "../components/classes-page/Images";
import History from "../components/about-page/history/History";
function Classes() {
  return (
    <main>
      <HeroPages page="Classes" />
      <Title />
      <ClassCards />
      <Images />
      <History />
    </main>
  );
}

export default Classes;
