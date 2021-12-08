import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.jpg" />
                    <span className="birthdayText"><b>Michael Moore</b> and <b>2 million other friends</b> have a birthday today</span>
                </div>
                <span>Advertisement:</span>
                <img className="rightbarAd" src="/assets/ad1.png" />
                <span>Want to make a ton of money by sitting in front of computers all day? Pay us and we will make your dream come true.</span>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}