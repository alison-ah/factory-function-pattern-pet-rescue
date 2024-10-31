const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, //Scale from 1 (not tired) to 10 (most tired)
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        },
        play: function () {
            if (this.isTired === 10) {
                console.log(`Too tired to play.`); 
                this.sleep();
            } else {
                console.log('Yay! ${this.name} loves to play!');
                this.isTired += 1;
            }
        }
    };

return pet;

};