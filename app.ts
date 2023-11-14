// Define a User interface
interface User {
    id: number;
    name: string;
    age: number;
    email: string;
  }
  
  // Function to generate a random ID
  function generateRandomId(): number {
    return Math.floor(Math.random() * 1000);
  }
  
  // Array to store user objects
  let users: User[] = [];
  
  // Function to create a user object
  function createUserObject(name: string, age: number, email: string): User {
    return {
      id: generateRandomId(),
      name: name,
      age: age,  
      email: email,
    };
  }
  
  // Generate 10 user objects and add them to the array
  for (let i = 0; i < 10; i++) {
    let user: User = createUserObject(`User${i + 1}`, 20 + i, `user${i + 1}@example.com`);
    users.push(user);
  }
  
  // Print the array of user objects
  console.log(users);
  console.log(users);
  console.log(users);
  console.log(users);
  