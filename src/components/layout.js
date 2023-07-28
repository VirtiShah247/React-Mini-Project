import { Outlet, Link } from "react-router-dom";
const Layout = () =>
{
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/accordian">Accordian</Link>
                    </li>
                </ul>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" ariaCurrent="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/todo">Todo</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/accordian">Accordian</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/quotes">Quote Generator</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/props">Props</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {/* <hr/> */}
            <Outlet/>
        </>

    )
}
export default Layout;

