import Link from "next/link";
import Image from "next/image";

import ButtonLink from "../button-link";
import Logo from "../logo";

import { footerLinks, Games, socialLinks } from "@/config";

const Footer = () => {
  return (
    <footer className="z-10 relative bg-[#020c17] w-full pt-8 pb-12 flex items-center justify-center border-t border-gray-900">
      <div className="w-full max-w-screen-xl flex flex-wrap px-4 lg:px-2 xl:px-0 gap-y-12 gap-x-36">
        <Logo className="size-[120px]" />
        <div className="flex flex-col justify-start">
          <h2 className="text-lg font-semibold text-white">Resources</h2>
          <ul className="mt-4">
            {footerLinks.map((footer) => (
              <li key={footer.label} className="my-1.5">
                <ButtonLink label={footer.label} link={footer.link} isFooter />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="text-lg font-semibold text-white">Games</h2>
          <div className="flex gap-x-8">
            <ul className="mt-4">
              {Games.map((game, index) => {
                if (index > 3) return;
                return (
                  <li key={game.label} className="my-1.5">
                    <ButtonLink label={game.label} link={game.link} isFooter />
                  </li>
                );
              })}
            </ul>
            <ul className="mt-4">
              {Games.map((game, index) => {
                if (index < 4) return;
                return (
                  <li key={game.label} className="my-1.5">
                    <ButtonLink label={game.label} link={game.link} isFooter />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <h2 className="text-lg font-semibold text-white">Connect</h2>
          <ul className="mt-4 flex flex-col items-start gap-y-4">
            {socialLinks.map((social) => (
              <li key={social.tag}>
                <Link
                  href={social.link}
                  target="_blank"
                  className="flex items-center justify-center gap-x-2 group"
                >
                  <Image
                    width={20}
                    height={20}
                    src={"/social/" + social.icon}
                    alt={social.tag}
                    style={{ objectFit: "cover", aspectRatio: "1/1" }}
                  />
                  <span className="text-sm text-gray-100 group-hover:text-yellow-200 transition">
                    {social.tag}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            href={"/contact-us"}
            className="px-12 py-4 text-white bg-rose-700 rounded-full hover:bg-rose-600 transition hover:font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
