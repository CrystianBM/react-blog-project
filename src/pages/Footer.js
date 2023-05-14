import { useStoreState } from "easy-peasy";
export function Footer(){
  const postCount = useStoreState((state) => state.postCount)
  return (
    <footer className="Footer">
        <p>{postCount} Blog Posts</p>
    </footer>
  )
}