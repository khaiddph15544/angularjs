import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component:  HomeComponent},
      { path: "product", component: ProductComponent },
      { path: "product/create", component: ProductFormComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "product/:id/edit", component: ProductFormComponent },
      { path: "student", component: StudentComponent }

    ]
  },

  { path: "app", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}