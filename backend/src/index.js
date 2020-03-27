const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(cors());
// production:
// app.use(
//   cors({
//     origin: "https://myapp.com.br"
//   })
// );
app.use(express.json());
app.use(routes);

app.listen(3333);
