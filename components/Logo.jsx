import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col justify-center items-center ">
      <div className="font-bold text-2xl bg-gradient-to-r from-yellow-400 to-amber-800 text-transparent bg-clip-text hover:cursor-pointer -mb-2">
        Urban
      </div>
      <div className="font-bold text-2xl bg-gradient-to-r from-yellow-400 to-amber-800 text-transparent bg-clip-text hover:cursor-pointer leading-tight">
        Vision
      </div>
    </Link>
  );
};
export default Logo;
