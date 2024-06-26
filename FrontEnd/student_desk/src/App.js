import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import Gallery from "./Component/Gallery";
import About from "./Component/About";
import Service from "./Component/Service";
import Registration from "./Component/Registration";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import Studentdetail from "./Component/Studentdetail";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="about" element={<About />} />
              <Route path="studetail" element={<Studentdetail />} />
              <Route path="service" element={<Service />} />
              <Route path="regist" element={<Registration />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
