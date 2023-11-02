import products from "./Product_list.json";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import SortButtons from "./SortButtons";
import Pagination from "./Pagination";
import Footer from "./Footer";

function App() {
  const [search, setSearch] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    setSortedProducts(products);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSortedProducts(filteredProducts);
    setCurrentPage(1); // Reset to the first page after searching
  };

  const handleSort = (key) => {
    // Sort the products based on the selected key (e.g., 'title' or 'price')
    const sorted = [...sortedProducts].sort((a, b) => {
      if (key === "price") {
        return a[key] - b[key];
      } else {
        return a[key].localeCompare(b[key]);
      }
    });
    setSortedProducts(sorted);
  };

  const pages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="App">
        <div className="nav">
          <h1>AJ Mart</h1>
          <SearchBar search={search} handleSearch={handleSearch} />
          <SortButtons handleSort={handleSort} />
        </div>
        <ProductList
          products={sortedProducts}
          currentPage={currentPage}
          productsPerPage={productsPerPage}
        />
        <Pagination
          pages={pages}
          currentPage={currentPage}
          paginate={paginate}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
