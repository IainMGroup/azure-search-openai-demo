import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import mgroup from "../../assets/mgroupb.png";

import magi from "../../assets/magi.png";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <nav>
                        <ul className={styles.headerTitleContainer}>
                            <li>
                                <img src={mgroup} alt="MGroup logo" aria-label="" width="300px" height="150px" className={styles.mgroupLogo} />
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <img src={magi} alt="magi logo" aria-label="" width="200px" height="125px" className={styles.magiLogo} />
                            </li>
                        </ul>
                    </nav>

                    <h4 className={styles.headerRightText}>Azure OpenAI + AI Search</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
