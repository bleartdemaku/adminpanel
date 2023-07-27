import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Movie } from "@mui/icons-material";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
          {user && (
            <>
              <Route path="/users" element={<UserList />}></Route>
              <Route path="/user/:userId" element={<User />}></Route>
              <Route path="/newUser" element={<NewUser />}></Route>
              <Route path="/movies" element={<MovieList />}></Route>
              <Route path="/movie/:movieId" element={<Movie />}></Route>
              <Route path="/newMovie" element={<NewMovie />}></Route>
              <Route path="/lists" element={<List />}></Route>
              <Route path="/list/:listId" element={<ListList />}></Route>
              <Route path="/newList" element={<NewList />}></Route>
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
