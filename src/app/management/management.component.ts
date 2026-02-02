import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {

  user: any = {
    id: 0,
    name: "",
    age: "",
    class: "",
    section: "",
    gender: "",
    fatherName: "",
    phoneNumber: "",
    feesPaid: false,
    activeStatus: true

  }

  classArray: any = [
    { id: 1, class: 10 },
    { id: 2, class: 11 },
    { id: 3, class: 12 }
  ];

  sectionArray: any = [
    { id: 1, sec: "A" },
    { id: 2, sec: "B" },
    { id: 3, sec: "c" }
  ];

  genderArray: any = [
    { id: 1, gen: "male" },
    { id: 2, gen: "female" }
  ];

  submit: boolean = false;
  tableArray: any[] = [];
  editID: any = '';
  autoId: any = 0;
  addOrUpdate(form: NgForm) {
    this.submit = true;
    if (form.invalid) {
      console.log('invalid');
      alert("INVALID FORM , PLEASE FILL ALL FIELDS")
    } else {

      const index = this.tableArray.findIndex((item: any) => {
        return item.id == this.editID
      });



      if (index > -1) {
        console.log("add id", this.editID, index);
        this.tableArray[index] = {
          name: form.value.name,
          age: form.value.age,
          class: form.value.class,
          section: form.value.section,
          gender: form.value.gender,
          fatherName: form.value.fatherName,
          phoneNumber: form.value.phoneNumber,
          feesPaid: this.user.feesPaid,        // ✅ explicitly set
          activeStatus: this.user.activeStatus // ✅ explicitly set
        };

        form.resetForm();
        this.user = {
          id: 0,
          name: "",
          age: "",
          class: "",
          section: "",
          gender: "",
          fatherName: "",
          phoneNumber: "",
          feesPaid: false,
          activeStatus: false
        }
        this.submit = false;
      } else {
        this.autoId = this.tableArray.length > 0
          ? Math.max(...this.tableArray.map((item: any) => item.id)) + 1
          : 1;
        console.log('autoId', this.autoId);

        this.tableArray.push({ id: this.autoId, ...form.value });
        console.log('form is  valid ', this.tableArray);

        //  remove all values
        form.resetForm();
        this.user = {
          id: 0,
          name: "",
          age: "",
          class: "",
          section: "",
          gender: "",
          fatherName: "",
          phoneNumber: "",
          feesPaid: false,
          activeStatus: false

        }
        this.submit = false;
      }

    }
  }

  onEdit(id: number) {
    this.editID = id;
    const Value = this.tableArray.find((item: any) => {
      return item.id == this.editID
    })



    this.user = {
      name: Value.name,
      age: Value.age,
      class: Value.class,
      section: Value.section,
      gender: Value.gender,
      fatherName: Value.fatherName,
      phoneNumber: Value.phoneNumber,
      feesPaid: Value.feesPaid,
      activeStatus: Value.activeStatus
    }
    console.log("user", "id", this.editID, this.user);
  }

  onDelete() {
    const index = this.tableArray.findIndex((item: any) => {
      return item.id == this.editID
    });
    this.tableArray.splice(index, 1);
  }

  OnClear(form: NgForm) {
    this.tableArray= [];
        this.user = {
          id: 0,
          name: "",
          age: "",
          class: "",
          section: "",
          gender: "",
          fatherName: "",
          phoneNumber: "",
          feesPaid: false,
          activeStatus: false
        }
        this.submit = false;
  }

  OnSubmit(form: NgForm) {
    if (this.tableArray.length != 0) {
      alert("form is submitted");
    } else {
      alert("form is not submitted")
    }
  }


}
