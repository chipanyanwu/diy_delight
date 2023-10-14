import "./dotenv.js"
import { pool } from "./database.js"

const createCarsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars (
      id SERIAL PRIMARY KEY,
      exterior INTEGER NOT NULL,
      roof INTEGER NOT NULL,
      wheels INTEGER NOT NULL,
      interior INTEGER NOT NULL
    )
  `

  try {
    const res = await pool.query(createTableQuery)
    console.log("🎉 cars table created successfully")
  } catch (err) {
    console.error("⚠️ error creating cars table", err)
  }
}

createCarsTable()
