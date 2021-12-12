import react from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate  }) => {
  const PageNumbers = [];

//   creation des nombres de pages selon le contenu de l'api 
// automatiquement
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumbers.push(i);

  }
    return (
      <nav className="pagination-container">
        <ul className="pagination">
          {PageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => {paginate(number)} } href="#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  
};

export default Pagination;
