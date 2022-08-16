"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express API Code Of typescript
const express_1 = __importDefault(require("express"));
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/api", require("./routes/api.route"));
app.use((req, res, next) => {
    next(createError.NotFound());
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: err,
    });
});
app.listen(PORT, () => {
    console.log(`App Listening to PORT : ${PORT}`);
});
