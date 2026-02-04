import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent {

  emp: any = {
    id: "",
    name: "",
    email: "",
    mobile: "",
    gender: null,
    department: null,
    designation: null,
    dateOfJoining: "",
    salary: "",
    statusActive: '',
    
  }

  maxDate : any = new Date().toISOString().split('T')[0];

  tableArray: any[] = [];

  submit: boolean = false;
  notAllowToDaydate = false;
  id: number = 0;

  onAdd(form: NgForm) {

    if (form.invalid) {
      console.log('invalid form', form.value);
      this.submit = true;

    } else {


       console.log('add, emp id',this.emp.id);
     
       
       

      const index = this.tableArray.findIndex((item: any) => {
        console.log('item id',item.id,'emp id',this.emp.id);
        
        return item.id == this.emp.id;
      });
       console.log('index',index)
      if (index > -1) {
        this.tableArray[index] = { id: this.id, ...form.value };
        form.resetForm();
        console.log('table', this.tableArray);

      } else {
        this.emp.id = this.id++;
        console.log('id', this.id);
        this.tableArray.push({ id: this.id, ...form.value });
        console.log('push', this.tableArray);

        this.submit = false;
        form.resetForm();
        this.emp.status = true;

      }

    }
  }

  dateChange() {

    if (this.emp.dateOfJoining == this.maxDate) {
      this.notAllowToDaydate = true;
    } else[
      this.notAllowToDaydate = false
    ]

  }

  status() {



    if (this.emp.statusActive) {
      this.emp.statusInActive = false;
      console.log('active 1', this.emp.statusActive);
      console.log('inactive 1', this.emp.statusInActive);


    } else if (this.emp.statusActive === true) {
      this.emp.statusActive = true;
      this.emp.statusInActive = false;
      console.log('active 2', this.emp.statusActive);
      console.log('inactive 2', this.emp.statusInActive);
    }
  }


  allowOnlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.emp.mobile = input.value;
  }

  onEdit(id: number) {
    const value = this.tableArray.find((item: any) => {
      return item.id === id
    });

    console.log('edit id', value);

    this.emp = {
      id: value.id,
      name: value.name,
      email: value.email,
      mobile: value.mobile,
      gender: value.gender,
      department: value.department,
      designation: value.designation,
      dateOfJoining: value.dateOfJoining,
      salary: value.salary,
      statusActive : value.statusActive
    }
    this.emp.status = true;
   console.log('edit, emp value',this.emp);
   

  }

  onDelete(id: number) {

    const index = this.tableArray.findIndex((item: any) => {
      return item.id === id
    });
    this.tableArray.splice(index, 1);
  }

  onClear(form : NgForm){
     this.submit = false;
        form.resetForm();
        console.log('clear',form.value);
        this.emp.status = true;
        this.tableArray = [];
  }

  onSubmit(){
     if(this.tableArray.length == 0){
         alert('INVALID FORM, NOT SUBMITED')
       }else{
         alert('FORM IS SUCCESSFULLY SEND')
       }
  }

  salary(event : Event){
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace((/[e+,.]/g),'')
  }


}
