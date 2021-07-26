const express=require('express')
const router=express.Router()

router.use(express.urlencoded({extended:false}))
router.use(express.json())
let {people}=require('./data')

const {
    getPeople,
    getPeopleWithID,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}=require('./controller')

// router.get('/',getPeople)

// router.get('/:id',getPeopleWithID)

// router.post('/',createPerson)

// router.post('/postman',createPersonPostman)

// router.put('/:id',updatePerson)

// router.delete('/:id',deletePerson)

router.route('/').get(getPeople).post(createPerson)           //different method to do routing
router.route('/postman').post(createPersonPostman)
router.route('/:id').get(getPeopleWithID).put(updatePerson).delete(deletePerson)

module.exports=router
