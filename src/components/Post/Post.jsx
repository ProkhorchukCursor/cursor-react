import RocketSvg from "../../assets/images/rocket.svg";
import BubbleSvg from "../../assets/images/bubble.svg";
import LoopSvg from "../../assets/images/loop.svg";
import HeartSvg from "../../assets/images/heart.svg";
import BellSvg from "../../assets/images/bell.svg";

import "./Post.css";

const Post = ({
 author,
 content,
 image,
 date,
 comments = 482,
 reposts = 146,
 likes = 887,
}) => {
 const { name, photo, nickname } = author;

 return (
  <div className="flex-center">
   <div className="card">
    <div className="description">
     <div className="description-info">
      <div>
       <img src={RocketSvg} alt={name} className="description-svg" />
       <span className="description-name">{name}</span>
      </div>
      <p>{nickname}</p>
      <p>{date}</p>
     </div>
     <img src={photo} alt={name} className="description-avatar" />
    </div>
    <div>
     <p className="post-text">{content}</p>
     {image && <img src={image} alt="Post" className="post-image" />}
    </div>

    <ul className="stats">
     <li className="stats-item">
      <img src={BubbleSvg} alt={comments} className="label-image" />
      <span className="stats-quantity">{comments}</span>
     </li>
     <li className="stats-item">
      <img src={LoopSvg} alt={reposts} className="label-image" />
      <span className="stats-quantity">{reposts}</span>
     </li>
     <li className="stats-item">
      <img src={HeartSvg} alt={reposts} className="label-image" />
      <span className="stats-quantity">{likes}</span>
     </li>
     <li className="stats-item">
      <img src={BellSvg} alt="Subscribe" className="label-image" />
     </li>
    </ul>
   </div>
  </div>
 );
};

export default Post;
