import React from 'react';
import { FaTwitter, FaGithub, FaDocker } from 'react-icons/fa';

function Footer() {

    return (
       <footer style={{
           position: "absolute", minHeight:"8vh", width:"100vw", 
           fontWeight:"600", fontSize:"14px", color:"#29233f", 
           letterSpacing:0.5, display: "flex", alignItems: "center",
           justifyContent: "center", flexDirection: "column"
           }}>
        <div style={{margin: "0px 0px 10px 0px"}}>
            Footer - Place your information here - Links
        </div>
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
            <FaTwitter size={23} style={{margin:"0px 10px 0px 10px"}} />
            <FaGithub size={23} style={{margin:"0px 10px 0px 10px"}}/>
            <FaDocker size={23} style={{margin:"0px 10px 0px 10px"}}/>
        </div> 
       </footer>
    )
}

export default Footer;
