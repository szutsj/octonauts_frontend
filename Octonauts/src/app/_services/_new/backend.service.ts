import {Gups} from '../../_models/_lists/gups';
import {ROOT_URL} from '../../constants';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ErrorHandlingService} from '../_old/error-handling.service';
import {Router} from '@angular/router';
import {Octopod} from "../../_models/_mod/octopod";
import {map, share} from "rxjs/operators";
import {PatientList} from "../../_models/_lists/patientList";
import {MedicineStock} from "../../_models/_lists/medicineStock";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  octopodData: Octopod;
  octopodObservable: Observable<Octopod>;
  gupData: Gups;
  gupObservable: Observable<Gups>;
  waitingPatientData: PatientList;
  waitingPatientsObservable: Observable<PatientList>;
  underTreatmentData: PatientList;
  underTreatmentObservable: Observable<PatientList>;
  medicineStockData: MedicineStock;
  medicineStockObservable: Observable<MedicineStock>;


  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService, private router: Router) { }

  refreshGupData() : void {
    this.gupData = null;
    this.gupObservable = null;
  }

  refreshOctopodData(): void{
    this.octopodData = null;
    this.octopodObservable = null;
  }

  refreshWaitingList(): void{
    this.waitingPatientData = null;
    this.waitingPatientsObservable = null;
  }

  refreshUnderTreatmentList(): void{
    this.underTreatmentData = null;
    this.underTreatmentObservable = null;
  }

  refreshMedicineStock(): void{
    this.medicineStockData = null;
    this.medicineStockObservable = null;
  }

  getGupListFromBackend(): Observable<Gups> {
    if (this.gupData) {
      return of(this.gupData);
    } else if (this.gupObservable) {
      return this.gupObservable;
    } else {
      this.gupObservable = this.http.get<Gups>(ROOT_URL + '/octopod/gups')
        .pipe(map(response => this.gupData = response),
          share());
      return this.gupObservable;
    }
  }

  getOctopodFromBackend(): Observable<Octopod> {
    if (this.octopodData) {
      return of(this.octopodData);
    } else if (this.octopodObservable) {
      return this.octopodObservable;
    } else {
      this.http.get<Octopod>(ROOT_URL + '/octopod')
        .pipe(map(response => this.octopodData = response),
          share());
      return this.octopodObservable;
    }
  }

  getWaitingPatientListFromBackend(): Observable<PatientList> {
    if (this.waitingPatientData) {
      return of(this.waitingPatientData);
    } else if (this.waitingPatientsObservable) {
      return this.waitingPatientsObservable;
    } else {
      this.http.get<PatientList>(ROOT_URL + '/octopod/patients/waiting')
        .pipe(map(response => this.waitingPatientData = response),
          share());
      return this.waitingPatientsObservable;
    }
  }

  getUnderTreatmentListFromBackend(): Observable<PatientList> {
    if (this.underTreatmentData) {
      return of(this.underTreatmentData);
    } else if (this.underTreatmentObservable) {
      return this.underTreatmentObservable;
    } else {
      this.http.get<PatientList>(ROOT_URL + '/octopod/patients/underTreatment')
        .pipe(map(response => this.waitingPatientData = response),
          share());
      return this.waitingPatientsObservable;
    }
  }

  getMedicineStockFromBackend(): Observable<MedicineStock> {
    if (this.medicineStockData) {
      return of(this.medicineStockData);
    } else if (this.medicineStockObservable) {
      return this.medicineStockObservable;
    } else {
      this.http.get<MedicineStock>(ROOT_URL + '/octopod/patients/underTreatment')
        .pipe(map(response => this.medicineStockData = response),
          share());
      return this.medicineStockObservable;
    }
  }

}
