import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "./admin/pages/AdminDashboard";
import MovieDetail from "./admin/pages/MovieDetail";
import ProfileDetail from "./admin/pages/ProfileDetail";
import UserDetail from "./admin/pages/UserDetail";

import Footer from "./user/components/Footer";
import Welcome from "./user/pages/Welcome";
import Home from "./user/pages/Home";
import UserMovieDetail from "./user/pages/MovieDetail";
import Download from "./user/pages/Download";
import WatchMovie from "./user/pages/WatchMovie";
import Login from "./user/pages/Login";

import NotFound from "./user/pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<UserMovieDetail />} />
          <Route path="/download/:id" element={<Download />} />
          <Route path="/watch/:id" element={<WatchMovie />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/movies" element={<MovieDetail />} />
          <Route path="/admin/profiles" element={<ProfileDetail />} />
          <Route path="/admin/users" element={<UserDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
