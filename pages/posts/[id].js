import { useRouter } from "next/router";
import Link from "next/Link";

export default function post() {
  const router = useRouter();

  return (
    <div>
      Id da página atual: {router.query.id}
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
