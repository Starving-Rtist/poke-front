import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../dummyData";

export default function Post({post}) {

    // const user = Users.filter(u=>u.id===1)

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="pokeIcon" src="/assets/post/poke1.png" />
                        <span className="pokeCounter">{post.poke} people poked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
