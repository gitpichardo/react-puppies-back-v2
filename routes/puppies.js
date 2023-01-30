import { Router } from "express"
import * as puppiesCtrl from '../controllers/puppies.js'

const router = Router()

// ========== Public Routes ===========
router.post('/', puppiesCtrl.create)
router.get('/', puppiesCtrl.index)
router.delete('/:id', puppiesCtrl.delete)

export{
  router
}