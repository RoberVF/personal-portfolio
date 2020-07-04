"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.set('port', PORT);
app.set("views", path_1.default.join(__dirname, '/views'));
app.set("view engine", "ejs");
app.use(require("./routes/index.routes"));
app.use(express_1.default.static(path_1.default.join(__dirname, "/public")));
exports.default = app;
