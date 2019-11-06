var express = require('express');
const router = express.Router();

let User = require('../models/user.model')

/* GET users listing. */
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/create', (req, res) => {
    const user = req.body
    const newUser = new User(user)

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/update/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.user = req.body.user
            user.save()
                .then(() => res.json('User updated'))
                .catch(err => res.status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error ' + err))
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error ' + err))
})

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("User deleted!"))
        .catch(err => res.status(400).json('Error ' + err))
})


module.exports = router;
