const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json()); 


app.use(express.urlencoded({ extended: true }));   

const db = require("./app/models");
async function connectDB(params) {
  try {
    await db.sequelize.sync();
    console.log({msg:"DB connected successfully"});
  } catch (error) {
    console.log({error});
  }
}
connectDB();
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to arpit6055 library application." });
});

require("./app/routes/books.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
