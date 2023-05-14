import { Post } from "./Post"

export function Feed({ posts }){
    return (
      <>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
      </>
    )
  }