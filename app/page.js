import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Memory Lane Blog
        </h1>
        <ul className="space-y-4">
          <li>
            <Link href="/first-post">
              <a className="text-blue-500 hover:text-blue-700">First Post</a>
            </Link>
          </li>
          <li>
            <Link href="/second-post">
              <a className="text-blue-500 hover:text-blue-700">Second Post</a>
            </Link>
          </li>
          <li>
            <Link href="/third-post">
              <a className="text-blue-500 hover:text-blue-700">Third Post</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
