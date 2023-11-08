import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listItems } from "../api/queries";
import { processOrder } from "../api/mutations";

const ItemContext = React.createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [onSale, setOnSale] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(), 
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchItems = async () => {
    try {
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql(graphqlOperation(listItems, null, { authMode: "API_KEY" }));
      const fetchedItems = data.listItems.items;
      const onSaleItems = fetchedItems.filter((item) => item.onSale);
      setItems(fetchedItems);
      setOnSale(onSaleItems);
    } catch (err) {
      console.error("Error fetching items:", err);
    }
    setLoading(false);
  };

  return (
    <ItemContext.Provider value={{ items, onSale, loading, checkout }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };