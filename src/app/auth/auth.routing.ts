import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrerComponent } from './registrer/registrer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'registrer', component: RegistrerComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
