import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="">
        {/* <Navbar /> */}
      </div>
      <div >
        <Outlet />
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Main;