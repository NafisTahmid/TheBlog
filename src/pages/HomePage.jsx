import React, {useState, useEffect, useRef} from 'react'
import {PostCard, SkeletonComponent} from "../components";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useTitle } from './../hooks/useTitle';

const HomePage = () => {
  const [posts, setPosts] = useState([false, false, false]);
  const databaseReference = useRef(collection(db, "posts"));
  const [toggle, setToggle] = useState(false);
  useTitle("Home");

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(databaseReference.current);
      setPosts(data.docs.map((document) => ({...document.data(), id:document.id})))
    
    }
    getPosts();
  }, [databaseReference, toggle])
  console.log(posts);

  return (
    <section>
      {
        posts.map((post, index) => (
          post ?
          
          <PostCard key={posts.id} post={post} toggle={toggle} setToggle={setToggle}/>
          : <SkeletonComponent key={index}/>
        ))
      }
     
    </section>
  )
}

export default HomePage
