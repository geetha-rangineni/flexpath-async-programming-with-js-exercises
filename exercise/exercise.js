/*
	Values to use for multiple exercises
*/

const section1OutputDiv = document.getElementById("section-1-output");
const section2OutputDiv = document.getElementById("section-2-output");

console.log("Asking for a change")



/*

  Exercise 1: Understanding Synchronous vs. Asynchronous Code

  Description: 

  Write a function `syncFunction` that logs the numbers 1 to 3 synchronously. 

  Then, write an `asyncFunction` that logs the numbers 1 to 3 asynchronously 
  using setTimeout with a delay of 0. 

  Observe the order of execution.


  
*/
// function syncFunction() {
//   console.log("Synchronous:");
//   console.log(1);
//   console.log(2);
//   console.log(3);
// }

// // Asynchronous function: uses setTimeout with delay 0
// function asyncFunction() {
//   console.log("Asynchronous:");
//   setTimeout(() => console.log(1), 0);
//   setTimeout(() => console.log(2), 0);
//   setTimeout(() => console.log(3), 0);
// }

// // Call both functions to observe execution order
// syncFunction();
// asyncFunction();

// console.log("Done calling functions");


/*
  Exercise 2: Callback Function Example

  Description: 

  Create a function `getDataCallback` that accepts a callback function. 

  Use setTimeout to simulate fetching data asynchronously and then execute the 
  callback with the data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-2-btn is clicked.
*/

// Function that simulates asynchronous data fetching using a callback
const exercise2btn = document.getElementById("exercise-2-btn");

function getDataCallback(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}

exercise2btn.addEventListener("click", () => {
  getDataCallback((data) => {
    section2OutputDiv.textContent = `Callback Data: ${JSON.stringify(data)}`;
  });
});



/*
  Exercise 3: The Callback Pyramid of Doom

  Description: 

  Simulate multiple asynchronous operations using nested callbacks 
  (at least 3 levels deep). 

  Discuss how this leads to the "Callback Pyramid of Doom".
*/

// Simulate asynchronous operations using nested callbacks
// function asyncOperation1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 complete");
//     callback();
//   }, 1000);
// }

// function asyncOperation2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 complete");
//     callback();
//   }, 1000);
// }

// function asyncOperation3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 complete");
//     callback();
//   }, 1000);
// }

// // Start the nested chain — this is the "Callback Pyramid of Doom"
// function startOperations() {
//   asyncOperation1(() => {
//     asyncOperation2(() => {
//       asyncOperation3(() => {
//         console.log("All steps complete");
//       });
//     });
//   });
// }

// startOperations();


/*
  Exercise 4: Creating a Promise

  Description: 

  In the space below, rewrite the `getDataCallback` function from Exercise 2 to 
  return a Promise instead of using a callback. 

  Name it `getDataPromise`.  

  Display the returned data in the #section-2-output div when the 
  #exercise-4-btn is clicked.
*/

// Exercise 4 - Solution

const exercise4btn = document.getElementById("exercise-4-btn");

// Rewritten function that returns a Promise instead of using a callback
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 1000);
  });
}

// Button click triggers the Promise and updates the DOM
exercise4btn.addEventListener("click", () => {
  getDataPromise()
    .then((data) => {
      section2OutputDiv.textContent = `Promise Data: ${JSON.stringify(data)}`;
    })
    .catch((error) => {
      section2OutputDiv.textContent = `Error: ${error}`;
    });
});


/*
  Exercise 5: Promise States

  Description: 

  Explain the three states of a Promise: 
    - pending
    - fulfilled
    - rejected
    
  Create a Promise that intentionally rejects to 
  demonstrate the rejected state.
*/

// const exercise5btn = document.getElementById("exercise-5-btn");

// function getRejectedPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Something went wrong!");
//     }, 1000);
//   });
// }

// exercise5btn.addEventListener("click", () => {
//   section2OutputDiv.textContent = "Promise is pending...";

//   getRejectedPromise()
//     .then((data) => {
//       section2OutputDiv.textContent = `Fulfilled: ${data}`;
//     })
//     .catch((error) => {
//       section2OutputDiv.textContent = `Rejected: ${error}`;
//     });
// });


/*
  Exercise 6: Consuming Promises with then, catch, and finally

  Description: 

  Modify the `getDataPromise` method from exercise 4 to include a 
  `finally` block that logs "Operation completed" regardless of 
  success or failure.

  - getDataPromise().then().catch().finally()
*/

// const exercise6btn = document.getElementById("exercise-6-btn");

