import React from "react";
import "../styles/Footer.css";
const Footer=()=>
{
    return(
        <>
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    </link>
        <div class="footer">
        <footer class="footer-distributed">
        <div class="footer-left">
            <h3>ECOM<span>application</span></h3>
            </div>
 
 
       
        <div class="footer-center">
        <div>
            <i class="fa fa-phone"></i><p>+91 6389741058</p>
        </div>
        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
        </div>
        </div>
            
        <div class="footer-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                
                <a href="#"><i class="fa fa-twitter"></i></a>
                
            </div>
        
        </footer>
        </div>
        </>
    )
 
}
export default Footer;