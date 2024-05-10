import { useRouter } from 'next/router'
import SectionTitle from "@/components/Common/SectionTitle";
import Image from 'next/image';
import Link from 'next/link';
import PrivacyPolicyComponent from '@/components/privacy';

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicyComponent />
    </>
  );
};

export default PrivacyPolicyPage;