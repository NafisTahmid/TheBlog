import React from 'react'
import {auth, db} from "../firebase/config";
import {doc, deleteDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const PostCard = ({ post, toggle, setToggle }) => {
  const {id, title, description, author} = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  const navigate = useNavigate();
  async function deleteHandler() {
    const postRef = doc(db, "posts", id);
    await deleteDoc(postRef);
    setToggle(!toggle);
    navigate("/");
  }
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className="control">
        <p className="author">{author.name}</p>
        {
          isAuth && (auth.currentUser.uid == author.id) && (<span onClick={deleteHandler} className="delete"><i className="bi bi-trash3"></i></span>)
        }
      </div>
    </div>
  )
}

export default PostCard
