import TertiaryButton from "../buttons/TertiaryButton";

function CallToAction2() {
  return (
    <section className="relative z-[1] bg-black , bg-cover bg-[85%] px-6 py-20">
      <div className="container space-y-10">
        <h4 className="text-4xl font-bold text-white">
          Need a Dance Trainer?
        </h4>
        <p className="text-2xl font-bold text-white">
          <span className="text-red">Call:</span> (+254) 746520010
        </p>
        <TertiaryButton>Contact Us  now</TertiaryButton>
      </div>
    </section>
  );
}

export default CallToAction2;
