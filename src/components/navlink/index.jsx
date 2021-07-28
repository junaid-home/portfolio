import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ to, children, footer }) {
  const router = useRouter();

  return (
    <li
      className={footer ? `header-link footer-link` : "header-link"}
      style={router.pathname === to ? { color: "#f64c72" } : {}}
    >
      <Link href={to} passHref>
        <a>{children}</a>
      </Link>
    </li>
  );
}

export function getStaticProps() {}

export default NavLink;
