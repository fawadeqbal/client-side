import React, { useState, useEffect } from "react";
import { fetchProducts,deleteProduct} from '../../../api/product';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    const productsData = await fetchProducts();
    setProducts(productsData);
  };

  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    fetchProducts();
  };

  const handleUpdate = async (productId, updatedProduct) => {
    // await updateProduct(productId, updatedProduct);
    // fetchProducts();
  };

  return (
    <div className="max-w-screen mx-auto mt-[80px] px-8 py-6">
      <h2 className="text-xl text-[#8a4af3] font-bold mb-4">All Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.title}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">
                  <button
                    className="btn btn-blue mr-2"
                    onClick={() => handleUpdate(product.id, { title: "Updated Title" })}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-red"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProducts;
