import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  student = {
    name: 'Đặng Đình Khải',
    age: 19,
    phone: '0962597441',
    email: 'khaiddph15544@fpt.edu.vn',
    img: "https://www.w3schools.com/howto/img_avatar.png"
  }

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

  users = [
    {
      name: "Đặng Khải",
      weight: 68,
      height: 172,
      img: "https://www.w3schools.com/howto/img_avatar.png",
      id: 1
    },
    {
      name: "Nguyễn Thị H",
      weight: 29,
      height: 160,
      img: "https://www.w3schools.com/howto/img_avatar.png",
      id: 2
    },
    {
      name: "Phạm Văn V",
      weight: 65,
      height: 165,
      img: "https://www.w3schools.com/howto/img_avatar.png",
      id: 3
    },
    {
      name: "Trần Anh N",
      weight: 27,
      height: 170,
      img: "https://www.w3schools.com/howto/img_avatar.png",
      id: 4
    },
  ]

  filterStudent = [
    ...this.students
  ]
  remove(id : number){
      this.filterStudent = this.filterStudent.filter(student => student.id !== id)
  }

  searchVal = ""
  onSearch(event: any){
    this.searchVal = event.target.value
    // this.searchVal.toLocaleLowerCase()
    this.filterStudent = this.students.filter(student => {
      const usernameLowerCase = student.name.toLowerCase()
      const searchValLowerCase = this.searchVal.toLowerCase().trim()
      return usernameLowerCase.indexOf(searchValLowerCase) !== -1
    })
  }

  addForm(data: any){
    const id: number = this.students.length
    const name: string = data.name
    const age: number = data.age
    const phone: string = data.phone
    const email: string = data.email
    const img: string = data.img
    let objData = {
      id,
      name,
      age,
      phone,
      email,
      img,
    }

    this.students.push(objData)
  }
}