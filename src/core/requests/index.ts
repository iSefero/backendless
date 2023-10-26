import axios from "axios";

export async function listTabs() {
  return await axios.get("https://630f7dc23792563418911561.mockapi.io/tabs");
}

export async function getDummyChartItems() {
  return await axios.get("https://jsonplaceholder.typicode.com/todos");
}

export async function getDummyListItems() {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
}

export async function getDummyTableItems() {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
}
