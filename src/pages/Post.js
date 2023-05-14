import { Link } from "react-router-dom"

export function Post({ post }){
    return (
      <article className="post">
            <Link to={`/post/${post.id}`} >
                <h2>{post.title}</h2>
                <p className="postDate"><b>Created at:</b> {post.datetime} <div className="updateTime"><b>Last updated:</b> {post.updatetime}</div></p>
            </Link>
            <p className="postBody">{
                (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...`
            }
            </p>
      </article>
    )
  }