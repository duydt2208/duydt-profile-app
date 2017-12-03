import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ProfessionalInfoComponent } from './main-content/professional-info/professional-info.component';
import { TechnicalInfoComponent } from './main-content/technical-info/technical-info.component';
import { PersonalInfoComponent } from './left-content/personal-info/personal-info.component';
import { InterestComponent } from './main-content/interest/interest.component';

const routes: Routes = [
  { path: '', redirectTo: '/professional', pathMatch: 'full' },
  { path: 'personal', component: ProfessionalInfoComponent },
  { path: 'professional', component: ProfessionalInfoComponent },
  { path: 'technical', component: TechnicalInfoComponent },
  { path: 'interest', component: InterestComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
