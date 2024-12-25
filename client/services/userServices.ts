import { User } from "@/types/User";

import { API_URL, SECTOR, LIMIT } from "@/constants/db";

import buildQueryString from "@/utils/buildQueryString";

/**
 * Fetches user data based on filters and pagination.
 * @param filters - An object containing filter keys and values.
 * @param page - The current page number (default: 1).
 * @returns A promise resolving to an array of users.
 * @throws Will throw an error if the fetch request fails.
 */
export const fetchUser = async (
  filters: Record<string, string>,
  page: number = 1
): Promise<User[]> => {
  try {
    // Build the query string for filtering and pagination
    const queryString = buildQueryString(filters, page, LIMIT);
    const response = await fetch(`${API_URL}?sector=${SECTOR}&${queryString}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}`
      );
    }

    // Parse the JSON response
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Creates a new user in the database.
 * @param user - The user data to create (without the `id` field).
 * @returns A promise resolving to the created user.
 * @throws Will throw an error if the request fails.
 */
export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(
        `Failed to create user: ${response.status} ${response.statusText}`
      );
    }

    // Parse and return the created user
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

/**
 * Updates an existing user in the database.
 * @param user - The user data to update (must include `id`).
 * @returns A promise resolving to the updated user.
 * @throws Will throw an error if the request fails.
 */
export const updateUser = async (user: User): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(
        `Failed to update user: ${response.status} ${response.statusText}`
      );
    }

    // Parse and return the updated user
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

/**
 * Deletes a user from the database.
 * @param id - The ID of the user to delete.
 * @returns A promise resolving to void.
 * @throws Will throw an error if the request fails.
 */
export const deleteUser = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(
        `Failed to delete user: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
