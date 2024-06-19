import "./left.css";
import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";
import Unknown from "../img/unknown_user.png"
import { Link } from "react-router-dom";
const Leftbar = () => {

  

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Link to="/profile" style={{ textDecoration: "none" }}><img
              src={Unknown}
              alt=""
            />
            <span>dawit</span>
            </Link>
          </div>
          <div className="item">
            <Link to='/friends'>
            <img src={Friends} alt="" />
            <span>Friends</span>
            </Link>
            
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <Link to="/Friendrequest">
            <img src={Market} alt="" />
            <span>Friend Request</span></Link>
          </div>
          <div className="item">
            <Link to="/ouTubeEmbed">
            <img src={Watch} alt="" />
            <span>Watch</span>
            </Link>
            
          </div>
          <div className="item">
            <Link to="/Memory">
            <img src={Memories} alt="" />
            <span>Memories</span>
            </Link>
            
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <Link to="/Event">
            <img src={Events} alt="" />
            <span>Events</span>
            </Link>
            
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <Link to="/Gallary">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
            </Link>
            
          </div>
          <div className="item">
            <Link to="/home">
            <img src={Videos} alt="" />
            <span>Videos</span>
            </Link>
            
          </div>
          <div className="item">
            <Link to="/home">
            <img src={Messages} alt="" />
            <span>Messages</span>
            </Link>
            
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>     Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};
                            
export default Leftbar;
