import * as dotenv from "dotenv"
import { createInterface } from "readline"
import Query from "./controllers/query.js"

dotenv.config()
const OPENAI_API_TOKEN = process.env.OPENAI_API_KEY

const PetQuery = new Query()

const readLine = createInterface({
	input: process.stdin,
	output: process.stdout
})

readLine.question(PetQuery.getMessage(), petType => {
	console.log("Information gotten")
	console.log("Input:", petType)
	readLine.close()
})