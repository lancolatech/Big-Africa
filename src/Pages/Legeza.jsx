import HeroPages from "../components/hero-pages/HeroPages";
import Images from "../components/legeza/Images";
import History from "../components/about-page/history/History";
import Title from "../components/legeza/Title";


function Legeza() {
  return (
    <main>
      <HeroPages page="Legeza" />
      <Title />
      <Images />
      <History />
    </main>
  );
}

export default Legeza;

