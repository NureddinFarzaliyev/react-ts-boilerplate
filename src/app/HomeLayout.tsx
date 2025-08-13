import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main>
      <h1>Homepage</h1>
      <Outlet />
    </main>
  );
};

export default HomeLayout;
