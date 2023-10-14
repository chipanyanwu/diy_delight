import express from "express"
import CustomizationsController from "../controllers/customizations.js"

const router = express.Router()

router.get("/exteriors", CustomizationsController.getExteriors)
router.get("/exteriors/:id", CustomizationsController.getExteriorById)

router.get("/roofs", CustomizationsController.getRoofs)
router.get("/roofs/:id", CustomizationsController.getRoofById)

router.get("/wheels", CustomizationsController.getWheels)
router.get("/wheels/:id", CustomizationsController.getWheelById)

router.get("/interiors", CustomizationsController.getInteriors)
router.get("/interiors/:id", CustomizationsController.getInteriorById)

export default router
