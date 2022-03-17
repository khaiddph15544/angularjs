import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
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
      age: 19,
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

  objData: any = {
    id: '',
    name: '',
    age: 0,
    phone: '',
    email: '',
    old_img: '',
    img: ''
  }

  filterStudent = [
    ...this.students,
  ]
  remove(id: number) {
    this.filterStudent = this.filterStudent.filter(student => student.id !== id)
  }

  searchVal = ""
  onSearch(event: any) {
    this.searchVal = event.target.value
    // this.searchVal.toLocaleLowerCase()
    this.filterStudent = this.filterStudent.filter(student => {
      const usernameLowerCase = student.name.toLowerCase()
      const searchValLowerCase = this.searchVal.toLowerCase().trim()
      return usernameLowerCase.indexOf(searchValLowerCase) !== -1
    })
  }

  update(data: any) {
    this.objData = { ...data }
    console.log(this.objData)
  }

  submitForm(data: any) {
    console.log(this.objData)
    // let objData = {
    //   id: Number(this.students.length + 1),
    //   ...data
    // }
    // if (!this.onValidate(objData)) {
    //   alert("Bạn phải nhập đầy đủ dữ liệu")
    //   return;  
    // }
    // this.students.push(objData)
    // this.filterStudent = this.students;
    // this.objData = {
    //   id: '',
    //   name: '',
    //   age: 0,
    //   phone: '',
    //   email: '',
    //   img: ""
    // }
  }


  onValidate(obj: any) {
    if (!obj.name || !obj.age || !obj.phone || !obj.email || !obj.img) {
      return false
    }
    return true;
  }
}