import Link from "next/link";
import Layout from "../layout";

export default function ThirdPost() {
  return (
    <Layout>
      <div>
        <h1>Third Post</h1>
        <p>This is the content of the third post.</p>
        <Link href="/">Back to home</Link>
      </div>
    </Layout>
  );
}
