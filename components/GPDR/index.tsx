import { useRouter } from 'next/router'
import SectionTitle from "@/components/Common/SectionTitle";
import Image from 'next/image';
import Link from 'next/link';

const GPDR_txt = `Under the General Data Protection Regulation (GDPR) (EU) 2016/679, we have a legal duty to protect any information we collect from you. Information contained in this email and any attachments may be privileged or confidential and intended for the exclusive use of the original recipient. If you have received this email by mistake, please advise the sender immediately and delete the email, including emptying your deleted email box.`;

const GPDR = () => {
  return (
   <>
    <section id="privacy" className="pt-16 mt-20 md:pt-20 lg:pt-10">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">

            <div className="w-full lg:w-1/2 px-4 mt-10">
            <div className="wow fadeInUp relative mx-auto lg:ml-auto aspect-[35/33] max-w-[500px]" data-wow-delay=".2s"
             style={{ border: '5px solid #d4d4d8', borderRadius: '10%', overflow: 'hidden' }}
            >
              <Image
                src="/images/GPDR/GPDR.png"
                alt="about-image"
                fill
                className="mx-auto max-w-full"
              />
              
            </div>
          
          </div>

          <div className="w-full lg:w-1/2 px-4 mt-10">
            <div className="wow fadeInUp ml-20  text-justify" data-wow-delay=".15s">
              <SectionTitle
                title="GDPR" 
                paragraph={GPDR_txt}
                mb="50px"
        
              />
              </div>
            </div>
        </div>
        


      </div>


    </section>
    </>
  );
};

export default GPDR;