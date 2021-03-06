const User = require("../models/user");
const bcrypt = require("bcrypt");
// It has database connection
/**
 *
 * @param {*} req
 * @param {*} res
 * check if email already exists
 * password hash
 * transform email to lowercase
 * save
 */

const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    //this checks whether the email exists on db or not
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }

    // to hash the passwords we have used bcrypt library
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    //we converted the email into lowercase like bibekdh@gmail.com == Bibekdh@gmail.com then we saved with hashed password
    const newUser = new User({ email: email.toLowerCase(), password: hash, fullName: "Bibek Dhakal" });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
};

module.exports = register;