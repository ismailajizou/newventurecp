import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
              <Image
                src="/images/about/about_img.png"
                alt="about image"
                fill
                className="w-full h-auto"
              />
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
