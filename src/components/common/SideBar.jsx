import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidHome, BiSolidMoviePlay } from "react-icons/bi";
import {
  BIOSCOPWALA_CATEGORIES_LINKS,
  BIOSCOPWALA_GENRE_LINKS,
  // BIOSCOPWALA_SITE_LINKS,
} from "../../lib/constants/navigation";
import classNames from "classnames";

const linkClasses =
  " flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-natural-600 rounded-sm text-base";

const SideBar = () => {
  const {pathname} = useLocation()
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white ">
      <div className="flex items-center gap-2 px-1 py-3">
      <BiSolidMoviePlay fontSize={50}/>
        <span className=" text-lg">BioscopWala</span>
      </div>
      <hr />
      <div className="flex-1 py-2">
        <Link to="/" className={classNames(pathname==='/' ? 'bg-neutral-700 text-white': 'text-neutral-400', linkClasses)}>
          <span >
            <BiSolidHome/>
          </span>
          Home
        </Link>
      </div>
      <div className="flex-auto">
        <h5 className="py-2 px-3 text-lg">Categories</h5>
        {BIOSCOPWALA_CATEGORIES_LINKS.map((item) => (
          <CategoryLinks key={item.key} item={item} />
        ))}
      </div>
      <div className="flex-auto">
        <h5 className="py-2 px-3 text-lg">Genre</h5>

        {BIOSCOPWALA_GENRE_LINKS.map((item) => (
          <GenreLinks key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;

function CategoryLinks({ item }) {
  const {pathname} = useLocation()
  return (
    <Link to={item.path} className={classNames(pathname===item.path ? 'bg-neutral-700 text-white': 'text-neutral-400', linkClasses)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

function GenreLinks({ item }) {
  const {pathname} = useLocation()
  return (
    <Link to={item.path} className={classNames(pathname===item.path ? 'bg-neutral-700 text-white': 'text-neutral-400', linkClasses)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
