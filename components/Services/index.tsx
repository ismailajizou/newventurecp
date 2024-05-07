import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Services = () => {
  return (
  <>
    <section  id="services " className="relative z-10 py-36 md:py-40 lg:py-48">
      <div className="container">
        <SectionTitle
          title="Services"
          paragraph=""center
          width="665px"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

          <PricingBox
            service={"Consulting"}
            subtitle=""
            link="/contact">
            <OfferList text="Strategy design" status="active" />
            <OfferList text="Transformation programs" status="active" />
            <OfferList text="Strategic due diligence" status="active" />
            <OfferList text="Sustainble value" status="active" />
          </PricingBox>

          <PricingBox
        link="/contact"
            service={"Capital advisory & investment solution"}
            subtitle=""
          >
            <OfferList text= "Capital Raising Advisory" status="active" />
            <OfferList text="Mergers & Acquisitions Advisory" status="active" />
            <OfferList text="Strategic Financial Advisory" status="active" />
            <OfferList text="Transaction Services" status="active" />
          </PricingBox>
         
          <PricingBox
            service={"Business Developement"}
           link="/contact"
            subtitle=""
          >
            <OfferList text="Networking" status="active" />
            <OfferList text="Consutting/Research" status="active" />
            <OfferList text="Export/Brokerage" status="active" />
            <OfferList text="Market research" status="active" />
         
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    </>
  );
};

export default Services ;
