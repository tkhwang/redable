import Image from 'next/image';
import LogoImage from '../../../assets/readable-logo.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogoProps {}

export function Logo() {
  return (
    <div className="relative w-11 h-11">
      <Image src={LogoImage} alt="logo" layout="fill" />
    </div>
  );
}

export default Logo;
