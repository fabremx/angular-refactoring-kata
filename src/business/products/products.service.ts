import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendProductsData } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<BackendProductsData> {
    return this.http.get<BackendProductsData>('../../assets/data/products.json')
  }
}
