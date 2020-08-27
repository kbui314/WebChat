import { Express } from "express";
import { UserController } from "./controllers/UserContoller";
export function AppRouter(app: Express) {
    app.use("/webchat/user", UserController());
}
