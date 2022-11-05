import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GorevModel } from 'src/app/entity/models/gorev-model';
import { ApiServiceService } from 'src/app/entity/services/api-service.service';

@Component({
  selector: 'app-gorev-liste',
  templateUrl: './gorev-liste.component.html',
  styleUrls: ['./gorev-liste.component.css']
})
export class GorevListeComponent implements OnInit {

  gorevListe: GorevModel[] = [];
  inputArama: string = '';

  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllGorev();
  }

  getAllGorev() {
    this.apiService.getAllGorev(0)
      .subscribe((result) => {
        this.gorevListe = result;
      });
  }

  kayitDegistir(gorevId: number) {
    localStorage.setItem('gorevId', gorevId.toString());
    this.router.navigate(['/ana-menu/gorev-kayit']);
  }

  kayitSil(gorevId: number) {
    this.apiService.removeGorev(gorevId)
      .subscribe();
    window.location.reload();
  }

  kayitAra(konu: string) {
    this.apiService.searchKayit(konu)
      .subscribe((result) => {
        this.gorevListe = result;
      });
  }

}
