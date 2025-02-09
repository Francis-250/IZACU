import wallpaper1 from "./wallpaper_1.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import rw from "./rw.png";
import ug from "./ug.png";

export const asset = {
  wallpaper1,
  rw,
  ug,
};

export const heroContent = [
  {
    id: 1,
    isNew: true,
    narrator: "Gerard Butler",
    title: "Angel Has Fallen",
    desc: "A Secret Service agent is wrongfully accused and must evade his own agency to uncover the truth.",
    genre: ["Action", "Drama"],
    RealDate: "2018-10-04",
    thumbnail: img1,
    buttons: ["Watch Now", "Download"],
    type: 1,
    country: "USA",
    transilator: "Junior",
  },
  {
    id: 2,
    isNew: false,
    narrator: "John Blaze",
    title: "John Wick 3",
    desc: "John Wick is on the run with a $14 million bounty on his head, facing ruthless assassins worldwide.",
    genre: ["Action", "Thriller"],
    RealDate: "2019-05-17",
    thumbnail: img2,
    buttons: ["Watch Now", "Download"],
    type: 2,
    country: "USA",
    transilator: "Dylan",
  },
  {
    id: 3,
    isNew: true,
    narrator: "Max Thunder",
    title: "Extraction 2",
    desc: "A fearless mercenary embarks on another deadly mission, pushing his limits in a high-stakes rescue.",
    genre: ["Action", "Adventure"],
    RealDate: "2023-06-16",
    thumbnail: img3,
    buttons: ["Watch Now", "Download"],
    type: 3,
    country: "Australia",
    transilator: "Rocky",
  },
  {
    id: 4,
    isNew: false,
    narrator: "Sarah Lane",
    title: "The Equalizer 3",
    desc: "A retired assassin finds himself protecting a town from ruthless criminals while seeking peace.",
    genre: ["Action", "Crime"],
    RealDate: "2023-09-01",
    thumbnail: img4,
    buttons: ["Watch Now", "Download"],
    type: 1,
    country: "Italy",
    transilator: "gaheza",
  },
  {
    id: 5,
    isNew: true,
    narrator: "Jake Storm",
    title: "Fast X",
    desc: "Dominic Toretto and his crew face their most dangerous adversary yet in a high-octane showdown.",
    genre: ["Action", "Thriller"],
    RealDate: "2023-05-19",
    thumbnail: img5,
    buttons: ["Watch Now", "Download"],
    type: 2,
    country: "USA",
    transilator: "Junior",
  },
  {
    id: 6,
    isNew: false,
    narrator: "John Blaze",
    title: "John Wick 2",
    desc: "John Wick is on the run with a $14 million bounty on his head, facing ruthless assassins worldwide.",
    genre: ["Action", "Thriller"],
    RealDate: "2019-05-17",
    thumbnail: img6,
    buttons: ["Watch Now", "Download"],
    type: 3,
    country: "USA",
    transilator: "Rocky",
  },
];

export const narrators = [
  "rocky",
  "junior giti",
  "gaheza",
  "sankara",
  "savimbi",
  "dylan",
];

export const genre = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Thriller",
  "Sci-Fi",
  "Romance",
  "Adventure",
  "Fantasy",
  "Mystery",
  "Documentary",
  "Animation",
  "Crime",
  "Family",
  "Musical",
  "War",
  "Western",
];

export const country = [
  "United States",
  "India",
  "United Kingdom",
  "France",
  "Germany",
  "China",
  "Japan",
  "South Korea",
  "Italy",
  "Spain",
  "Canada",
  "Australia",
  "Brazil",
  "Russia",
  "Mexico",
  "Sweden",
  "Turkey",
  "Nigeria",
  "Egypt",
  "South Africa",
];

export const AdminMenu = [
  {
    label: "home",
    link: "/admin",
  },
  {
    label: "movie",
    link: "/admin/movies",
  },
  // {
  //   label: "category",
  //   link: "/admin/categories",
  // },
  // {
  //   label: "narrator",
  //   link: "/admin/narrators",
  // },
  {
    label: "profile",
    link: "/admin/profiles",
  },
  {
    label: "users",
    link: "/admin/users",
  },
];

export const homeContents = [
  {
    title: "Total Movies",
    value: 145,
    description: "The total number of movies available on the platform.",
  },
  {
    title: "Total Users",
    value: 1200,
    description: "The total number of registered users on the platform.",
  },
  {
    title: "New Comments",
    value: 34,
    description: "Number of new comments awaiting moderation.",
  },
  {
    title: "Reported Content",
    value: 5,
    description: "Content flagged by users that needs attention.",
  },
  {
    title: "Quick Actions",
    actions: [
      { label: "Manage Movie", link: "/admin/movies" },
      { label: "Manage Users", link: "/admin/users" },
      { label: "Manage Categories", link: "/admin/categories" },
      { label: "Manage Narrators", link: "/admin/narrators" },
    ],
  },
  {
    title: "Top Movies",
    movies: [
      { name: "The Shawshank Redemption", rating: "9.3/10" },
      { name: "The Godfather", rating: "9.2/10" },
      { name: "The Dark Knight", rating: "9.0/10" },
      { name: "Schindler's List", rating: "8.9/10" },
    ],
  },
  {
    title: "Welcome Back, Admin!",
    subtitle: `Today is ${new Date().toLocaleDateString()}`,
    description: "Manage your movie website efficiently from the admin panel.",
  },
];

export const tableHeader = [
  "Title",
  "Url | Stat",
  "Duration",
  "Thumbnail",
  "Category",
  "Translator",
  "Country",
  "Date",
  "Description",
  "Actions",
];
