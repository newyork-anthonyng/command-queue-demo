const express = require("express");
const path = require("path");

const app = express();

app.get("/slow/third-party.js", (req, res) => {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, "public/third-party.js"));
  }, 3000);
});

app.get("/fast/third-party.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/third-party.js"));
});

app.use(express.static(path.resolve(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
