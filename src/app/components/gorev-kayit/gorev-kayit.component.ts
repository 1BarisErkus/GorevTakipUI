import { DatePipe, formatDate, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { window } from 'rxjs';
import { GorevModel } from 'src/app/entity/models/gorev-model';
import { PersonelModel } from 'src/app/entity/models/personel-model';
import { ApiServiceService } from 'src/app/entity/services/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gorev-kayit',
  templateUrl: './gorev-kayit.component.html',
  styleUrls: ['./gorev-kayit.component.css']
})
export class GorevKayitComponent implements OnInit {

  kayitRef: number = 0;
  gorev = new GorevModel();
  personel: PersonelModel[] = [];


  fgKayit = new FormGroup(
    {
      kayit_tarihi: new FormControl(''),
      son_degisiklik_tarihi: new FormControl(''),
      degisiklik_gecmisi: new FormControl(''),
      kimden_id: new FormControl(''),
      kime_id: new FormControl(''),
      konu: new FormControl(''),
      aciklama: new FormControl(''),
      grup: new FormControl(''),
      durum: new FormControl(''),
      son_tarih: new FormControl(''),
      son_tarih_saati: new FormControl(''),
      yapilma_tarihi: new FormControl(''),
      yapilma_tarihi_saati: new FormControl('')
    }
  );

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.kayitRef = Number(localStorage.getItem('gorevId'));
    this.gorev = JSON.parse(localStorage.getItem('gorev') || '{}')
    localStorage.removeItem('gorevId')
    if (this.kayitRef > 0) {
      this.getGorev();
    }
    this.getPersonel();
  }

  get controls(): FormGroup["controls"] {
    return this.fgKayit.controls;
  }

  modeltoForm() {

    this.fgKayit.controls.degisiklik_gecmisi.setValue(this.gorev.degisiklik_gecmisi);
    this.fgKayit.controls.kimden_id.setValue(this.gorev.kimden_id.toString());
    this.fgKayit.controls.kime_id.setValue(this.gorev.kime_id.toString());
    this.fgKayit.controls.konu.setValue(this.gorev.konu);
    this.fgKayit.controls.aciklama.setValue(this.gorev.aciklama || '');
    this.fgKayit.controls.grup.setValue(this.gorev.grup || '');
    this.fgKayit.controls.durum.setValue(this.gorev.durum.toString());

    this.fgKayit.controls.son_tarih.setValue(this.gorev.son_tarih!.toString().substring(0,10));
    this.fgKayit.controls.son_tarih_saati.setValue(this.gorev.son_tarih!.toString().substring(11,16));
    this.fgKayit.controls.yapilma_tarihi.setValue(this.gorev.yapilma_tarihi!.toString().substring(0,10));
    this.fgKayit.controls.yapilma_tarihi_saati.setValue(this.gorev.yapilma_tarihi!.toString().substring(11,16));
  }

  formtoModel() {
    
    this.gorev.degisiklik_gecmisi = this.fgKayit.controls.degisiklik_gecmisi.value || '';
    this.gorev.kimden_id = Number(this.fgKayit.controls.kimden_id.value);
    this.gorev.kime_id = Number(this.fgKayit.controls.kime_id.value);
    this.gorev.konu = this.fgKayit.controls.konu.value || '';
    this.gorev.aciklama = this.fgKayit.controls.aciklama.value || '';
    this.gorev.grup = this.fgKayit.controls.grup.value!;
    this.gorev.durum = Number(this.fgKayit.controls.durum.value);

    this.gorev.son_tarih = this.inputControlToModel(this.fgKayit.controls.son_tarih.value, this.fgKayit.controls.son_tarih_saati.value);
    this.gorev.yapilma_tarihi = this.inputControlToModel(this.fgKayit.controls.yapilma_tarihi.value, this.fgKayit.controls.yapilma_tarihi_saati.value);
  }

  inputControlToModel(tarihUnput: any, saatInput: any): any {
    if (typeof(tarihUnput) == 'string'){
      let str1: string = '';
      //return new Date(this.fgKayit.controls.kayit_tarihi.value + 'T' + this.fgKayit.controls.kayit_saati.value)
      str1 = tarihUnput;
      if (saatInput != null) str1 += 'T' + saatInput;
      return str1; //this.fgKayit.controls.kayit_tarihi.value + 'T' + this.fgKayit.controls.kayit_saati.value;
    }
    else{
      if (tarihUnput == null) return null;
    }
  }

  getGorev() {
    this.apiService.getAllGorev(this.kayitRef)
      .subscribe((result) => {
        this.gorev = result[0];
        this.modeltoForm();
      });
  }

  add_update_gorev() {
    this.formtoModel();
    //return;
    this.apiService.add_update_Gorev(this.gorev)
      .subscribe((res) => {
        console.log(res);
      });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Kayıt Düzenlendi',
      showConfirmButton: false,
      timer: 1500
    })
  }

  getPersonel() {
    this.apiService.getAllPersonel()
      .subscribe((result: PersonelModel[]) => {
        this.personel = result;
      })
  }
}