// // Simulated async function returning a Promise (same as before)
// function getDataPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true; // Change to false to simulate failure
//       if (success) {
//         resolve({ id: 1, name: "John Doe" });
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 1000);
//   });
// }

// // Button click triggers the Promise chain with .then, .catch, and .finally
// exercise6btn.addEventListener("click", () => {
//   section2OutputDiv.textContent = "Fetching data...";

//   getDataPromise()
//     .then((data) => {
//       section2OutputDiv.textContent = `Data: ${JSON.stringify(data)}`;
//     })
//     .catch((error) => {
//       section2OutputDiv.textContent = `Error: ${error}`;
//     })
//     .finally(() => {
//       console.log("Operation completed"); // Always logs this
//     });
// });


/*
  Exercise 7: Chaining Promises

  Description: 

  Create a function `processData` that returns a Promise. 

  Chain it after getDataPromise to process the fetched data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-7-btn is clicked.
*/

const exercise7btn = document.getElementById("exercise-7-btn");

// Simulates fetching data
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

// Processes the fetched data by adding a "processed" property
function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.processed = true; // Add a new property
      resolve(data);
    }, 1000);
  });
}

// Handle button click: fetch, then process, then display
exercise7btn.addEventListener("click", () => {
  section2OutputDiv.textContent = "Fetching and processing data...";

  getDataPromise()
    .then((data) => processData(data))
    .then((processedData) => {
      section2OutputDiv.textContent = `Processed Data: ${JSON.stringify(processedData)}`;
    })
    .catch((error) => {
      section2OutputDiv.textContent = `Error: ${error}`;
    });
});


/*
  Exercise 8: Handling Errors in Promise Chains

  Description: 

  Modify the chain from Exercise 7 to handle errors that may occur in `processData`. 

  Simulate an error and ensure it is caught and logged.

  Display the returned data in the #section-2-output div when the 
  #exercise-8-btn is clicked.
*/

const exercise8btn = document.getElementById("exercise-8-btn");

// Simulates fetching data (same as before)
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

// Processes the fetched data, but now simulates an error
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error by throwing one based on a condition
      const shouldFail = true; // Set this to false to simulate success
      if (shouldFail) {
        reject("Error processing data!");
      } else {
        data.processed = true;
        resolve(data);
      }
    }, 1000);
  });
}

// Handle button click: fetch, then process, and handle any errors
exercise8btn.addEventListener("click", () => {
  section2OutputDiv.textContent = "Fetching and processing data...";

  getDataPromise()
    .then((data) => processData(data))
    .then((processedData) => {
      section2OutputDiv.textContent = `Processed Data: ${JSON.stringify(processedData)}`;
    })
    .catch((error) => {
      section2OutputDiv.textContent = `Error: ${error}`;
    });
});


/*
  Exercise 9: Using async and await

  Description: 

  Rewrite the Promise chain from Exercise 7 using async and await. 

  Ensure proper error handling using try-catch.

  Display the returned data in the #section-2-output div when the 
  #exercise-9-btn is clicked.
*/

const exercise9btn = document.getElementById("exercise-9-btn");

// Simulates fetching data (same as before)
function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

// Processes the fetched data and adds a "processed" property
function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.processed = true;
      resolve(data);
    }, 1000);
  });
}

// Using async/await with try-catch to handle errors
exercise9btn.addEventListener("click", async () => {
  section2OutputDiv.textContent = "Fetching and processing data...";

  try {
    const data = await getDataPromise(); // Wait for data
    const processedData = await processData(data); // Wait for processed data
    section2OutputDiv.textContent = `Processed Data: ${JSON.stringify(processedData)}`;
  } catch (error) {
    section2OutputDiv.textContent = `Error: ${error}`; // Catch any errors
  }
});


/*
  Exercise 10: Sequential API Requests with async/await

  Description: 

  When the #exercise-10-btn is clicked, fetch two posts 
  sequentially from https://jsonplaceholder.typicode.com/posts/5 and 
  https://jsonplaceholder.typicode.com/posts/6 using async/await. 

  Display both posts in the #section-1-output div.
*/
const exercise10btn = document.getElementById("exercise-10-btn");

exercise10btn.addEventListener("click", async () => {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    const post1 = await response1.json();

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/6"
    );
    const post2 = await response2.json();

    section1OutputDiv.textContent = JSON.stringify({ post1, post2 }, null, 2);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});

