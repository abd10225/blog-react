const router = require('express').Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');


//UPDATE
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        // Check if password is provided and hash it
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json({ error: "Error hashing the password" });
            }
        }
        
        try {
            // Update user details
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );

            // Check if the user was found
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }

            res.status(200).json({ message: "Account has been updated", user: updatedUser });
        } catch (err) {
            res.status(500).json({ error: "Error updating the account" });
        }
    } else {
        res.status(401).json({ error: "You can update only your account" });
    }
});

module.exports = router;
