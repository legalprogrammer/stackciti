import Footer from "./footer";
import NavBar from "./nav";
import Mobile from "./navmobile";

interface Layoutprops {
  children: React.ReactNode;
}

const Layout = ({ children }: Layoutprops) => {
  return (
    <>
      <script
        src="//code.tidio.co/oksrda6q97xfvycyharrku9pf6corlnl.js"
        async
      ></script>
      <div>
        <NavBar />
        <Mobile />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

