import ApiCrud from "../controllers/apiController.js";
import express from 'express'

const router=express.Router()

router.get('/',ApiCrud.get_api),
router.post('/',ApiCrud.create_api),
router.put('/:id',ApiCrud.update_api),
router.delete('/:id',ApiCrud.delete_api)

export default router