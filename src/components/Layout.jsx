import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useAppContext } from "../context/AppContext";

function Layout() {
  const { theme } = useAppContext();

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
