import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {ListClientComponent} from "./list-client/list-client.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'list-user', component: ListUserComponent },
    { path: 'list-client', component: ListClientComponent },
    {path : '', component : DashboardComponent}
];

export const routing = RouterModule.forRoot(routes);