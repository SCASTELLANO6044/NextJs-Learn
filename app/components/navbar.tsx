import { NavLink } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar = () => {
    console.log(`Navbar rendered`)

    
    return(
        <div>
            <NavLink />
            <NavSearch />
        </div>
    );
}