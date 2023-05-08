import { NextPage } from "next";
import Link from "next/link";

interface Props {
  text: string;
  href?: string;
  onClick?: () => void;
}

const Button: NextPage<Props> = ({ text, onClick, href }) => {
  const className =
    "bg-blue-600 text-white w-full py-2 px-4 rounded font-bold text-lg hover:bg-blue-500 sm:w-60 duration-150 block text-center";
  return (
    <>
      {!href && (
        <button className={className} onClick={onClick}>
          {text}
        </button>
      )}
      {href && (
        <Link href={href} className={className}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
