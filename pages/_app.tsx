import Layout from "../componnts/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/about/about.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
