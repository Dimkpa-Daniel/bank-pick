const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const deletePost = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
  return response.json();
};
