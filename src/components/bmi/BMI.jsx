import Banner from './Banner';
import Title from "./Title";
import PrimaryButton from "../buttons/PrimaryButton";
function BMI() {
  return (
      <section className="overflow-x-clip bg-gray-600 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/bmi/legeza_battle.jpg')] bg-cover bg-right bg-no-repeat px-6 py-14">
      <div className="container space-y-6">
      <div className="App">
          <Title />
          <Banner />
          <div className="space-y-5 xl:justify-self-end">
  <PrimaryButton to="https://voting-system-admin-six.vercel.app">Nominate Now</PrimaryButton>
</div>
        </div>
        </div>
      </section>
    
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default BMI;