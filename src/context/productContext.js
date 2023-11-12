import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProducts } from "../api/queries";
import { processOrder } from "../api/mutations";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [onSale, setOnSale] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetchAllProducts();
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
      setError(err); // Set error state
    }
  };

  const fetchAllProducts = async () => {
    setError(null); // Reset error state before fetching
    try {
      setLoading(true);
      const response = await API.graphql(graphqlOperation(listProducts, { authMode: "AMAZON_COGNITO_USER_POOLS" }));
      const fetchedProducts = response?.data?.listProducts?.items || [];
      const onSaleProducts = fetchedProducts.filter(item => item.onSale);
      setProducts(fetchedProducts);
      setOnSale(onSaleProducts);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err); // Set error state
    }
  };

  return (
    <ProductContext.Provider value={{ products, onSale, loading, checkout, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
