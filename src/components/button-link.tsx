import Link from "next/link";

const ButtonLink = ({
  label,
  link,
  isFooter,
  className,
}: {
  label: string;
  link: string;
  className?: string;
  isFooter?: boolean;
}) => {
  return (
    <Link
      href={link}
      className={
        isFooter
          ? `${className} text-sm font-light text-gray-100 hover:text-yellow-200 transition`
          : `${className} px-4 text-gray-50 uppercase font-medium text-lg transition hover:text-yellow-300`
      }
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
