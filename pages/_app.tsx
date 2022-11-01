import Layout from "../componnts/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/about/about.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
