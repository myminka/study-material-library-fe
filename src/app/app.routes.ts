import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { SignupComponent } from './pages/general/signup/signup.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContractComponent } from './pages/general/contract/contract.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { StudyMaterialComponent } from './pages/general/study-material/study-material.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},

    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},

    {path: 'about', component: AboutComponent},
    {path: 'contract', component: ContractComponent},
    {path: 'materials', component: StudyMaterialComponent},

    {path: '**', component: NotFoundComponent}
];
