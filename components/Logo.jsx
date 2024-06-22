import Link from 'next/link';
import logo from '../public/images/Logo/logo.png';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={120} height={35} alt="Compnay Logo" />
    </Link>
  );
};
export default Logo;
