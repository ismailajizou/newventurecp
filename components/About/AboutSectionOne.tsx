import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center  text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 mt-20 md:pt-20 lg:pt-20">
      <div className="container">
        <div className="flex flex-wrap items-center   -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="wow fadeInUp text-justify" data-wow-delay=".15s">
              <SectionTitle
                title="Why Choose us?" 
                paragraph="   With its strategic location, diverse opportunities, and pro-business environment, Morocco holds immense potential for international companies seeking growth and expansion. From navigating regulatory landscapes to fostering strategic partnerships, we provide the expertise and local insights necessary for success in this vibrant ecosystem.
                <br /><br />
                We believe in more than just business transactions; we're committed to fostering sustainable development and economic empowerment within Morocco. Through collaborative initiatives and community engagement, we strive to create lasting value for both our clients and the Moroccan society."
                mb="150px"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 -mt-8">
            <div className="wow fadeInUp relative mx-auto lg:ml-auto aspect-[45/44] max-w-[500px]" data-wow-delay=".2s"
             style={{ border: '5px solid #d4d4d8', borderRadius: '10%', overflow: 'hidden' }}
            >
              <Image
                src="/images/about/about_img.png"
                alt="about-image"
                fill
                className="mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;