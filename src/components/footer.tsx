import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>JobHuntly</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="col-md-3">
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white mb-2">Accueil</a></li>
                            <li><a href="#" className="text-white mb-2">Produits</a></li>
                            <li><a href="#" className="text-white mb-2">Services</a></li>
                            <li><a href="#" className="text-white mb-2">Contactez-nous</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Ressource</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white mb-2">Accueil</a></li>
                            <li><a href="#" className="text-white mb-2">Produits</a></li>
                            <li><a href="#" className="text-white mb-2">Services</a></li>
                            <li><a href="#" className="text-white mb-2">Contactez-nous</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Get job notification</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                <hr className="text-white" />
                <div className="text-center">
                    <p className="text-white">&copy; 2024 Nom de l'entreprise. Tous droits réservés.</p>
                  
                </div>
            </div>
        </footer>
    );
}

export default Footer;
