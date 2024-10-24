import PropTypes from "prop-types";
import '../../styles/navbar.css';

export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-1" href="#">Cole Kisielius</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item fs-5" key={link.key}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.element).isRequired,
};
