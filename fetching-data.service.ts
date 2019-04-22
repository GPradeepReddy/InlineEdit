import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchingDataService {

  constructor(public _http: HttpClient) { }

  getProducts() {
    return this._http.get('app/kendo-grid/products.json')
  }
  getLeftNav() {
    return this._http.get("assets/json/LeftNav.json")
  }
  getMyProducts() {
    return this._http.get('assets/json/products.json')
  }
  getGlobalSearch(){
    return this._http.get('assets/json/globalSearch.json')
  }
  getInlineEdit(){
    return this._http.get('assets/json/InlineEdit.json')
  }
}
