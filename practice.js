class Transport {
    constructor(passengerName) {
        this.passengerName = passengerName;
    }

    calculateFare() {
        console.log(`${this.passengerName} General Fair...`);
    }
}

class Bus extends Transport {
    constructor(passengerName, busFare){
        super(passengerName);
        this.busFare = busFare;
        
    }

    calculateFare() {
        console.log(`${this.name}'s bus fair : ${this.busFare}`)
    }
}

class Taxi extends Transport {
    constructor(passengerName, baseFare, distance, kilometer){
    super(passengerName);
    this.baseFare = baseFare;
    this.distance = distance;
    this.kilometer = kilometer;
    }

    calculateFare() {
        const fare = this.baseFare + (this.distance * this.kilometer);
        console.log(`${this.passengerName}'s taxi fair: ${fare}`)
    }

}

class Tricycle extends Transport {
    constructor(passengerName,distance){
    super(passengerName);
    this.distance = distance;
    }

    calculateFare() {
        const firstKilometer = 20;
        const additionalKilometer = 5;


        const plete = 
        console.log(`${this.passengerName}'s tricycle fair: ${plete}`)
    }
}

const bus = new Bus ("John", 15);
const taxi = new Taxi ("Maria", 50 , 5 , 13);
const tricycle = new Tricycle ("Pedro", 20 , 4)

const transports = [bus, taxi, tricycle];
for (const transport of transports) {
    transport.calculateFare();
}



