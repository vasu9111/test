const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Book Store</h1>");
});
// all books routes
app.get("/books", bookRoutes);
// Use the book routes
app.use("/book/api", bookRoutes);

app.listen(3000, () => console.log(`Server is running on port 3000`));
