import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import { Fragment, useEffect } from "react";
import Login from "./components/User/Login";
import ProtectedRoute from "./components/Route/PrivateRoute";
import store from "./redux/store";
import { loadUserRequest } from "./redux/actions/userActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute component={Home} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUserRequest());
  }, []);

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
