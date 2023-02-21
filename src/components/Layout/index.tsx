import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import styles from './style.module.css';
import cn from 'classnames'
import Footer from "../Footer";
import { useEffect, useState } from "react";
import Search from "../Search";


const Layout = () => {
    const [isInp, setIsInp] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const { pathname } = useLocation()
    const [urlName, setUrlName] = useState<any>(pathname);

    return <>
        <div className={styles.intro}>
            <div className={cn(styles.wrapper, styles.intro_wrapper, 'wrapper')}>
                <div>
                    <p className={styles.intro_text}>We Stream Awesome Movies Online!</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {!isInp ? <>
                        <nav>
                            <ul className={styles.list}>
                                <li className={styles.list_item}>
                                    <Link to={'/'} className={styles.list_link}>
                                        home
                                    </Link>
                                </li>
                                <div className={styles.bord}></div>
                                <li className={styles.list_item}>
                                    <Link to={'/'} className={styles.list_link}>
                                        about
                                    </Link>
                                </li>
                                <div className={styles.bord}></div>
                                <li className={styles.list_item}>
                                    <Link to={'/'} className={styles.list_link}>
                                        contacts
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </>
                        : <div
                            className={styles.search_inp}>
                            <Search setSearchValue={setSearchValue} />
                        </div>}
                    <div
                        className={cn(styles.icon, !isInp ? styles.icon_false : styles.icon_true)}
                        onClick={() => setIsInp(!isInp)}>
                        {!isInp ? <i className="fa-solid fa-magnifying-glass"></i> : <i className="fa-solid fa-x"></i>}
                    </div>
                </div>
            </div>
        </div>
        <div className={cn(styles.wrapper, 'wrapper')}>
            <Header />
            <main><Outlet context={{ searchValue }} /></main>
        </div>
        <Footer />

    </>
}

export default Layout;