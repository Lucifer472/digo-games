import Image from "next/image";
import Link from "next/link";

export const GameLink = ({
  game,
}: {
  game: { label: string; link: string; src: string };
}) => {
  return (
    <div className="relative w-full h-full md:rounded-2xl aspect-[1/1.5] sm:aspect-[2/1]">
      <Image
        src={"/game-icons/" + game.src}
        alt="background-image"
        fill
        className="object-cover md:rounded-2xl"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-y-6">
        <h2 className="text-2xl text-nowrap md:text-4xl font-medium text-white uppercase">
          {game.label}
        </h2>
        <Image
          src={"/game-icons/" + game.src}
          alt="background-image"
          width={200}
          height={200}
          className="object-cover md:rounded-2xl aspect-square"
        />
        <Link
          href={game.link}
          className="w-full py-4 text-center bg-lime-400 text-black font-medium rounded-full hover:text-white hover:bg-rose-600"
        >
          Play Game
        </Link>
      </div>
    </div>
  );
};
