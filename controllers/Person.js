const Person = require('../models/Person')


const router = require('express').Router()

//GET all
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        console.log('error retrieving people:', error)
        res.json({ message: 'error retrieving people'})
    }
})

//Get by id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const person = await Person.findById(id)
        res.json(person)
    } catch (error) {
        console.log('error retrieving people:', error)
        res.status(404).json({ message: `error retrieving person with id ${id}`})
    }
})


//Post create person
router.post('/', async (req, res) => {
    try {
        const user = await new Person(req.body).save()
        res.json(user)
    } catch (error) {
        console.log('error recreating person:', error)
        res.status(500).json({ message: 'error creating person'})
    }
})


module.exports = router