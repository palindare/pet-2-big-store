import styles from "./Header.module.css";
import HeaderTopBar from "./Header-top-bar/HeaderTopBar"
import HeaderNav from "./Header-nav/HeaderNav"

function Header() {
    return (
    <>
        <HeaderTopBar/>
        <HeaderNav/>
    </>
    )
}

export default Header;
