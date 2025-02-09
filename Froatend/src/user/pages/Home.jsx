import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import NewCard from "../components/NewCard";
import PopularCard from "../components/PopularCard";
import TrendingCard from "../components/TrendingCard";

const Home = () => {
  return (
    <div className="md:p-4 p-1">
      <Navbar />
      <Hero />
      <TrendingCard />
      <PopularCard />
      <NewCard />
      <MovieCard />
    </div>
  );
};

export default Home;
