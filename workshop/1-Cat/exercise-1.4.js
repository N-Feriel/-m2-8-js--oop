// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
    // Add code here
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }


    sleep = (hours) => {
        this.happiness += 0.5 * hours;
        this.tiredness -= 5 * hours;
    }
    eat = (kibbles) => {
        this.happiness += 0.2 * kibbles;
        this.hunger -= kibbles / 5;
    }

    play = (minutes) => {
        this.happiness += 0.7 * minutes;
        this.loneliness -= 3 * minutes;

    }

    wait = (minutes) => {

        this.tiredness += minutes * .4;
        this.hunger += minutes * .3;;
        this.loneliness += minutes * .2;;
        this.happiness += minutes * .4;;
    }

}


let boots = new Cat('Minou', 'Simaese');

boots.sleep(8);
boots.eat(20);
boots.play(30);
boots.wait(20)


console.log(boots);