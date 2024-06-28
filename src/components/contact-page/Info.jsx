import SocialLinks from "../footer/SocialLinks";

const headingStyles = `relative mb-4 mt-6 pb-2 text-xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red`;

function Info() {
  return (
    <div>
      <h3 className="mb-4 text-3xl font-bold">
        We are here for help you on you dancing Journey
      </h3>
      <p className="font-medium text-gray-300">
      Thank you for your interest in BADA Dance Academy! Whether you`re looking to enroll in classes, inquire about our programs, or simply want to learn more about what we offer, we`re here to help. Feel free to reach out to us using the contact 
      </p>
      <div className="grid 2xl:grid-cols-2 2xl:gap-y-8">
        <div>
          <h4 className={headingStyles}>Eldoret, Kenya</h4>
          <address className="font-medium not-italic text-gray-300">
          Rupa`z Fun N Fitness Centre
            
          </address>
        </div>
        <div>
          <h4 className={headingStyles}>Opening Hours</h4>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Fri: 9:00 am — 6:00 am
          </p>
          <p className="whitespace-nowrap font-medium text-gray-300">
          Saturday: 9:00am - 6:00pm<br /> Sunday: 2pm - 6pm
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Information</h4>
          <a
            href="tel:(+254) 746520010"
            className="block font-medium text-gray-300"
          >
            (+254) 746520010
          </a>
          <a
            href="mailto:info@bigafriquedanceacademy.com "
            className="block font-medium text-gray-300"
          >
            info@bigafriquedanceacademy.com 
          </a>
        </div>
        <div>
          <h4 className={headingStyles}>Follow Us On</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Info;
