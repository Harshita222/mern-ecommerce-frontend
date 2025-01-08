import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  const API = "https://mern-ecommerce-app-fjey.onrender.com";
  //get cat
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${API}/api/v1/category/get-category`);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}