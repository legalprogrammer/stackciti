import Footer from "./footer";
import NavBar from "./nav";
import Mobile from "./navmobile";

interface Layoutprops {
  children: React.ReactNode;
}

const Layout = ({ children }: Layoutprops) => {
  return (
    <>
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
