import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  objData: any = {
    id: '',
    name: '',
    age: '',
    phone: '',
    email: '',
    img: ''
  }
  // arrStudent : Array<any> = []
  
  // constructor(private http: HttpClient){}
  // ngOnInit(): void {
  //   this.http.get<any>("http://localhost:3000/students")
  //   .subscribe(data => {
  //     this.arrStudent = data
  //     this.filterStudent = [...this.arrStudent]
  //   })
  // }
  title = 'my-project';
  students = [
    {
      id: 1,
      name: 'Đặng Đình Khải',
      age: 19,
      phone: '0962597441',
      email: 'khaiddph15544@fpt.edu.vn',
      img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
      id: 2,
      name: 'Nguyễn Văn H',
      age: 22,
      phone: '0962597441',
      email: 'khaiddph15544@fpt.edu.vn',
      img: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
      id: 3,
      name: 'Trần Văn S',
      age: 19,
      phone: '0962597441',
      email: 'khaiddph15544@fpt.edu.vn',
      img: "https://www.w3schools.com/howto/img_avatar.png"
    }
  ]
  filterStudent = [...this.students]

  remove(id: number) {
    // this.filterStudent = this.filterStudent.filter(student => student.id !== id)
    // this.http.delete("http://localhost:3000/students/"+id)
    // .subscribe(data => {
    //   this.filterStudent = this.arrStudent.filter(item => item.id !== id)
    // })
    this.filterStudent = this.filterStudent.filter(item => item.id !== id)
  }

  searchVal = ""
  onSearch(event: any) {
    console.log(this.filterStudent)
    this.searchVal = event.target.value
    // this.searchVal.toLocaleLowerCase()
    this.filterStudent = this.students.filter(student => {
      const usernameLowerCase = student.name.toLowerCase()
      const searchValLowerCase = this.searchVal.toLowerCase().trim()
      return usernameLowerCase.indexOf(searchValLowerCase) !== -1
    })
  }

  update(data: any) {
     (<HTMLInputElement>document.getElementById("image")).src = data.img
     this.objData = { 
      ...data,
      age: Number(data.age)
     }
  }

  submitForm() {
    let obj = {
      ...this.objData,
      id: Number(this.students.length + 1)
    }
    if (!this.onValidate(obj)) {
        alert("Bạn phải nhập đầy đủ dữ liệu")
        return;  
    }
    if(this.objData.id == ""){
      // this.http.post("http://localhost:3000/students/", obj)
      // .subscribe(data => {
      //   this.students.push(obj)
      // })
      this.students.push(obj)
    }else{
      obj = {
        ...this.objData,
        id: Number(this.objData.id)
      }
      // this.http.put<any>("http://localhost:3000/students/"+obj.id, obj)
      // .subscribe(data => {
      //   const index = this.students.findIndex(item => item.id == data.id);
      //   // this.students[this.objData.id - 1] = data
      //   this.students[index] = data
      // })
      this.students[this.objData.id - 1] = this.objData
    }
    // this.filterStudent = this.students
    // this.filterStudent = [...this.arrStudent];
    this.filterStudent = [...this.students]
    this.objData = {
      id: '',
      name: '',
      age: '',
      phone: '',
      email: '',
      img: ""
    }
  }


  onValidate(obj: any) {
    if (!obj.name || !obj.age || !obj.phone || !obj.email || !obj.img) {
      return false
    }
    return true;
  }

}
