import { Header } from "./pages/Header";
import { Nav } from "./pages/Nav";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { NewPost } from "./pages/NewPost";
import { PostPage } from "./pages/PostPage";
import { About } from "./pages/About";
import { Missing } from "./pages/Missing";
import { EditPost } from "./pages/EditPost";
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useAxiosFetch } from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";

function App() {

  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts/');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])

  return (
    <div className="App">
        <Header title="React JS Blog" />
        <Nav />
        <Routes>
          <Route path="/" element={ <Home isLoading={isLoading} fetchError={fetchError} />} />
          <Route path="/post" element={ <NewPost /> } />
          <Route path="/edit/:id" element={ <EditPost /> } />
          <Route path="/post/:id" element={<PostPage /> } />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
