import { Packages } from "./pages";
// import { AuthGuard } from "./pages/auth";
import { Dashboard } from "./pages/base/Dashboard";

export const App = () => {
  return (
    <>
      {/* <AuthGuard> */}
      <>
        <Dashboard />
        <Packages />
      </>
      {/* </AuthGuard> */}
    </>
  );
};