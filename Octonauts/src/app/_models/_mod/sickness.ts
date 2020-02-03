import {MedicineType} from '../_enum/enums_medicinetype';
import {SicknessType} from '../_enum/enums_sicknesstype';

export class Sickness {
  level: number;
  type : SicknessType;
  medicinesNeeded: MedicineType[];

  constructor() {}
}
