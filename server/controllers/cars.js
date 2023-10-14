import { pool } from "../config/database.js"

const getCars = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM cars ORDER BY id ASC")
    res.status(200).json(results.rows)
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

const getCarById = async (req, res) => {
  try {
    const selectQuery = `
      SELECT exterior, roof, wheels, interior
      FROM cars
      WHERE id=$1
    `
    const carId = req.params.carId

    const results = await pool.query(selectQuery, [carId])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const createCar = async (req, res) => {
  try {
    const { exterior, roof, wheels, interior } = req.body
    const createQuery = `
      INSERT INTO cars (exterior, roof, wheels, interior)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `

    const result = await pool.query(createQuery, [
      exterior,
      roof,
      wheels,
      interior,
    ])

    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

const updateCar = async (req, res) => {
  try {
    const carId = parseInt(req.params.carId)
    const { exterior, roof, wheels, interior } = req.body
    const updateQuery = `UPDATE cars SET exterior = $1, roof = $2, wheels = $3, interior = $4 WHERE id = $5`

    const result = await pool.query(updateQuery, [
      exterior,
      roof,
      wheels,
      interior,
      carId,
    ])

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

const deleteCar = async (req, res) => {
  try {
    const carId = parseInt(req.params.carId)
    const deleteQuery = `DELETE FROM cars WHERE id=$1`

    const result = await pool.query(deleteQuery, [carId])

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export default { getCars, getCarById, createCar, updateCar, deleteCar }
