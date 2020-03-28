const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

// production:
// app.use(
//   cors({
//     origin: "https://myapp.com.br"
//   })
// );
app.use(cors()); // first use
app.use(express.json());
app.use(routes);
app.use(errors()); // last use

app.listen(3333);
