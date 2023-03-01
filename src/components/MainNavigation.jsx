import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { ROUTERS_PATH } from "./routerApp/_routers";

export default function MainNavigation() {
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink
                        to={ROUTERS_PATH.index_path} className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={ROUTERS_PATH.movie_path} 
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined
                        }
                       
                    >
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}