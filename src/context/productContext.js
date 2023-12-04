import React, { useEffect, useState } from "react";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { getProduct, listProducts } from "../api/queries";
import { processOrder, deleteProduct } from "../api/mutations";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [onSale, setOnSale] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const checkout = async (orderDetails) => {
    try {
      const payload = {
        id: uuidv4(),
        ...orderDetails
      };
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("process order successfully");
    } catch (err) {
      console.log("Error processing order:", err);
    }
  };

  const fetchProducts = async () => {
    try {
      // authMode doc: https://docs.amplify.aws/lib/graphqlapi/authz/q/platform/js/#using-amplify-graphql-client
      const response = await API.graphql(graphqlOperation(listProducts, { authMode: "API_KEY" }));
      const fetchedProducts = response?.data?.listProducts?.items || [];
      const onSaleProducts = fetchedProducts.filter(item => item.onSale);
      setProducts(fetchedProducts);
      setOnSale(onSaleProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Delete a product
  const deleteSelectedProduct = async (productId) => {
    try {
        // Fetch the product details first
        const response = await API.graphql(graphqlOperation(getProduct, { id: productId }));
        const product = response.data.getProduct;

        // Delete the image from S3 if it exists
        if (product && product.image) {
            const imageName = product.image.split('/').pop();
            console.log("Deleting image:", imageName);
            await Storage.remove(imageName, { level: 'public' })
            .then(result => console.log("Image deleted:", result))
            .catch(err => console.error("Error deleting image:", err));
        }

        // Then delete the product
        await API.graphql(graphqlOperation(deleteProduct, { input: { id: productId } }));
        fetchProducts(); // Refresh the list after deletion
      } catch (err) {
          console.error("Error deleting product:", err);
      }
  };

  return (
    <ProductContext.Provider value={{ products, fetchProducts, onSale, checkout, deleteSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
