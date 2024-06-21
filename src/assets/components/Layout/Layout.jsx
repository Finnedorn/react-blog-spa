import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout() {

  return (
    <>
      <Navbar />
      {/* Outlet è una componente di react router che funge da
       placeholder per estendere il layout stile laravel */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;