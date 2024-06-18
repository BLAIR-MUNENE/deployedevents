import { createBrowserRouter } from "react-router-dom";
import FormExample from "./pages/BookEvent";
import Home from "./pages/Home";
import UpComingEvents from "./pages/UpComingEvents";
import MyEvents from "./pages/Myevents";
export const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "book_Event",
    element: <FormExample />,
  },
  {
    path: "upcoming_events",
    element: <UpComingEvents />,
  },
  {
    path: "my_events",
    element: <MyEvents />,
  },
]);
