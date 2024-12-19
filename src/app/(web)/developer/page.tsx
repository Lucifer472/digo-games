import HeaderImage from "@/components/header-image";
import { SITE_TITLE, SITE_URL } from "@/config";

const DeveloperPage = () => {
  const siteWithoutRequest = SITE_URL.slice(8, 100);

  return (
    <div className="space-y-4 mb-12 px-4 md:px-2 xl:px-0">
      <HeaderImage src="/images/developer.png" />
      <div className="text-gray-300 space-y-2">
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>Developers - {SITE_TITLE}</h1>
        </div>
        <p className="mb-2">
          {SITE_TITLE} is a top game development studio dedicated to making fun
          and interesting gaming experiences. In addition to creating games, we
          also have expertise in gaming apps and responsive game design, which
          ensures seamless platform integration.
        </p>
        <p className="mb-2">
          Content creators on the {SITE_TITLE} platform have unparalleled
          control over their works. Posting, publishing, tracking, and
          monetizing content is made simple by our user-friendly interface. But
          what really sets us apart are the vibrant community and large number
          of visitors to {SITE_TITLE}.com, which give creators unparalleled
          visibility and audience access.
        </p>
        <p className="mb-2">
          Imagine having the ease to bring your creations to a global audience,
          monetize your labor of love, and increase traffic to your games.
        </p>
        <p className="mb-2">
          Developers can make a profitable business out of their passion for
          games with the aid of our platform.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>Contact Us and Join Now</h1>
        </div>
        <p className="mb-2">help@{siteWithoutRequest}</p>
      </div>
    </div>
  );
};

export default DeveloperPage;
