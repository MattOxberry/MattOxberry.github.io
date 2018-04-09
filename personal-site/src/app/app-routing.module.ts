import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './aboutme.component';
import { InterestsComponent } from './interests.component';

const routes: Routes = [
    { path: 'about-me', component: AboutMeComponent },
    { path: 'interests', component: InterestsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})
export class AppRoutingModule {}