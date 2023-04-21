import { Configuration, OpenAIApi } from "openai"
import * as dotenv from "dotenv"

const defaultPrompt = `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: Horse
Names: `;
const defaultWelcomeMessage = `Welcome. Insert the pet type and get 3 possible options
Pet type: (Eg. Horse) `;

dotenv.config()

class Query {
	constructor(
		welcomeMessage = defaultWelcomeMessage,
		prompt = defaultPrompt
	) {
		this.welcomeMessage = welcomeMessage
		this.prompt = prompt

		this.configuration = new Configuration({
			apiKey: process.env.OPENAI_API_KEY
		})
		this.openai = new OpenAIApi(this.configuration)
	}

	getMessage() {
		return this.welcomeMessage
	}

	generatePrompt(petType) {
		return this.prompt + petType
	}

	async makeRequest(petType) {
		try {
			const capitalizedPetType = petType[0].toUpperCase() + petType.slice(1).toLowerCase();

			const response = await this.openai.createCompletion({
				model: "text-davinci-003",
				prompt: this.generatePrompt(capitalizedPetType),
				temperature: 0.6,
			})

			const choices = response.data.choices
			return process.env.DEBUGGING ? { response, choices } : choices[0].text

		} catch(err) {
			let message = ""

			switch (err.message) {
				case "Cannot read properties of undefined (reading 'toUpperCase')":
					message = "It looks like you add no input. Try again."
					break;
				default:
					message = "OpenAI service are not working properly right now. Try again later."
			}

			return message
		}
	}
}

export default Query