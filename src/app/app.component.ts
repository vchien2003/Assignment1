import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: IProduct[] = []
  onHandleRemove(id: any) {
    this.products = this.products.filter(item => item.id !== id);
}
}
