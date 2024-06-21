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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {navPages.map((page) => (
                        <li class="nav-item">
                            {/* il componente NavLink è simile al componente Link, 
                            quindi fronisce la possibilità di navigare attraverso le pagine,
                             ma in questo caso applica al link attivo la classe .active */}
                            <NavLink to={page.path} class="nav-link active" aria-current="page">
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