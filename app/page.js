import Link from "next/link";
 import Layout from "./layout";

 export default function Home() {
   return (
     <Layout>
       <div>
         <h1>Memory Lane Blog</h1>
         <ul>
           <li>
             <Link href="/posts/first-post">First Post</Link>
           </li>
           <li>
             <Link href="/posts/second-post">Second Post</Link>
           </li>
           <li>
             <Link href="/posts/third-post">Third Post</Link>
           </li>
         </ul>
       </div>
     </Layout>
   );
 }
