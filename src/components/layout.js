import { useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import './layout.css';
const Layout = () =>
{
    const [active,setActive] = useState("home")
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
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-tabs">
                        <li className="nav-item">
                        <Link className={` ${active === "home" ? 'nav-link active' : 'nav-link'}`} to="/" onClick={()=>{setActive("home")}}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={` ${active === "todo" ? 'nav-link active' : 'nav-link'}`} to="/todo" onClick={()=>{setActive("todo")}}>Todo</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={` ${active === "accordian" ? 'nav-link active' : 'nav-link'}`} to="/accordian" onClick={()=>{setActive("accordian")}}>Accordian</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={` ${active === "quote" ? 'nav-link active' : 'nav-link'}`} to="/quotes" onClick={()=>{setActive("quote")}}>Quote Generator</Link>
                        </li>   
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>

    )
}
export default Layout;

