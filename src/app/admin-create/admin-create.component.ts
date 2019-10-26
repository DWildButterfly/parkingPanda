import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Slot } from '../slot';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
  isNew: boolean;
  slots: Slot;
  parkingSlotForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private slotservice: DataService, private route: Router
    , private actRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.parkingSlotForm = this.formBuilder.group({
    //   slotNo: ['', Validators.required],
    //   floorNo: ['', Validators.required],
    //   block: ['', Validators.required],
    //   typeOfCar: ['', Validators.required],
    //   parkingFee: ['', Validators.required],
    // });
    this.actRoute.params.subscribe(
      (params) => {
        let id = params.sno;
        if (id) {
          this.isNew = false;
          this.slotservice.getById(id).subscribe(
            (data) => { this.slots = data; }
          );
        }
        else {
          this.isNew = true;
          this.slots = new Slot();
        }
      }

    );
  }
  addSlot() {
    alert("entered");
    // const slot = new Slot();
    // slot.sno = this.parkingSlotForm.get('sno').value;
    // slot.floor = this.parkingSlotForm.get('floor').value;
    // slot.block = this.parkingSlotForm.get('block').value;
    // slot.toc = this.parkingSlotForm.get('toc').value;
    // slot.pf = this.parkingSlotForm.get('pf').value;
    // this.slotservice.addSlots(slot);
    // this.route.navigate(['/admin-view']);
    if(this.isNew)
    {
      this.slotservice.addSlots(this.slots).subscribe(
        ()=>{}
      );
    }
    else{
      this.slotservice.updatePlot(this.slots).subscribe(
        ()=>{}
      );
    }
  
  this.route.navigateByUrl("/admin-view");
  }

}
