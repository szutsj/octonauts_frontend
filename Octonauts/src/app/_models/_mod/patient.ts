import {AnimalType} from "../_enum/enums_animaltype";
import {Sickness} from "./sickness";

export class Patient {
  id : number;
  pointsGivenForCure : number;
  type: AnimalType;
  sicknes: Sickness;
  treatmentStartedAt: number;
  treatmentFinishedAt: number;



  constructor() {}

}
