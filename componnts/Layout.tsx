import Footer from "./footer";
import NavBar from "./nav";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
