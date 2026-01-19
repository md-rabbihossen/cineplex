import Header from "./components/Header";
import MovieLists from "./components/Movies/MovieLists";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <div className="m-3">
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieLists />
        </div>
      </div>
    </>
  );
}
