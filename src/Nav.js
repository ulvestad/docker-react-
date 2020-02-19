import React from 'react';
import {Link} from 'react-router-dom';
import {IoIosRocket} from 'react-icons/io';

function Nav() {

    return (
        <nav>
            <Link className="router-logo-link" to="">
                <div style={{display:"flex", flexDirection: "row"}}>
                    <h3 className="router-logo">Logo</h3>
                    <IoIosRocket color={"white"} size={35} style={{marginTop: "24px", marginLeft:"-5px"}}/>
                </div>
            </Link>
            <ul className="nav-links">
                <Link className="nav-link" to="/om-oss">
                    <li className="router-link">Om oss</li>
                </Link>
                <Link className="nav-link" to="/diverse">
                    <li className="router-link">Diverse</li>
                </Link>
                <Link className="nav-link" to="/logg-inn">
                    <li className="router-link-logg-inn">Logg inn</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
