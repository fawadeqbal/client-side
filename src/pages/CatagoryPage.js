import React, { useEffect, useRef, useState } from "react";
import Products from "../components/Product/Products";
import NewsLetter from "../components/NewsLetter";
import { fetchFilteredProducts } from "../api/product";

const CatagoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");
  const catRef = useRef(null);
  const [products, setProducts] = useState([]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilteredProducts(selectedCategory);
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <>
      <div className="flex flex-col p-5">
        <h1 className="text-[30px] text-[#8a4af3]">Collection's</h1>
        <div className="flex items-center justify-between mt-[11px]">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>
            <select
              className="ml-3 border-2 bg-white border-silver selection:border-gray-500 outline-none rounded-md mobile:ml-0"
              ref={catRef}
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelry</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
        </div>
      </div>
      <Products category={selectedCategory} products={products} />
      <NewsLetter />
    </>
  );
};

export default CatagoryPage;
