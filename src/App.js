import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Posts from "./components/posts";
import Pagination from "./components/Pagination";

import './App.css';

const  App = () => {
  const [posts, setposts] = useState([]); 
  //initialization de l'etat d'un loader a false
  const [loading, setLoading] = useState(false);
  //initialization de l'etat de la page actuelle
  const [currentpage, setcurrentPage] = useState(1);
  //initialization de l'etat du nombre des donnees qu'on recoit par page
  const [postsPerPage, setpostsPerPage] = useState(10);

// initialisation de l'etat de la recherche lors du fetch
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setposts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, [])

  // pagination
  const indexOfLastPost = currentpage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // pagination

  // changepage 
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  // changepage 


  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
