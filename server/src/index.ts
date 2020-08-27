import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import { AppRouter } from "./routing";
import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017/webchatdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        const app = express();
        const port = 5000;
        app.use(bodyParser.json());
        app.use(cors());
        app.use(helmet());
        AppRouter(app);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });
    });
