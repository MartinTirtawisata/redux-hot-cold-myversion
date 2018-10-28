import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

describe('Generate Aural Update', () => {
    it('should generate aural update',() => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('Restart Game', () => {
    it('should restart game', () => {
        const correctAnswer = 10;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME),
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('Make Guess', () => {
    it('should make guess', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess)
    });
});
