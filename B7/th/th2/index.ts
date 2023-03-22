let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilomitersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

const daysToMars = getDaysToLocation(kilomitersToMars);

console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);

function getDaysToLocation(kilometersAway: number): number {
  let milesAway: number = kilometersAway * milesPerKilometer;
  let hours: number = milesAway / speedMph;
  return hours / 24;
}
export class SpaceLocation {
  kilometersAway: number;
  name: string;

  constructor(name: string, kilometersAway: number) {
     this.name = name;
     this.kilometersAway = kilometersAway;
  }
}

class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
     this.name = name;
     this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
     let milesAway: number = kilometersAway * this.milesPerKilometer;
     let hours: number = milesAway / this.speedMph;
     return hours / 24;
  }

  printDaysToLocation(location: SpaceLocation) {
     console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
  }
}