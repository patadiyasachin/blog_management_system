const express = require("express");
const user = require("../model/userDetail");
const router = express.Router();
const jwt = require("jsonwebtoken");
const sec_key = "adkfkadjf";
router.post("/signup", async (req, res) => {
  const data = new user();
  data.name = req.body.name;
  data.username = req.body.username;
  data.password = req.body.password;
  const d = await data.save();

  const paylod = {
    id: d._id,
  };

  const token = jwt.sign(paylod, sec_key);
  res.status(200).json(d);
});

router.post("/login", async (req, res) => {
  const data = await user.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(data);
  if (req.body.username !== "" && req.body.password !== "") {
    if (data) {
      const paylod = {
        id: data._id,
      };

      const token = jwt.sign(paylod, sec_key);
      res.status(200).json(data);
      //   const accessToken = jwt.sign(
      //     data.toJSON(),
      //     process.env.ACCESS_SECRET_KEY,
      //     { expiresIn: "15m" }
      //   );
      //   const refreshToken = jwt.sign(
      //     data.toJSON(),
      //     process.env.REFRESH_SECRET_KEY
      //   );
      //   const newToken = new Token({ token: refreshToken });
      //   await newToken.save();
    } else {
      res.status(401).send("Data not found !!");
    }
  } else {
    res.status(401).send("plese enter all fields first !!");
  }
});

module.exports = router;
