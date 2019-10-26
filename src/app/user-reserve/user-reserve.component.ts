import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reserve',
  templateUrl: './user-reserve.component.html',
  styleUrls: ['./user-reserve.component.css']
})
export class UserReserveComponent implements OnInit {
  slotReserveForm: FormGroup;
  loading = false;
  carTypeSelected = false;
  submitted = false;
  floors: number[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.slotReserveForm = this.formBuilder.group({
      carId: ['', Validators.required],
      floorNo: ['', Validators.required],
      slotNo: [''],
      driverName: ['', Validators.required],
      parkingDate: ['', Validators.required],
      parkingTime: ['', Validators.required],
      fromPlace: ['', Validators.required],
      noOfMembers: ['', Validators.required],
      typeOfCar: ['', Validators.required],

    });
  }
  onVehicleChange(event) {
    console.log(event.target.value);
    const carType = event.target.value;
    if (carType === 'Sedan') {
      this.floors = [1, 2, 3];
    } else
      if (carType === 'SUV') {
        this.floors = [4, 5, 6];
      } else
        if (carType === 'Hatchback') {
          this.floors = [7, 8, 9];
        }
    this.carTypeSelected = true;
  }
  onSubmit() {
    this.submitted = true;

    if (this.slotReserveForm.invalid) {
      return;
    }

  }

}
