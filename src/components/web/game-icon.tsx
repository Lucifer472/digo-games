import Image from "next/image";
import Link from "next/link";

export const GameIcon = ({
  link,
  label,
  src,
}: {
  link: string;
  src: string;
  label: string;
}) => {
  return (
    <Link
      href={link}
      className="w-full h-full cursor-pointer block col-span-1 group bg-[#020c17]"
    >
      <div className="relative w-full h-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={"/game-icons/" + src}
          alt={label}
          fill
          className="w-full object-contain rounded-xl inset-1"
        />
        <div className="absolute -bottom-full  w-full p-2 group-hover:bottom-0 transition-all duration-500 bg-gradient-to-t from-slate-900 to-transparent">
          <h1 className="text-lg font-semibold">{label}</h1>
        </div>
      </div>
    </Link>
  );
};
