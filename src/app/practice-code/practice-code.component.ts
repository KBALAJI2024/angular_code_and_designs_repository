import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-code',
  templateUrl: './practice-code.component.html',
  styleUrls: ['./practice-code.component.css']
})
export class PracticeCodeComponent {


array: any[] = [
  { id: 1, name: 'balaji' },
  { id: 2, name: 'bala' },
  { id: 3, name: 'balu' },
  { id: 4, name: 'harish' },

  { id: 5, name: 'arun' },
  { id: 6, name: 'karthik' },
  { id: 7, name: 'vijay' },
  { id: 8, name: 'suresh' },
  { id: 9, name: 'ramesh' },
  { id: 10, name: 'mahesh' },

  { id: 11, name: 'prakash' },
  { id: 12, name: 'santhosh' },
  { id: 13, name: 'dinesh' },
  { id: 14, name: 'lokesh' },
  { id: 15, name: 'rajesh' },

  { id: 16, name: 'ganesh' },
  { id: 17, name: 'saravanan' },
  { id: 18, name: 'naveen' },
  { id: 19, name: 'kumar' },
  { id: 20, name: 'deepak' },

  { id: 21, name: 'ashok' },
  { id: 22, name: 'anand' },
  { id: 23, name: 'manoj' },
  { id: 24, name: 'selva' },
  { id: 25, name: 'senthil' },

  { id: 26, name: 'raghu' },
  { id: 27, name: 'madhan' },
  { id: 28, name: 'ajith' },
  { id: 29, name: 'surya' },
  { id: 30, name: 'vignesh' },

  { id: 31, name: 'akash' },
  { id: 32, name: 'nithish' },
  { id: 33, name: 'sathish' },
  { id: 34, name: 'pradeep' }
];

page =1;
pageSize =5;

getData(){
  const start = (this.page - 1) * this.pageSize;
  return this.array.slice(start,start + this.pageSize);
}

increment(){
  this.page++;
  console.log('inc',this.page);
  
}

decrement(){
  if(this.page > 1){
    this.page--;
  }
}

pageSizeMethod(value : any ){
  console.log('pageSizeMethod',value);
  if(value == 5){
     this.pageSize = 5
  }else if(value == 10){
     this.pageSize = 10
  }else if(value == 25){
     this.pageSize = 25;
  }
  
}

  searchValue : any [] = [];
  id : number = 0;

  search(event : any){
    const searchInputValue = event.target.value;
    console.log('search value',searchInputValue);
    this.searchValue = this.array.filter((item : any)=>{
      return item.name == searchInputValue 
    });
    console.log("filter value",this.searchValue);
  }

  add(){
     this.id = this.id + 1;
     console.log('button',this.id);
     
  }
}
