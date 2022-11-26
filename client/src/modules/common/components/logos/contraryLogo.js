import { Image } from '..';

export default function ContraryLogo({ height, width }) {
  return (
    <Image
      height={height}
      width={width}
      src="https://contrary.com/logo.png"
      alt="Logo"
    ></Image>
  );
}
