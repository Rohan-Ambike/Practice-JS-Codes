// *******
// CALLBACK HELL
// *******
// function getUser(callback) {
//     setTimeout(() => {
//         console.log("Fetched user");
//         callback({ id: 1, name: "Alice" });
//     }, 1000);
// }

// function getPosts(userId, callback) {
//     setTimeout(() => {
//         console.log("Fetched posts for user", userId);
//         callback(["Post 1", "Post 2"]);
//     }, 1000);
// }

// // Nested callbacks (callback hell)
// getUser((user) => {
//     getPosts(user.name, (posts) => {
//         console.log("User Posts:", posts);
//     });
// });


// *******
// WITH PROMISES
// *******
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetched user");
//             resolve({ id: 1, name: "Alice" });
//         }, 1000);
//     });
// }

// function getPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetched posts for user", userId);
//             resolve(["Post 1", "Post 2"]);
//         }, 1000);
//     });
// }

// // Chaining promises
// getUser()
//     .then((user) => getPosts(user.id))
//     .then((posts) => console.log("User Posts:", posts))
//     .catch((error) => console.error(error));


// *******
// WITH ASYNC AWAIT
// *******
// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetched user");
//             resolve({ id: 1, name: "Alice" });
//         }, 1000);
//     });
// }

// function getPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Fetched posts for user", userId);
//             resolve(["Post 1", "Post 2"]);
//         }, 1000);
//     });
// }

// async function fetchUserData() {
//     try {
//         const user = await getUser();
//         const posts = await getPosts(user.id);
//         console.log("User Posts:", posts);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchUserData();


// async function asyncFunction() {
//     console.log("Start");

//     await new Promise(resolve => setTimeout(resolve("Akshay"), 2000));  // Waits for 2 seconds

//     console.log("End");
// }


// console.log("Before function call");
// asyncFunction();
// console.log(asyncFunction());
// console.log("After function call");

