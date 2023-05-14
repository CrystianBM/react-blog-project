import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Missing } from "./Missing";
import format from "date-fns/format";
import { useStoreActions, useStoreState } from "easy-peasy";

export function EditPost(){
  const { id } = useParams();
  const navigate = useNavigate();

  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  const datetime = post.datetime;

  useEffect(() => {
    if(post){
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody])
  
  const handleEdit = (id) => {
    const updatetime = format(new Date(), "dd/MM/yyyy");
    const updatedPost = { id, title: editTitle, datetime, updatetime, body: editBody };
    editPost(updatedPost);
    navigate(`/post/${id}`);
  }



  

  return (
    <main className="NewPost">
      {post && 
        <>
          <h2>NewPost</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              type="text"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="button" onClick={() => handleEdit(post.id)}>Submit</button>
          </form> 
        </>
      }
      {!post &&
        <Missing />
      }
  </main>
  )
}