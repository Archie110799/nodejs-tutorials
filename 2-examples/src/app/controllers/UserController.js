import { validationResult } from "express-validator";
import User from "../../models/user.js";

export const index = (req,res) =>{
    res.send("Passs");
}

// Validation
export const create = (req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json(req.body)
    // User.create({
    //   username: req.body.username,
    //   password: req.body.password,
    // }).then(user => res.json(user));
}
