import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { GorevModel } from '../models/gorev-model';
import { environment } from 'src/environments/environment';
import { PersonelModel } from '../models/personel-model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  //apiUrl = 'http://localhost:50396/Gorev';

  constructor(
    private http: HttpClient
  ) { }

  getAllGorev(ref_id: number) {
    return this.http.get<GorevModel[]>(environment.apiUrl + '/liste?id=' + ref_id.toString());
  }

  removeGorev(ref_id: number) {
    return this.http.delete(environment.apiUrl + '/' + ref_id);
  }

  add_update_Gorev(gorev: GorevModel) {
    if (gorev.ref_id > 0)
      return this.http.put(environment.apiUrl, gorev);
    else
      return this.http.post(environment.apiUrl, gorev)
  }

  searchKayit(konu: string) {
    return this.http.get<GorevModel[]>(environment.apiUrl + '/ara?gelenKonu=' + konu)
  }

  loginKontrol(email: string, sifre: string) {
    return this.http.get<number>('http://localhost:5132/Personel' + '/loginControl?email=' + email + '&sifre=' + sifre)
  }

  getAllPersonel(){
    return this.http.get<PersonelModel[]>('http://localhost:5132/Personel/liste')
  }


}
