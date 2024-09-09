export async function getAllUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!response.ok) {
    throw new Error("failed to fetch user from database");
  }

  const results = await response.json();
  return results;
}

export async function getUserDetail(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    throw new Error("failed to get info of user");
  }

  const result = await response.json();
  return result;
}

