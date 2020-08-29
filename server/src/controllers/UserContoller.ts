import { Router, Request, Response } from "express";
import { Encrypt } from "../utils/Encrypt";
let User = require("../models/User");

export function UserController(): Router {
    let router = Router();
    let encrypt = new Encrypt();

    router.post("/register", async (req: Request, res: Response) => {
        try {
            let hash: String = new Encrypt().hashPassword(req.body.password);
            let user = new User({
                email: req.body.email,
                hash: hash,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
            });
            await user.save();
            res.send(user);
        } catch (error) {
            res.send({ error: "Something went wrong." });
            console.log(error);
        }
    });
    router.get("/users", async (req: Request, res: Response) => {
        try {
            const users = await User.find();
            res.send(users);
        } catch (error) {
            console.log(error);
            res.send({ error: "Something went wrong." });
        }
    });
    router.delete("/:id", async (req: Request, res: Response) => {
        try {
            await User.deleteOne({ _id: req.params.id });
            res.status(204).send();
        } catch (error) {
            res.status(404);
            res.send({ error: "User doesn't exists." });
        }
    });
    router.get("/:id", async (req: Request, res: Response) => {
        let hash = encrypt.hashPassword(req.params.id);
        res.send({ hashedPassword: hash });
    });
    router.post("/login", async (req: Request, res: Response) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            const isPassword = encrypt.comparePassword(
                req.body.password,
                user.hash
            );
            if (isPassword) {
                res.send({ message: "true" });
            } else {
                res.send({ message: "false" });
            }
        } catch (error) {
            res.send({ error: "Email and/or password is incorrect." });
        }
    });

    return router;
}
