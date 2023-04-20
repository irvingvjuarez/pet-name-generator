const defaultPrompt = `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: Horse
Names: `;
const defaultWelcomeMessage = `Welcome. Insert the pet type and get 3 possible options
Pet type: (Eg. Horse) `;

class Query {
	constructor(
		welcomeMessage = defaultWelcomeMessage,
		prompt = defaultPrompt
	) {
		this.welcomeMessage = welcomeMessage
		this.prompt = prompt
	}

	getMessage() {
		return this.welcomeMessage
	}

	getPrompt() {
		return this.prompt
	}
}

export default Query