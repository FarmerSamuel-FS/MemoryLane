import Link from "next/link";
import Layout from "../layout";

export default function FirstPost() {
  return (
    <Layout>
      <div>
        <h1>First Post</h1>
        <p>This is the content of the first post.</p>
        <Link href="/">Back to home</Link>
      </div>
    </Layout>
  );
}
