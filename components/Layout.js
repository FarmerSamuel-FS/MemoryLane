import Head from "next/head";
import Link from "next/link";
import "../app/global.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Memory Lane Blog</title>
      </Head>
      <header className="header">
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">© 2024 Memory Lane Blog</footer>
    </div>
  );
}
