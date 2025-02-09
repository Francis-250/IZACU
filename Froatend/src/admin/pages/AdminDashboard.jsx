import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="md:p-4 p-1">
        <Hero />
      </div>
    </div>
  );
};

export default AdminDashboard;
