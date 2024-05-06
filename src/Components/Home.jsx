import { Link } from "react-router-dom";
import Main from "./main";
import VerticalnavMenu from "./Vertical_nav._menu";

const Home = () => {
    return (
        <div>
                <nav className="container-fluid d-flex p-3 bg-primary" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                    <div>
                        <img src="../logo192.PNG" alt="logo" width="70px" height="40"/>
                    </div>
                    <div className="h-16 w-100 d-flex align-items-center justify-content-center">
                    <Link to="/login" className="text-white border px-4 py-2 text-decoration-none rounded d-inline-block">Login / Renew Access</Link>
                    </div>
                </nav>
                <div className="container-fluid" style={{ padding: '0' }}>
                    <div className="container-fluid p-0">
                        <div className="row g-0">
                            <div className="col-lg-2 d-none d-lg-block overflow-auto" style={{ maxHeight: '100vh' }}>
                                <VerticalnavMenu />
                            </div>
                            <div className="col-lg-10 overflow-auto" style={{ maxHeight: '100vh' }}>
                                <Main />
                            </div>
                        </div>
                    </div>
                </div>        
        </div>
        
    );
};

export default Home;
