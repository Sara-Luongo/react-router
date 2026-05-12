import { Link, Outlet } from "react-router";



function Layout() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <nav>
                <Link to='/HomePage'>HOME PAGE</Link>
                <Link to='/Prodotti'>PRODOTTI</Link>
                <Link to='/ChiSiamo'> CHI SIAMO</Link>
            </nav>
            <Outlet />
        </div>
    );
}
export default Layout;
