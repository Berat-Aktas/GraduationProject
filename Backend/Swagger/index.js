const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Hız sınırlama middleware'inin konfigürasyonu
const limiter = rateLimit({
    windowMs:  1000, // 1 saniye
    max: 100, // bir IP adresinden 1 saniyede Maksimum 100 istek
    message:
    "Try later on"
});

swaggerDocument = require("./swagger.json");


const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//START swagger-ui
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(limiter);

app.get("/hello", (req, res) => {
    res.json({ message: "Hello, World!" });
});

app.listen(8000);