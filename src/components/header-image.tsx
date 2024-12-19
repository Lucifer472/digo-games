import Image from "next/image";

const HeaderImage = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full h-full rounded-2xl aspect-[2/1] lg:aspect-[3/1]">
      <Image
        src={src}
        fill
        alt="About Us"
        className="object-cover rounded-2xl"
      />
    </div>
  );
};

export default HeaderImage;
