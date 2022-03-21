import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDetail: any
  id: any
  constructor(
    private ps: ProductService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
    if(this.id !== undefined){
      this.ps.getOneProduct(this.id).subscribe(data => {
        this.productDetail = data
      })
    }else{
      this.productDetail = {
        name: "",
        price: 0,
        desc: ""
      }
    }
    
  }

  onSubmit(obj: any) {
    if(obj.id != undefined){
      this.ps.update(obj).subscribe(data => {
        alert("Cập nhật dữ liệu thành công!")
        this.route.navigate(['product'])
      })
    }else{
      this.ps.addProduct(obj).subscribe(data => {
        alert("Thêm mới dữ liệu thành công!")
        this.route.navigate(['product'])
      })
    }
    
  }
}
