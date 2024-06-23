import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import axios from "axios";


const apiUrl = import.meta.env.VITE_BASE_API_URL;

// import le rotte alle varie pagine
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/notFound";
// import le routes di posts
import PostIndex from "./pages/Posts/postIndex";
import PostShow from "./pages/Posts/postShow";
import PostCreate from "./pages/Posts/postCreate";


function App() {

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
