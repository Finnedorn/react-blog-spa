import CardComponent from "../../assets/components/Card/CardComponent";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostIndex = () => {
  // creo una variabile con useState che accolga i dati della chiamata axios
  const [posts, getPosts] = useState(null);

  // effettuo la chiamata axios
  const fetchPosts = async () => {
    try {
      const response = await axios.get(apiUrl + "/posts");
      getPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // effettuo la chiamata axios una sola volta al mounting della pagina
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "10px 0px",
          fontSize: "2.5rem",
          color: "white",
        }}
      >
        Il mio Blog
      </h1>
      {/* cards */}
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        { posts !== null ?
          posts.map((post) => (
            <CardComponent
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
              category={post.category}
              tags={post.tags}
              published={post.published}
              slug={post.slug}
              post={post}
              />
          ))
          :
          <p className="p-5 fs-4 text-center text-light">
            Carico i posts...
          </p>
        }
      </div>
    </>
  );
};

export default PostIndex;
