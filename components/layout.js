import Navbar from './navbar';
import Footer from './footer';
const Layout = ({ children }) => {
  return (
    <div classname='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
