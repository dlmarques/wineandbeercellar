import React, { useEffect, FunctionComponent, useState } from "react";
import "../style/commentsContainer.css"

type CommentsContainerProps = {
  clicked: number;
};

const CommentsContainer: FunctionComponent<CommentsContainerProps> = ({
  clicked,
}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (comments) {
      setComments(JSON.parse(localStorage.getItem("UserComment") || "{}"));   
    } else {
      console.log("no comment");
    }
  }, [clicked]);

  return <>
  <div className="comment-box">
    <h2>Comment Box</h2>
   {
    comments &&
      (comments as unknown as any[]).map((comment, id) => 
        <div key={id} className="comment-item">
            <div className="identity">
            <h4>{comment.name}</h4> 
           <p>{comment.email}</p> 
           <p>{comment.hour}</p> 
            </div>
           <h3>"{comment.text}"</h3> 
        </div>
      )
  } 
  </div>

  </>;
};

export default CommentsContainer;