/*
  Exercise 11: Parallel API Requests with Promise.all

  Description: 

  When the #exercise-11-btn is clicked, fetch two posts in parallel 
  from https://jsonplaceholder.typicode.com/posts/10 and 
  https://jsonplaceholder.typicode.com/posts/15 using Promise.all and 
  display the results.
*/

const exercise11btn = document.getElementById("exercise-11-btn");

exercise11btn.addEventListener("click", async () => {
  try {
    // Use Promise.all to fetch both posts in parallel
    const [post10, post15] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/10").then(response => response.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/15").then(response => response.json())
    ]);

    // Create the object with post10 and post15
    const result = {
      post10,
      post15
    };

    // Display the result in the requested format
    section1OutputDiv.textContent = JSON.stringify({result}, null, 2);

  } catch (error) {
    console.error("Error fetching posts:", error);
    section1OutputDiv.textContent = `Error: ${error}`;
  }
});


/*
  Exercise 12: Using Promise.race

  Description: 

  Implement a function that uses Promise.race to fetch data from these two URLs:
  - https://jsonplaceholder.typicode.com/posts/16
  - https://jsonplaceholder.typicode.com/posts/20

  Display the result of the first one that resolves to #section-1-output 
  when the #exercise-12-btn is clicked.
*/

const exercise12btn = document.getElementById("exercise-12-btn");

exercise12btn.addEventListener("click", async () => {
  try {
    // Use Promise.race to fetch from both URLs
    const result = await Promise.race([
      fetch("https://jsonplaceholder.typicode.com/posts/16").then(response => response.json()),
      fetch("https://jsonplaceholder.typicode.com/posts/20").then(response => response.json())
    ]);

    // Display the result inside an object with "result" key
    section1OutputDiv.textContent = JSON.stringify({ result }, null, 2);
  } catch (error) {
    console.error("Error fetching posts:", error);
    section1OutputDiv.textContent = `Error: ${error}`;
  }
});


/*
  Exercise 13: Using Promise.allSettled

  Description: 

  When the #exercise-13-btn is clicked, make multiple fetch requests 
  where some may fail:
    - "https://jsonplaceholder.typicode.com/posts/23"
    - "https://jsonplaceholder.typicode.com/invalid-url"
    - "https://jsonplaceholder.typicode.com/posts/25"

  Use Promise.allSettled to handle all outcomes and display the statuses
  in #section-1-output.
*/

const exercise13btn = document.getElementById("exercise-13-btn");

exercise13btn.addEventListener("click", async () => {
  // Create the array of fetch promises with proper handling of the response
  const fetchPromises = [
    fetch("https://jsonplaceholder.typicode.com/posts/23").then(response => 
      response.ok ? response.json() : Promise.reject("Failed to fetch post 23")
    ),
    fetch("https://jsonplaceholder.typicode.com/invalid-url").then(response => 
      response.ok ? response.json() : Promise.reject("Failed to fetch invalid URL")
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/25").then(response => 
      response.ok ? response.json() : Promise.reject("Failed to fetch post 25")
    ),
  ];

  try {
    // Use Promise.allSettled to handle all outcomes (resolved or rejected)
    const results = await Promise.allSettled(fetchPromises);

    // Format the results with "status" and "value" or "reason" properties
    const formattedResults = results.map(result => {
      if (result.status === "fulfilled") {
        return { status: result.status, value: result.value };
      } else {
        return { status: result.status, reason: result.reason };
      }
    });

    // Display the results in the section1OutputDiv in the desired format
    section1OutputDiv.textContent = JSON.stringify({ formattedResults }, null, 2);
  } catch (error) {
    console.error("Error handling promises:", error);
    section1OutputDiv.textContent = `Error: ${error}`;
  }
});

/*
  Exercise 14: Using Promise.any

  Description: 

  Implement functionality to fetch data from multiple sources using Promise.any 
  and display the first successful response to #section-1-output when the 
  #exercise-14-btn is clicked.

    - "https://jsonplaceholder.typicode.com/invalid-url1"
    - ""https://jsonplaceholder.typicode.com/invalid-url2"
    - "https://jsonplaceholder.typicode.com/posts/2"
*/

const exercise14btn = document.getElementById("exercise-14-btn");

