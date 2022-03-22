import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arrProduct: any
  constructor(
    private ps: ProductService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.ps.getProduct().subscribe(data => {
      this.arrProduct = data
    })
  }

  onValidate(obj: any) {
    if (!obj.name || !obj.price || !obj.desc) {
      return false
    }
    return true;
  }
  remove(id: any) {
    this.ps.delete(id).subscribe(data => {
      alert("Xóa dữ liệu thành công!")
      this.route.navigate(['product'])
    })
  }
}
