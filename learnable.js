// CLASSIFICATION OF KINGDOM ANIMALIA

class Animal {
  constructor() {
    if (this.constructor == Animal) {
      throw new Error("Animal can only be implemented");
    }
  }
  animal() {
    console.log(
      "I am a living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli."
    );
  }
}

class createAnimalProfile extends Animal {
  constructor(animalClass, animalName, hasBackbone, animalBloodType) {
    super();
    this.animalClass = animalClass;
    this.animalName = animalName;
    this.hasBackbone = hasBackbone;
    this.animalBloodType = animalBloodType;
  }

  #animalProfile() {
    console.log(
      this.animalName +
        " is part of the animal class " +
        this.animalClass.toUpperCase() +
        " and is a " +
        this.animalBloodType +
        " animal with" +
        (this.hasBackbone == true ? " backbone." : "out backbone.")
    );
  }

  accessProfile() {
    this.#animalProfile();
  }
}

const butterfly = new createAnimalProfile(
  "Arthropoda",
  "Butterfly",
  false,
  "Cold-blooded"
);

const fish = new createAnimalProfile("Fish", "Fish", true, "Cold-blooded");

const frog = new createAnimalProfile("Amphibia", "Frog", true, "Cold-blooded");

const turtle = new createAnimalProfile(
  "Reptile",
  "Turtle",
  true,
  "Cold-blooded"
);

const bird = new createAnimalProfile("AVES", "Bird", true, "Warm-blooded");

const cat = new createAnimalProfile("Mammals", "Cat", true, "Warm-blooded");
