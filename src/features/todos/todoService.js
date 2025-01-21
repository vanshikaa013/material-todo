import axios from "axios";

export const fetchTodos = async () => {
  try {
    const response = await axios.get("/api/todo");
    console.log(response.data); // Log the actual data
  } catch (error) {
    console.error("Error fetching todos:", error.message);
  }
};
