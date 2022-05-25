import { stringify } from "querystring";
import React, { useEffect, useState, FunctionComponent } from "react";

type AddCommentProps = {
    setClicked: (params: any) => void;
    clicked: number
}

const AddComment: FunctionComponent<AddCommentProps> = ({setClicked, clicked}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState(JSON.parse(localStorage.getItem("UserComment") || "{}"));

  const addComment = () => {
    if (username && email && text) {
      const comment = 
        {
          name: username,
          email: email,
          text: text,
          hour: new Date().toLocaleTimeString()
        }
      ;
        setMessage([...message, comment]);
      localStorage.setItem("UserComment", JSON.stringify([...message, comment]));
      setClicked(clicked + 1)
    }  else {
      console.log("erro");
    }
  };

  return (
    <>
      <h1>Add a comment</h1>
      <input
        type="text"
        placeholder="Your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Text"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-btn" onClick={addComment}>
        Comment
      </button>
      <div className="comments-box">
        <div className="comment"></div>
      </div>
    </>
  );
};

export default AddComment;
