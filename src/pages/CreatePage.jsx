import React from 'react'
import { addDoc, collection } from 'firebase/firestore'
import {db, auth} from "../firebase/config";
import { useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
const CreatePage = () => {
  const documentCollection = collection(db, "posts");
  const navigate = useNavigate();
  useTitle("Create Page")
  async function handleSubmit(event) {
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    };
    await addDoc(documentCollection, document);
    navigate("/");
  }
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form action="" className="createPost" onSubmit={handleSubmit}>
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required/>
        <textarea type="text" className="description" name="description" placeholder="Description" maxLength="50" required></textarea>
        <button className="submit" type="submit">Create</button>
      </form>
      
    </section>
  )
}

export default CreatePage
