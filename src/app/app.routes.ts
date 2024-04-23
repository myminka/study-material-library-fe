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

    {
        path: 'login', component: LoginComponent,
        loadChildren: () => import('./pages/general/login/login.module')
            .then(mod => mod.LoginModule)
    },
    {
        path: 'signup', component: SignupComponent,
        loadChildren: () => import('./pages/general/signup/signup.module')
            .then(mod => mod.SignupModule)
    },
    {
        path: 'contract', component: ContractComponent,
        loadChildren: () => import('./pages/general/contract/contract.module')
            .then(mod => mod.ContractModule)
    },
    {
        path: 'materials', component: StudyMaterialComponent,
        loadChildren: () => import('./pages/general/study-material/study-material.module')
            .then(mod => mod.StudyMaterialModule)
    },

    {path: 'about', component: AboutComponent},

    {path: '**', component: NotFoundComponent}
];
