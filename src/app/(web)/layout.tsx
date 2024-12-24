import Image from "next/image";
import { Suspense } from "react";

import Footer from "@/components/footer/footer";
import { Header } from "@/components/navigation/header";
import { SearchBox } from "@/components/navigation/search-box";
import Script from "next/script";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full relative">
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5412050029883171"
        async
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Suspense>
        <SearchBox />
      </Suspense>
      <div className="relative z-10 w-full">
        <Header />
        <div className="w-full h-full mt-20 md:mt-24 max-w-screen-xl mx-auto">
          {children}
        </div>
        <Footer />
      </div>
      <div className="fixed min-h-screen h-full w-full top-0 left-0">
        <Image
          src={"/background.jpg"}
          fill
          alt="background"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bg-gradient-to-b from-[#030d17e6] to-[#030d17] top-0 left-0 w-full h-full"></div>
      </div>
    </main>
  );
};

export default WebLayout;
