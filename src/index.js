const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.listen(8080);

const rootRoute = require("./routes/rootRouter");
app.use("/api", rootRoute);
