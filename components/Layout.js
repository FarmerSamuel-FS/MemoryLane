import Head from "next/head";
import Link from "next/link";
import "../app/global.css";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Memory Lane Blog</title>
      </Head>
      <header className="header bg-gray-800 text-white py-4">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a className="text-xl font-bold tracking-wide">Memory Lane Blog</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="text-gray-300 hover:text-white">Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="my-4">{children}</main>
      <footer className="footer bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Memory Lane Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
