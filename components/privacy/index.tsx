import { useRouter } from 'next/router'
import SectionTitle from "@/components/Common/SectionTitle";
import Image from 'next/image';
import Link from 'next/link';

const PRIVACY_POLICY_TEXT = `Legal disclaimers for New Venture Partners :
All the information on this website is published in good faith and for general information purpose only. "www.newventurecp.com" does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website "www.newventurecp.com", is strictly at your own risk. Will not be liable for any losses and/or damages in connection with the use of our website.
From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad'.
Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
Consent
By using our website, you hereby consent to our disclaimer and agree to its terms.
Should we update, amend or make any changes to this document, those changes will be prominently posted here.`;

const PrivacyPolicyComponent = () => {
  return (
   <>
    <section id="privacy" className="pt-16 mt-20 md:pt-20 lg:pt-10">
      <div className="container">
       
          
      
            <div className="wow fadeInUp ml-20  text-justify" data-wow-delay=".15s">
              <SectionTitle
                title="Privacy Policy" 
                paragraph={PRIVACY_POLICY_TEXT}
                mb="50px" center
        
              />
              </div>
            </div>
      

    </section>
    </>
  );
};

export default PrivacyPolicyComponent;