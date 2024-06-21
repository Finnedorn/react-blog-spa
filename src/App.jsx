import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import axios from "axios";


const apiUrl = import.meta.env.VITE_BASE_API_URL;

// import le rotte alle varie pagine
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import le routes di posts
import PostIndex from "./pages/Posts/postIndex";
import PostShow from "./pages/Posts/postShow";
import PostCreate from "./pages/Posts/postCreate";


function App() {
  
  // // creo una variabile con useState che accolga i dati della chiamata axios
  // const [posts, getPosts] = useState(null);
  
  // // effettuo la chiamata axios
  // const fetchPosts = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/posts");
  //     getPosts(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // effettuo la chiamata axios una sola volta al mounting della pagina
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* essendo / la route base la uso per estendere 
          il layout "nav +footer" a tutte le pagine */}
          <Route path="/" element={<Layout/>}>
              {/* creo la route per il Not Found */}
              <Route path="*" element={<NotFound/>}/>
              <Route index element={<Home/>} />

              <Route path="posts">
                <Route index element={<PostIndex/>} />
                <Route path=":id">
                  <Route index element={<PostShow/>}/>
                </Route>
                <Route path="create" element={<PostCreate/>}/>
              </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
