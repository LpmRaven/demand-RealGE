const { demand } = require('./demand');

const defaultDesires = {
    food: {
        apples: 2,
        oranges: 2
    }
}

const population = [
    {
        age: 20,
        starving: false,
        food: {
            apples: Math.round(1.009 - 0.011 * this.age + 0.001 * this.age ^ 2 + 0.00006 * this.age ^ 3 - 8.834 * this.age ^ 4),
            oranges: Math.round(1.009 - 0.011 * this.age + 0.001 * this.age ^ 2 + 0.00006 * this.age ^ 3 - 8.834 * this.age ^ 4)
        },
        dislikes: ['oranges']
    },
    {
        starving: false,
        age: 20,
        food: {
        },
    },
]



console.log(demand(population));