exercise14btn.addEventListener("click", async () => {
  // Create the array of fetch promises with proper handling of the response
  const fetchPromises = [
    fetch("https://jsonplaceholder.typicode.com/invalid-url1").then(response => 
      response.ok ? response.json() : Promise.reject("Failed to fetch from invalid-url1")
    ),
    fetch("https://jsonplaceholder.typicode.com/invalid-url2").then(response => 
      response.ok ? response.json() : Promise.reject("Failed to fetch from invalid-url2")
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/2").then(response => 
      response.ok ? response.json() : Promise.reject("Failed to fetch post 2")
    )
  ];

  try {
    // Use Promise.any to fetch data from the first successful promise
    const result = await Promise.any(fetchPromises);

    // Display the first successful response
    section1OutputDiv.textContent = JSON.stringify({ result }, null, 2);
  } catch (error) {
    console.error("Error with Promise.any:", error);
    section1OutputDiv.textContent = `Error: ${error}`;
  }
});


/*
  Exercise 15: Handling Rejected Promises Globally

  Description: 

  Set up a global handler for unhandled promise rejections using 
  window.addEventListener('unhandledrejection', handler). 

  Test it by creating a rejected promise without a catch block.
*/

// Global handler for unhandled promise rejections
// window.addEventListener("unhandledrejection", (event) => {
//   console.error("Unhandled Rejection:", event.reason);
// });

// // Create a rejected promise without a .catch() block
// const rejectedPromise = new Promise((resolve, reject) => {
//   reject("Promise was rejected without a catch");
// });


/*
  Exercise 16: Combining Promises and Async/Await

  Description: 

  Use both promises and async/await to fetch data and process it. 
    - https://jsonplaceholder.typicode.com/posts/10

  Fetch data using fetch (which returns a promise), then process it in 
  an async function using await.
*/
// async function fetchDataAndProcess() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/10"
//     );
//     const data = await response.json();
//     const processedData = await processData(data);
//     section1OutputDiv.textContent = `Processed Data: ${JSON.stringify(
//       processedData
//     )}`;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // Call the function
// fetchDataAndProcess();

/*
  Exercise 17: Using Promise.resolve and Promise.reject

  Description: 

  Create functions that return Promise.resolve and Promise.reject immediately.

  Use them to test promise handling without asynchronous operations.
*/

// function immediateResolve() {
//   return Promise.resolve("Immediate Resolve");
// }

// function immediateReject() {
//   return Promise.reject("Immediate Reject");
// }

// immediateResolve()
//   .then((data) => {
//     console.log("Resolved:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// immediateReject()
//   .then((data) => {
//     console.log("Resolved:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   }); 

/*
  Exercise 18: Implementing a Simple Promise-based Timeout

  Description: 

  Create a function `delay` that returns a promise that resolves 
  after a specified number of milliseconds. 

  Use it to delay actions in your code.
*/

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function delayedAction() {
//   console.log("Action will happen after 2 seconds...");
//   await delay(2000);
//   console.log("Action executed");
// }

// delayedAction();

/*
  Exercise 19: Sequential Execution with for Loop and await

  Description: 

  Fetch multiple posts sequentially in a loop using async/await. 
  - HINT - `https://jsonplaceholder.typicode.com/posts/${loop_index_number}`

  Display each post inside #section-1-output as it is fetched.
*/

// async function fetchPostsSequentially() {
//   for (let i = 1; i <= 3; i++) {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${i}`
//       );
//       const post = await response.json();
//       section1OutputDiv.innerHTML += `<p>Post ${i}: ${post.title}</p>`;
//     } catch (error) {
//       console.error(`Error fetching post ${i}:`, error);
//     }
//   }
// }

// // Call the function
// fetchPostsSequentially();

/*
  Exercise 20: Converting Callback-based Functions to Promises

  Description: 

  Given a callback-based function `readFileCallback`, wrap it in a 
  function `readFilePromise` that returns a Promise.
*/

// Simulating a callback-based function
function readFileCallback(filename, callback) {
  setTimeout(() => {
    if (filename === "valid.txt") {
      callback(null, "File content");
    } else {
      callback("File not found", null);
    }
  }, 1000);
}

// function readFilePromise(filename) {
//   return new Promise((resolve, reject) => {
//     readFileCallback(filename, (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// // Using the Promise-based function
// readFilePromise("valid.txt")
//   .then((data) => {
//     console.log("File Data:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
/*
  Exercise 21: Handling Multiple Async Operations with Different Timing

  Description: 

  Create multiple promises that resolve after different delays. 

  Use Promise.all to wait for all to complete and display the results.
*/

// function createDelayedPromise(value, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }

// async function handleMultiplePromises() {
//   const promises = [
//     createDelayedPromise("First", 3000),
//     createDelayedPromise("Second", 2000),
//     createDelayedPromise("Third", 1000),
//   ];

//   const results = await Promise.all(promises);
//   section1OutputDiv.textContent = `Results: ${results.join(", ")}`;
// }

