import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProducts } from "../api/queries";
import { processOrder } from "../api/mutations";

const ItemContext = React.createContext();

const ItemProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [onSale, setOnSale] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state

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
      console.log("Order is successful");
    } catch (err) {
      console.log("Error processing order:", err);
      setError(err); // Set error state
    }
  };

  const fetchProducts = async () => {
    setError(null); // Reset error state before fetching
    try {
      setLoading(true);
      const response = await API.graphql(graphqlOperation(listProducts, { authMode: "API_KEY" }));
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
    <ItemContext.Provider value={{ products, onSale, loading, checkout, error }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
