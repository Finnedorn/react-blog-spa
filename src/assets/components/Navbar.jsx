// import i moduli di react-router
import { NavLink } from "react-router-dom";

function Navbar() {

    const navPages = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Posts",
            path: "/posts",
        },
    ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {navPages.map((page, index) => (
                        <li key={index} className="nav-item fs-3 p-2">
                            {/* il componente NavLink è simile al componente Link, 
                            quindi fronisce la possibilità di navigare attraverso le pagine,
                             ma in questo caso applica al link attivo la classe .active */}
                            <NavLink to={page.path} className="nav-link active" aria-current="page">
                                {page.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </nav>
    </>
  );
}

export default Navbar;