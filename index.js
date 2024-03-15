const array = [
  { id: 1, name: "Object 1", thumbnail: "image1.jpg" },
  { id: 2, name: "Object 2", thumbnail: "image2.jpg" },
  { id: 3, name: "Object 3", thumbnail: "image3.jpg" },
];
const newArray = array.filter((item) => item.id !== 2);
console.log("====================================");
console.log("newArray" + newArray.toString());
console.log("====================================");
console.log("====================================");
console.log("array: " + array.toString());
console.log("====================================");
