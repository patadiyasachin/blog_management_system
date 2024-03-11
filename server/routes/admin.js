const express = require('express')
const adminRouter = express.Router()
const allusers = require('../model/userDetail')

adminRouter.delete('/deleteuser/:username', async (req, res) => {
    try {
        const deleteUser = await allusers.deleteOne({ username: req.params.username })
        if (deleteUser) {
            return res.send(deleteUser)
        } else {
            return res.send("user not deleted !!")
        }
    } catch (error) {
        console.log(error);
    }
})

adminRouter.get('/getAllUsers', async (req, res) => {
    try {
        const allUsers = await allusers.find()
        if (allUsers) {
            return res.send(allUsers)
        } else {
            return res.send("Something went wrong !")
        }
    } catch (error) {
        console.log(error);
    }
})

adminRouter.get("/userDetail/:username", async (req, res) => {
    try {
        const data = await allusers.findOne({ username: req.params.username })
        if (data) {
            return res.status(200).send(data)
        } else {
            return res.status(501).send("data not found!!")
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = adminRouter