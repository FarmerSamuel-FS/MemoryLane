import Link from "next/link";
import Layout from "../layout";

export default function SecondPost() {
  return (
    <Layout>
      <div>
        <h1>Second Post</h1>
        <p>This is the content of the second post.</p>
        <Link href="/">Back to home</Link>
      </div>
    </Layout>
  );
}
