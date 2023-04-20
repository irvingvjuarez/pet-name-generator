import * as dotenv from "dotenv"
import { createInterface } from "readline"

dotenv.config()
const OPENAI_API_TOKEN = process.env.OPENAI_API_KEY

const readLine = createInterface({
	input: process.stdin,
	output: process.stdout
})

readLine.question(`Welcome. Insert the pet type and get 3 possible options
Pet type: (Eg. Horse) `, petType => {
	console.log("Information gotten")
	console.log("Input:", petType)
	readLine.close()
})