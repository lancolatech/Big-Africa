import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="relative z-20">
      <SecondaryHeading>Pricing chart</SecondaryHeading>
      <TertiaryHeading>Exclusive pricing plan</TertiaryHeading>
      <p className="mx-auto max-w-[50ch] font-medium text-gray-300">
        Have a look at our pricing plan.
      </p>
    </div>
  );
}

export default Title;
