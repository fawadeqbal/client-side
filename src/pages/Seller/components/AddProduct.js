import React, { useState } from "react";
import { addProduct } from '../../../api/product';

const AddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: null,
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("image", product.image);
    formData.append("rating[rate]", product.rating.rate);
    formData.append("rating[count]", product.rating.count);

    await addProduct(formData);
    alert(`${product.title} is added.`);
  };

  const handleCategory = (e) => {
    setProduct({ ...product, category: e.target.value });
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="max-w-screen mx-auto mt-[80px] px-8 py-6">
      <div className="flex justify-center">
        <h2 className="text-xl text-[#8a4af3] font-bold mb-4">
          Add a New Product
        </h2>
      </div>

      <div className="bg-white shadow-md rounded-lg px-8 py-6">
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full h-32"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 font-medium text-gray-700">
              Category:
            </label>
            <select
              className="border border-gray-300 rounded-md p-2 w-full"
              value={selectedCategory}
              onChange={(e) => handleCategory(e)}
            >
              <option value="">Select a category</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>
          <div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImage}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md text-base text-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={handleSubmit} className="btn w-40">Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
