import bcrypt from "bcrypt";
let User = require("../models/User");

export class Encrypt {
    saltRounds = 10;
    constructor() {}

    hashPassword(password: string) {
        const hash = bcrypt.hashSync(password, this.saltRounds);
        return hash;
    }

    comparePassword(password: string, hash: string) {
        if (bcrypt.compareSync(password, hash)) {
            return true;
        } else {
            return false;
        }
    }
}
