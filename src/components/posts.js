import react from "react";
// creation du dipslay du composant posts lorsque il vas fetch une api
const Posts = ({ posts, loading }) => {
    // contenu du loader et creation
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => {
        return (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
