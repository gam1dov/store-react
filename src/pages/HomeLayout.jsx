import { Outlet } from "react-router";

function HomeLayout() {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Store</span>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
