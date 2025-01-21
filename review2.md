## Review Exercise 2 - TypeScript and DOM Interaction

---

### Objective:

Build a TypeScript-driven web app to retrieve and display user data, introducing API interaction, DOM manipulation, and type safety.

### Pre-task

- Copy the `07-webpack` directory.
- In your new directory, run `npm install` and then `npm run dev`.
- If you make any changes to your `index.html`, you'll need to stop the server (`Ctrl-C`) and restart it again with `npm run dev`.
- You should be able to open your starting page at `http://localhost:8080` in your web browser.

---

### Goals:

1. **Fetch User Data:**

   - Fetch user data from the API at https://jsonplaceholder.typicode.com/users using the `.then()` method for handling promises.
   - Define a TypeScript interface for users and their addresses.

     ```typescript
     interface Address {
       street: string;
       city: string;
       // other fields...
     }

     interface User {
       id: number;
       name: string;
       address: Address;
       // other fields...
     }
     ```

   - Handle possible errors using `.catch()` and display a message if the data fetching fails.

2. **Display User Data on Web Page:**

   - Create a basic HTML structure for displaying user information (name, address).
   - Utilize TypeScript’s type assertions to ensure proper typing for DOM elements like buttons, dropdowns, etc.

3. **User Interaction:**

   - Provide a dropdown list that allows users to select a user.
   - When a user is selected, display details specific to that user (such as name and address) on the page.

4. **Code Structure:**

   - Keep functions modular, separating concerns like data fetching, DOM updates, and event handling.
   - Use template literals (`back-ticks`) to dynamically inject user data into HTML content.

5. **Development Setup:**

   - Use `npm run install` and `npm run dev` to get the development server up and running.

---

### Starter Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Data Display</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 20px;
      }

      select {
        padding: 10px;
        font-size: 16px;
        margin-bottom: 20px;
      }

      #userDetails {
        background-color: white;
        padding: 20px;
        border: 1px solid #ccc;
      }
    </style>
  </head>

  <body>
    <h1>User Information</h1>
    <select id="userDropdown"></select>
    <div id="userDetails"></div>
  </body>
</html>
```

### TypeScript Starter Code

```typescript
// Step 1: Define interfaces for User and Address

// Define the Address interface here
interface Address {
  street: string;
  city: string;
  // other fields as needed
}

// Define the User interface here
interface User {
  id: number;
  name: string;
  address: Address;
  // other fields as needed
}

// Step 2: Fetch user data using promises

// Create the fetchAllUsers function using the fetch API
function fetchAllUsers(): Promise<User[]> {
  // Use fetch to retrieve the user data from the provided API
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return [];
    });
}

// Step 3: Populate the user dropdown

// Create a function to populate the user dropdown (createUserDropdown)
function createUserDropdown(users: User[]) {
  const dropdown = document.getElementById("userDropdown") as HTMLSelectElement;

  // Use a loop to create option elements for each user
  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id.toString();
    option.textContent = user.name;
    dropdown.appendChild(option);
  });

  // Add an event listener to handle user selection
  dropdown.addEventListener("change", () => {
    // Call a function to handle what happens when a user is selected (Step 4)
  });
}

// Step 4: Display user details

// Create a function to display the selected user's details (displayUserDetails)
function displayUserDetails(user: User) {
  const userDetails = document.getElementById("userDetails") as HTMLDivElement;

  // Use innerHTML to show user information on the page
  userDetails.innerHTML = `
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
  `;
}

// Step 5: Handle user selection and tie everything together

// Create a function to handle the dropdown selection and update the page (onUserSelect)
function onUserSelect(users: User[]) {
  const dropdown = document.getElementById("userDropdown") as HTMLSelectElement;

  // Add an event listener to react to changes in the dropdown selection
  dropdown.addEventListener("change", () => {
    const selectedUserId = parseInt(dropdown.value, 10);
    const selectedUser = users.find((user) => user.id === selectedUserId);

    // Display the details of the selected user
    if (selectedUser) {
      displayUserDetails(selectedUser);
    }
  });
}

// Step 6: Initialize the app

// Use DOMContentLoaded to ensure the app runs after the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Fetch all users and populate the dropdown
  fetchAllUsers().then((users) => {
    createUserDropdown(users);

    // Optional: Pre-select the first user and display their details
    if (users.length > 0) {
      displayUserDetails(users[0]);
    }
  });
});
```

---

### Key Points:

- **Error Handling Without Async/Await:** This version avoids async/await, using `.then()` and `.catch()` for promise handling, making it simpler for students who haven’t yet learned about async/await.
- **TypeScript Integration:** The code includes type-safe handling of both fetched data and DOM elements using interfaces and type assertions.
- **Clear Structure:** The code is modularized, separating concerns between fetching, DOM manipulation, and event handling, giving students an easy-to-follow structure.

---

### Notes:

- While `console.log` can be used for debugging, aim to display all user information and interactions on the web page itself.
- If preferred, data can be fetched offline (i.e., downloading the JSON) or using Node's inbuilt fetch. Remember, as of Node 18, there's no need for third-party fetch libraries.
- Always prioritize type safety. When uncertain, refer back to your defined interfaces or utilize TypeScript's type checking features to ensure data consistency and safety.
