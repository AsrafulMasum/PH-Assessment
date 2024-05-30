import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function MainLayout() {
  return (
    <div className="font-['Poppins'] relative min-h-screen">
      <ScrollToTop />
      <Navbar>
        <main className="pb-16">
          <Outlet />
        </main>
      </Navbar>
      <footer className="absolute bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
