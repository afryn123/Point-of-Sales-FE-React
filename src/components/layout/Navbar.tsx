import { Link } from "react-router";
import type { INavbarGeneralPropsType } from "./types";

const Navbar = (props: INavbarGeneralPropsType[]) => {
  return (
    <nav>
      <div>
        {props.map((item, index) => {
          return (
            <Link
              key={index}
              to={{
                pathname: item.pathname,
                search: item.searchQuery,
              }}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
