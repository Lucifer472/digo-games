import HeaderImage from "@/components/header-image";
import { SITE_TITLE, SITE_URL } from "@/config";

const DeveloperPage = () => {
  const siteWithoutRequest = SITE_URL.slice(8, 100);

  return (
    <div className="space-y-4 mb-12 px-4 md:px-2 xl:px-0">
      <HeaderImage src="/images/contact-us.png" />
      <div className="text-gray-300 space-y-2">
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>Contact US - {SITE_TITLE}</h1>
        </div>
        <p className="mb-2">help@{siteWithoutRequest}</p>
        <div className="mt-8 mb-2 font-semibold text-[32px] text-[#4280bf]">
          <h1>Copyright Issue</h1>
        </div>
        <p className="mb-2">
          We own the Intellectual Property Rights (IPR) to a large number of the
          games on {siteWithoutRequest} sites, and for certain games, we
          requested and obtained licenses from the copyright holders known to
          us. For some games, we could not find any copyright information, or,
          due to general use on the internet, this information can no longer be
          obtained.
        </p>
        <p className="mb-2">
          Some games may be used under special conditions, considering a number
          of prerequisite constraints. These prerequisite constraints are, as
          far as we could determine, met by {SITE_TITLE}.
        </p>
        <p className="mb-2">
          We do not change anything in the source code of the games. For
          example, credit holders, brand names, or references to websites remain
          unchanged. If any copyright or other IPR that you may have is possibly
          being infringed by/on {SITE_TITLE} sites, please inform us
          immediately, thereby providing us with the following:
        </p>
        <ul className="list-disc pl-4 sm:pl-6 space-y-4">
          <li>
            <p>
              the electronic or physical signature of the owner of the IPR or
              the person authorized to act on the owner&apos;s behalf;
            </p>
          </li>
          <li>
            <p>
              a description of the IP Right that has been infringed, and a
              description of the infringing activity;
            </p>
          </li>
          <li>
            <p>
              the location where the unauthorized copy of the copyrighted work
              exists (for example, the URL of the {SITE_TITLE} website where it
              is posted, or the name of the book in which it has been published,
              or, in case of a registered brand name, an excerpt of such
              register evidencing the registry);
            </p>
          </li>
          <li>
            <p>
              a copy of a license in which you are granted the right to use and
              to protect such IPR (if you are not the owner of the IPR);
            </p>
          </li>
          <li>
            <p>
              the identification of the URL or other specific location on this
              site where the material that you claim is infringing is located;
              this information must be specific enough to enable us to locate
              such material;
            </p>
          </li>
          <li>
            <p>your name and full contact details; and</p>
          </li>
          <li>
            <p>
              {" "}
              a statement by you that you have a sincere and honest belief that
              the disputed use is not authorized by the copyright owner, its
              agent, or the law.
            </p>
          </li>
        </ul>
        <p className="mb-2">
          Send above details at help@{siteWithoutRequest}. We will review it and
          will start taking action on it as soon as possible. We will reply you
          on any of the query within 7 days.
        </p>
      </div>
    </div>
  );
};

export default DeveloperPage;
