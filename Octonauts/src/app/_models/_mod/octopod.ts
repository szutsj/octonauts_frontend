import {Crew} from "../_lists/crew";
import {Patient_list} from "../_lists/patient_list";
import {Medicine_stock} from "../_lists/medicine_stock";
import {User_and_points} from "./user_and_points";
import {Gup_list} from "../_lists/gup_list";

export class Octopod{
  crew: Crew;
  gups: Gup_list;
  patients: Patient_list;
  medicines: Medicine_stock;
  user_and_point: User_and_points;


}
