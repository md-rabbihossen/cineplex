import Soon from "/src/assets/icons/commingSoon.svg";
import Favourite from "/src/assets/icons/favourite.svg";
import Release from "/src/assets/icons/newRelease.svg";
import Trending from "/src/assets/icons/trending.svg";
import Watch from "/src/assets/icons/watchLater.svg";
export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black bg-[#00D991]"
            href="#"
          >
            <img src={Trending} width={24} height={24} alt="" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Release} width={24} height={24} alt="" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Soon} width={24} height={24} alt="" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Favourite} width={24} height={24} alt="" />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Watch} width={24} height={24} alt="" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
