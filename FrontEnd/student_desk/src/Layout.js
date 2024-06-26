import { Link, Outlet } from "react-router-dom";
import {useSelector} from "react-redux"


const Layout = () => {
    const username=useSelector(state=>state.Regist.user_data)
    console.log("-----------------",username)
    return (
        <>
            <div id="Navbar_container">
                <div id="Title"><Link to="home" className="titlebtn">SARDA SCHOOL</Link></div>
                <ul id="Navbar">
                    <li><Link to="home" className="btn1">Home</Link></li>
                    <li><Link to="gallery" className="btn1">Gallary</Link></li>
                    <li><Link to="about" className="btn1">About</Link></li>
                    <li><Link to="studetail" className="btn1">Student Detail</Link></li>
                    <li><Link to="regist" className="btn1">Registration</Link></li>
                    <li><Link to="login" className="btn1">Login</Link></li>
                    <li><Link to="profile" className="btn1"><img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" id="profile" />{username.email}</Link></li>
                </ul>
            </div>
            <Outlet />

            <div id="footer">
                <h2> This is  A Footer </h2>
            </div>
        </>
    );
}
export default Layout;