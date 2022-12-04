import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/about/about.css";
import "../styles/work/work.css";
import "../styles/contact/contact.css";
import "../styles/deals/deals.css";
import { AppProps } from "next/app";


export default function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <Layout>
     
        <Component key={router.pathname} {...pageProps} />
   
    </Layout>
  );
}
