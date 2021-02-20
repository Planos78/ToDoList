import './App.css';
import Input from './Input'
import Navbar from './Navbar'
import Footer from './Footer'
import List from './List'
import React, { useState } from 'react'

let id = 1;
const App = () => {
  const [posts, setPosts] = useState([]);
  function addPost(textInput) {
    const newPost = { id, textInput }
    setPosts([newPost, ...posts])
    id += 1;
  }
  function deletePost(id) {
    const result = window.confirm('คุณต้องการลบรายการใช่ไหม');
    if (result === true) {
      const updatePost = posts.filter((post) => (
        post.id !== id
      ))
      setPosts(updatePost);
      alert('คุณลบรายการเรียบร้อย')
    } else {
      alert('คุณทำรายการไม่สำเสร็จ')
    }

  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((lists) => (
        <List key={lists.id} id={lists.id} title={lists.textInput} deletePost={deletePost} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
