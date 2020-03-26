import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className="container-fluid">
                <h1>Alexandrit</h1>
            </header>

            <nav className="container-fluid">
                <div class="row">
                    <ul className="col-sm-8">
                        <li><NavLink to="/" class="button">Home</NavLink></li>
                        <li><NavLink to="/catalog" class="button">Catalog</NavLink></li>
                        <li><NavLink to="/contact" class="button">Contact</NavLink></li>
                    </ul>

                    <div className="languages">
                        <ul className="col-sm-2">
                            <li><button type="button" id="en" class="button">EN</button></li>
                            <li id="verline"></li>
                            <li><button type="button" id="ru" class="button">RU</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar