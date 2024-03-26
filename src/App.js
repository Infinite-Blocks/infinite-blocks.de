import "./App.css";
import Loginpage from "./pages/Loginpage";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />,
    },
    {
      path: "/login",
      element: <Loginpage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },

    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
