function Pagination({ pages, currentPage, paginate }) {
  return (
    <ul className="pagination">
      {Array.from({ length: pages }).map((_, index) => (
        <li key={index} onClick={() => paginate(index + 1)}>
          {index + 1}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
