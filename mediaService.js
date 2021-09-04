const fs = require("fs");
const mediaFolder = "public/assets/images/sud";
const mediaArray = [];
fs.readdirSync(mediaFolder).forEach((file) => {
  mediaArray.push(file);
});
console.log(JSON.stringify(mediaArray));
