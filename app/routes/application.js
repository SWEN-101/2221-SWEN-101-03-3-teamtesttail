import Route from '@ember/routing/route';

export default class VisualTimerRoute extends Route {
    
    model() {
        return {
            sections: [ // Not implemented yet.
                [1, 2, 3],
                [4, 5],
                [6, 7],
                [8, 9, 10],
        ],
            questions: [
                { number: 1, letter: null, percentage: 10 },
                { number: 2, letter: null, percentage: 10 },
                { number: 3, letter: null, percentage: 10 },
                { number: 4, letter: null, percentage: 10 },
                { number: 5, letter: null, percentage: 10 },
                { number: 6, letter: null, percentage: 10 },
                { number: 7, letter: null, percentage: 10 },
                { number: 8, letter: null, percentage: 10 },
                { number: 9, letter: null, percentage: 10 },
                { number: 10, letter: null, percentage: 10 }
            ]
        };
    }
}