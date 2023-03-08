import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { PAGE_NAMES } from "router/paths";
import styles from '../Layouts/layouts.module.css';

const Layout = () => {
    return (
        <> 
            <header className={styles.layout}> 
                <NavLink 
                   to={PAGE_NAMES.homepage} 
                   className={styles.layout__item} 
                   style={({ isActive }) => {
                    if (isActive) return { color: 'tomato' }
                   }}> 
                   Home 
                </NavLink>

                <NavLink 
                   to={PAGE_NAMES.movies}  
                   className={styles.layout__item}
                   style={({ isActive }) => {
                    if (isActive) return { color: 'tomato' }
                   }}>
                   Movies 
                </NavLink>
            </header>

            <main>
                <Suspense fallback={<> Loading... </>}> 
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
};

export default Layout;