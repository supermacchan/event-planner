import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { LangMenu } from 'components/LangMenu/LangMenu';
import { SearchInput } from 'components/SearchInput/SearchInput';

import css from "./Header.module.css";

export const Header = () => {
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.location.reload();
        }
    }

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Link to={"/"} onClick={handleLogoClick}>
                    <h1 className={css.title}>Event Planner</h1>
                </Link>
                
                <LangMenu />

                <SearchInput />
            </div>
        </header>
    )
}