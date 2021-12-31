import QUESTION_MESSAGES from './questionMessages';
import QUESTION_RESPONSES from './questionResponses';

const mainResponses = {
	yes: interface =>
		console.log('Awesome! But I still need to write the code for that :D'),
	no: interface => {
		console.log('What would you like to do?');
	},
	settings: () => console.log('Going to settings...'),
	quit: interface => {
		console.log('No problem, see you next time! \nGame on! 🎮');
		setTimeout(() => interface.close(), 2000);
	},
	default: interface => {
		console.log('answer:', answer);
		console.log(
			`\nSorry, I'm not sure what "${answer}" means... can you try again?\n`
		);
		setTimeout(() => {
			askQuestion(
				interface,
				QUESTION_MESSAGES.question1,
				QUESTION_RESPONSES.answer1
			);
		}, 2000);
	},
};

export default { mainResponses };
