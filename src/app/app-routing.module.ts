import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnamenuComponent } from './components/anamenu/anamenu.component';
import { GorevKayitComponent } from './components/gorev-kayit/gorev-kayit.component';
import { GorevListeComponent } from './components/gorev-liste/gorev-liste.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path:'ana-menu',
    component:AnamenuComponent,
    children:
    [
      {
        path:'',
        component: GorevListeComponent
      },
      {
        path:'gorev-liste',
        component: GorevListeComponent
      },
      {
        path: 'gorev-kayit',
        component: GorevKayitComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
