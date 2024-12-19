import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className={`aspect-square block relative ${className}`}>
      <Image
        src={"/logo-transparent.png"}
        alt="Logo"
        fill
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
};

export default Logo;
