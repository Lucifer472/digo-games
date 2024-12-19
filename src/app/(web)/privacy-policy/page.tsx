import { SITE_TITLE, SITE_URL } from "@/config";

const DeveloperPage = () => {
  const siteWithoutRequest = SITE_URL.slice(8, 100);

  return (
    <div className="space-y-4 mb-12 px-4 md:px-2 xl:px-0">
      <div className="text-gray-300 space-y-2">
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>Privacy Policy for {siteWithoutRequest}</h1>
        </div>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>1. Introduction</h1>
        </div>
        <p className="mb-2">
          As stated in this Privacy Statement, {SITE_TITLE} is principally in
          charge of gathering and utilizing your Personal Data. We put your
          privacy first and work hard to keep your data safe by being open and
          honest about the purposes and methods of our processing.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>2. Automatic Data Logging</h1>
        </div>
        <p className="mb-2">
          We obtain and utilize your IP address to administer our website,
          troubleshoot server problems, and compile demographic data. In
          addition, we automatically collect click stream data, browser type,
          and ISP information to better personalize our website to
          visitors&apos; interests. This automatically gathered data is
          connected to additional personal data we gather about you.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>3. Data Collection</h1>
        </div>
        <p className="mb-2">
          We don&apos;t get any user data or information from users.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>4. Use of Data</h1>
        </div>
        <p className="mb-2">
          Our purposes for collecting and using your data are as follows:
        </p>
        <ul className="list-disc pl-2 sm:pl-4 space-y-4">
          <li>
            <p>To maintain and provide our website.</p>
          </li>
          <li>
            <p>
              To supervise your participation in account management and
              affiliate partner programs.
            </p>
          </li>
          <li>
            <p>
              To communicate with you regarding your account, updates, and
              inquiries.
            </p>
          </li>
          <li>
            <p>Enhancing our website&apos;s usability and functionality.</p>
          </li>
          <li>
            <p>To uphold legal obligations.</p>
          </li>
        </ul>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>5. Third Party Sharing</h1>
        </div>
        <p className="mb-2">
          We might use third-party payment processors to make transactions and
          payments on our website easier, even though we don&apos;t permit third
          parties to access or process data directly. To learn more, please
          review each company&apos;s privacy policies.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>6. Data Retention</h1>
        </div>
        <p className="mb-2">
          We will retain your information on file for as long as it takes to
          fulfill your request. If you would like to request that we no longer
          use your information to provide you with services, please get in touch
          with us at the previously mentioned email address. Your data will be
          retained on file and used only to satisfy legal obligations, resolve
          conflicts, and enforce agreements.
        </p>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>7. Age Restricted Activities</h1>
        </div>
        <p className="mb-2">
          Most of the features and activities on {siteWithoutRequest} are
          suitable for players of all ages. A few of them require the user to be
          at least thirteen years old. On these pages, we ask users to indicate
          their age.
        </p>
        <p className="mb-2">
          Individuals who self-identify as under 13 will be redirected to an
          age-appropriate website. We use cookies to store whether or not a user
          is over 13 in order to personalize their experience on{" "}
          {siteWithoutRequest}
        </p>
        <div className="mt-8 mb-2 font-semibold text-[28px] text-[#4280bf]">
          <h1>8. Protective Measures</h1>
        </div>
        <p className="mb-2">
          We have implemented the necessary security measures to prevent
          unauthorized individuals from accessing, disclosing, altering, or
          destroying your personal information. However, no internet data
          transfer or data storage system can guarantee 100% security. Kindly
          exercise caution when sharing personal information on the internet.
        </p>
        <p className="mb-2 font-medium">
          We do not collect or hold any information about gaming activity. There
          isn&apos;t any gambling-related content on this platform.
        </p>
        <p className="mb-2 font-medium">
          In our games, all of the money is virtual and has no real value.
        </p>
        <p className="mb-2 font-medium">
          We don&apos;t require users to finish any tasks related to collecting
          payments; all games are just meant to be fun.
        </p>
      </div>
    </div>
  );
};

export default DeveloperPage;
