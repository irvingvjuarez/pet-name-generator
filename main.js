import { createInterface } from "readline"
import Query from "./controllers/query.js"

const PetQuery = new Query()

const readLine = createInterface({
	input: process.stdin,
	output: process.stdout
})

readLine.question(PetQuery.getMessage(), async petType => {
	const response = await PetQuery.makeRequest(petType)
	console.log(response)

	readLine.close()
})