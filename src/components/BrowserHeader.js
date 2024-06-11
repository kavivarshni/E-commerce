import React, { useState } from "react";
import "../styles/Header.css";
import { Link} from "react-router-dom";


const BrowserHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  // const Login=()=>useNavigate();
  return (
  
    <div className="Header">
     
      <div className={`nav-items ${isOpen && "open"}`}>
  
      <div className="new">
     
     
    
        <ul>
      
        <div className="logo1">
       <img src="https://st2.depositphotos.com/12176728/46043/v/1600/depositphotos_460436274-stock-illustration-online-shop-logo-designs-concept.jpg" alt="Logo" class="logo"/>
        </div>
        <div>
  
     
        </div>
      <li><Link to="./Login">Login</Link></li>

      <li><a  href="/Contact">Contact us</a></li>  
      <li> <a href="/about">About Us</a></li> 
        <li><a class="active"  href="/home">Home</a></li>
        <div className="flex">
  

        <div className="border-black b-0 p-1 m-1 border">
        
          <input
            name="search"
            type="text"
            placeholder="type..."
            className="inputbox"
            value={searchText}
            onChange={(e) => {
             setSearchText(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button className="bg-black text-white p-1" onClick={() => {console.log(searchText)}}>Search</button>
        </div>
      </div>
        </ul>
       
      </div>
      </div>  
      
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default BrowserHeader;