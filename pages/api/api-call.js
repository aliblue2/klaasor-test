export async function getAllUsers(count) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!response.ok) {
    throw new Error("failed to fetch user from database");
  }

  const results = await response.json();
  return results;
}
