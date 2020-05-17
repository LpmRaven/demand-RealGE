



const doIWantFood = (person, foodType) => {
    if (person.starving) {
        return 5;
    }
    console.log('person', person.food.apples);

    return person.food[foodType];
}



const demand = (population) => {
    return population.reduce((demand, person) => {

        return {
            apples: demand.apples + doIWantFood(person, 'apples'),
            oranges: demand.oranges + doIWantFood(person, 'oranges'),
        }
    })
}

module.exports = {
    demand
}