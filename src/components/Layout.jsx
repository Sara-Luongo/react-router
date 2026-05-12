import { Link, Outlet } from "react-router";



function Layout() {
    return (
        <div className="container">
            <nav className="d-flex justify-content-center align-items-center gap-3">
                <Link to='/HomePage'>HOME PAGE</Link>
                <Link to='/Prodotti'>PRODOTTI</Link>
                <Link to='/ChiSiamo'> CHI SIAMO</Link>
            </nav>
            <Outlet />
        </div>
    );
};
export default Layout;
