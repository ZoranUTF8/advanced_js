const fs = require("fs");

// ! Reading
// ? asynchronous
// ? The readFile method is asynchronous and, hence, takes a completion callback as its last argument. This callback takes an err as an exception.
// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// console.log("Hello!");

// ? synchronous
// ? this blocks the program until the file is read

// try {
//   const data = fs.readFileSync("test.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// console.log("Hello!");

// ! Writing

// ? asynchronous
// let content = "This is what will be written to the file"

// fs.writeFile('test.txt', content, (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log("File written!")
// })

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

// ? synchronous
// let content = "This is what will be written to the file";

// try {
//   fs.writeFileSync("test.txt", content);
//   console.log("File written!");
// } catch (err) {
//   console.error(err);
// }

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// ? stat method that provides us with a lot of useful information about files.
// fs.stat('test.txt', (err, stats) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(stats)
//   })
const buf4 = Buffer.from([257, 258]);
console.log(buf4)
