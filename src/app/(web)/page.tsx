import TopHeader from "@/components/ads/top-header";
import { GameIcon } from "@/components/web/game-icon";
import { Games } from "@/config";

const Homepage = () => {
  return (
    <div className="w-full h-full space-y-6 my-12">
      <TopHeader />
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-2 h-full px-4 md:px-2 xl:px-0">
        {Games.map((game) => (
          <GameIcon
            src={game.src}
            label={game.label}
            link={game.link}
            key={game.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Homepage;
