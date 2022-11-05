import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonelModel } from 'src/app/entity/models/personel-model';
import { ApiServiceService } from 'src/app/entity/services/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  gEmail: string = '';
  gSifre: string = '';
  kontrol: number = -1;

  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  girisYap() {
    this.apiService.loginKontrol(this.gEmail, this.gSifre).subscribe((result) => {
      if (result == 1){
        this.router.navigate(['/ana-menu']);
      }
      else
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Eksik veya hatalı giriş yaptınız!',
        })
      }
    });
  }

}
