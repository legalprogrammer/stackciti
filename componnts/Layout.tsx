import Footer from "./footer";
import NavBar from "./nav";

interface Layoutprops {
  children: React.ReactNode
}

const Layout = ({ children }: Layoutprops) => {
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
