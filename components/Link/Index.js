import Link from "next/Link";

export default function NextLink({ children, href, ...props }) {
  return (
    <Link href={href} passHref {...props}>
      {children}
    </Link>
  );
}
