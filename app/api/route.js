const express = require("express");
const cors = require("cors");
const app = express();




app.use(cors());
app.use(express.json());

app.post("/Register", (req, res) => {
  const { Email, Password } = req.body;
  res.json({ requestData: { Email, Password } });
});

app.listen(4000);
