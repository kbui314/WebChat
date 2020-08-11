"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
// import bodyParser from 'body-parser';
var app = express_1.default();
// app.use(bodyParser.json());
// app.use(cors());
app.use(helmet_1.default());
var port = process.env.PORT || 1337;
app.listen(port, function () {
    console.log("Listening on port " + port);
});
