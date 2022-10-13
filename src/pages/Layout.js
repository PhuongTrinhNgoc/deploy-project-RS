import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2036 <Link to="#">Cyborg Gaming</Link> Company. All
                rights reserved.{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
