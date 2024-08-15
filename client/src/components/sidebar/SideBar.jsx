import "./sidebar.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  })

  return (
    <div className="sidebar">
        <div className="sideBarItem">
          <span className="sideBarTitle">ABOUT ME</span>
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit laudantium temporibus vel reiciendis, aspernatur dolor est minima necessitatibus! Unde, laudantium </p>
        </div>

        <div className="sideBarItem">
          <span className="sideBarTitle">CATEGORIES</span>
          <ul className="sideBarList">
            {cats.map((c)=>(

              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sideBarListItem">{c.name}</li>
              </Link>
              
            ))}
            
           
          </ul>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTitle">FOLLOW US</span>
          <div className="sideBarSocial">
            <i className="sideBarIcon fab fa-facebook-square"></i>
            <i className="sideBarIcon fab fa-twitter-square"></i>
            <i className="sideBarIcon fab fa-pinterest-square"></i>
            <i className="sideBarIcon fab fa-instagram-square"></i>
          </div>
        </div>
    </div>
  )
}
