import React from "react";

function SortButtons({ handleSort }) {
  return (
    <div>
      <button onClick={() => handleSort("title")}>Sort by Name</button>
      <button onClick={() => handleSort("price")}>Sort by Price</button>
    </div>
  );
}

export default SortButtons;
