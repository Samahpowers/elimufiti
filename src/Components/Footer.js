import Signup from "./Signup";

const Footer = () => {
    return (
        <footer className="footer  my-5 " >
            <div className="container-fluid">
                <div className="row  align-items-center p-3">
                    <div className="col-md-6">
                        <a href="/signup"> Register / Renew Access</a>
                        <p> <strong>Contact us:</strong></p>
                        <li className="listitem style-square">Email: info@elimufiti</li>
                        <li>Phone: 0710 00 00</li>
                        <li><a href="">Whatsapp</a></li>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
