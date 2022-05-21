const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const secret_key = require('../configs/auth.config');

exports.signup = async (req, res) => {
    
    const new_user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    };

    try{
        const added_user = await User.create({ new_user });
        return res.status(201).send({
            message: "Added new user",
            output: added_user
        });
    } catch(err) {
        console.error("Error while creating new user:", err.message);
        return res.status(500).send({
            message: "Some error occured"
        });
    }
}

exports.signin = async (req, res) => {

    const user = {
        user_id: req.body.user_id,
        username: req.body.username,
        password: req.body.password
    };

    try{
        const login_user = await User.findById({"_id": user_id});
        if(login_user) {
            
            const valid_pass = bcrypt.compareSync(password, login_user.password);
            if(!valid_pass) {
                return res.status(403).send({
                    message: "Invalid username/password"
                });
            }

            const token = jwt.sign({"user_id": user._id}, secret_key, {
                expiresIn: 600
            });

            return res.status(200).send({
                message: "user logged in",
                output: {
                    username: login_user.username,
                    email: login_user.email,
                    access_token: token
                }
            });
        }
    } catch(err) {
        console.error("Error while logging user:", err.message);
        return res.status(500).send({
            message: "Some error occured"
        });
    }
}