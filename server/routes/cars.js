import express from "express"
import CarsController from "../controllers/cars.js"

const router = express.Router()

router.get("/", CarsController.getCars)
router.post("/", CarsController.createCar)

router.get("/:carId", CarsController.getCarById)
router.patch("/:carId", CarsController.updateCar)
router.delete("/:carId", CarsController.deleteCar)

export default router
