import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NavigationRegisterComponent } from './Registraion/navigation-register/navigation-register.component';

const Router: Routes = [
  // (Lazy Loading ) Laod Module Only when Access authentiction in Url !!
  {
    path: 'authentcation',
    loadChildren: () =>
      import('./moduls/Authentcation/authentcation.module').then(
        (m) => m.AuthentcationModule
      ),
  },
  { path: 'registration',
  component: NavigationRegisterComponent
},
  {
    path: 'registration',
    loadChildren: () =>
      import('./moduls/registraion/registraion.module').then(
        (m) => m.RegistraionModule
      ),
  },
  {path:'home',component:HomePageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () =>
      import('./moduls/home/home.module').then(
        (m) => m.HomeModule
      ),
  },

  {path:'**',component:NotFoundComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, // To Use Pipes And Directives & Commmon Features in app Orgnization Wise
    RouterModule.forRoot(Router),
  ],
  exports: [
    HttpClientModule, // Import Module For Help Any Server Requsts
    RouterModule,
  ],
})
export class AppRoutingModule {}
