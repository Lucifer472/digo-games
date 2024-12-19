import HeaderImage from "@/components/header-image";
import { SITE_TITLE, SITE_URL } from "@/config";

const AboutUs = () => {
  const siteWithoutRequest = SITE_URL.slice(8, 100);

  return (
    <div className="space-y-4 mb-12 px-4 md:px-2 xl:px-0">
      <HeaderImage src="/images/about-us.png" />
      <div className="text-gray-300">
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>About {SITE_TITLE}</h1>
        </div>
        <p className="mb-2">
          Welcome to {siteWithoutRequest}, web based gaming platform! With over
          20+ games across Multiple categories we provide excellent gaming
          experience to users.
        </p>
        <p className="mb-2">
          At {siteWithoutRequest}, we understand the power of gaming to create
          memorable experiences and forge connections between people. Whether
          you&apos;re a fan of cars or bike racing, adventure games, actionable
          and thrilling games, we&apos;ve covered everything for you.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>Our Mission</h1>
        </div>
        <p className="mb-2">
          Our mission is to provide smooth gaming experience where users can
          instant play to all our games without downloads, login, popups or
          other distractions.
        </p>
        <p>
          We pride ourselves on delivering a seamless and user-friendly gaming
          experience. Our website is designed with intuitive navigation and
          responsive interfaces, ensuring that you can dive into your favorite
          games with just a few clicks. We also prioritize your safety and
          security, implementing robust measures to protect your personal
          information and provide a safe environment for all users.
        </p>
        <p>
          {siteWithoutRequest} is more than just a gaming platform; it&apos;s a
          vibrant community. Join our growing community of gamers, where you can
          connect with like-minded individuals, share your achievements, and
          participate in lively discussions. Engage in friendly competitions,
          collaborate with fellow players, or simply find a place to relax and
          have fun.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>Have any issue?</h1>
        </div>
        <p className="mb-2">
          Our team of passionate people is dedicated to providing you with
          exceptional customer support. If you ever encounter any issues or have
          any questions, our support team is here to assist you every step of
          the way. We value your feedback and constantly strive to improve our
          platform based on your suggestions and needs.
        </p>
        <p>
          So, whether you&apos;re seeking an adrenaline rush, a mental
          challenge, or simply a momentary escape, {siteWithoutRequest} is your
          go-to destination. Prepare to embark on unforgettable gaming
          adventures and unlock a world of limitless possibilities. Join us
          today and let the games begin!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
