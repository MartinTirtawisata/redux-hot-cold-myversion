import reducer from './reducer';
import {makeGuess, restartGame, generateAuralUpdate} from './actions';

describe('reducer', () => {
    const correctAnswer = 10;
    const guess = 10;

    it('should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type:'__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });

    it('should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: "unknown"});
        expect(state).toBe(currentState);
    })
})

describe('Make guesses', () => {
    it('should make guesses', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 100
        }
        state = reducer(state, makeGuess(25));
        expect(state.guesses).toEqual([25]);
        expect(state.feedback).toEqual(`You're Ice Cold...`);

        //and so on
    }); 

    it('can generate aural updates', () => {
        let state = {
            guesses: [25, 3, 90],
            feedback: "You're Warm.",
            auralStatus: ''
        };

        state = reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25")
    });
});

describe('restart game', () => {
    it('should start a new game', () => {
        // Mess up the state a bit to simulate an existing game
        let state = {
            guesses: [1, 2, 3, 4],
            feedback: 'Awesome',
            correctAnswer: 4
        };
        const correctAnswer = 10;
        state = reducer(state, restartGame(correctAnswer));
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toEqual(correctAnswer);
    })
})



