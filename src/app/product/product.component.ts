import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

type PRODUCT_TYPE = {
  id: Number,
  name: String
  price: Number,
  desc: String
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arrProduct: any
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getProduct().subscribe(data => {
      this.arrProduct = data
    })
  }
  objProduct: any = {
    id: '',
    name: '',
    price: 0,
    desc: ''
  }

  products = [
    {
      id: 1,
      name: 'iphone 13',
      price: 22500000,
      desc: 'Chính hãng'
    },
    {
      id: 2,
      name: 'Oppo Reno 2',
      price: 15000000,
      desc: 'Chính hãng'
    },
    {
      id: 3,
      name: 'Samsung Galaxy Note 20',
      price: 10000000,
      desc: 'Chính hãng'
    }
  ]
  update(data: any) {
    this.objProduct = {
      ...data,
      price: Number(data.price)
    }
  }
  onSubmit(product: any) {
    if (!this.onValidate(this.objProduct)) {
      alert("Bạn phải nhập đầy đủ dữ liệu")
      return;
    }
    if (this.objProduct.id === "") {
      //Thêm mới
      this.objProduct = {
        ...this.objProduct,
        id: Number(this.products.length + 1)
      }
      this.products.push(this.objProduct)
    } else {
      //Cập nhật
      const index = this.products.findIndex(item => item.id === this.objProduct.id)
      this.products[index] = this.objProduct
    }
    this.objProduct = {
      id: '',
      name: '',
      price: 0,
      desc: ''
    }
  }

  onValidate(obj: any) {
    if (!obj.name || !obj.price || !obj.desc) {
      return false
    }
    return true;
  }

}
