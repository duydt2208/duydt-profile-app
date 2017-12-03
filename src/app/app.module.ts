import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from 'ng2-redux';


import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './left-content/personal-info/personal-info.component';
import { SkillComponent } from './left-content/personal-info/skill/skill.component';
import { ExpertiseComponent } from './left-content/personal-info/expertise/expertise.component';
import { ContactComponent } from './left-content/personal-info/contact/contact.component';
import { AboutMeComponent } from './left-content/personal-info/about-me/about-me.component';
import { ProfessionalInfoComponent } from './main-content/professional-info/professional-info.component';
import { ExperienceComponent } from './main-content/professional-info/experience/experience.component';
import { TechnicalInfoComponent } from './main-content/technical-info/technical-info.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainContentWrapperComponent } from './main-content/main-content-wrapper/main-content-wrapper.component';
import { InterestComponent } from './main-content/interest/interest.component';
import { InterestService } from './service/interest.service';
import { IAppState, INITIAL_STATE, rootReducer } from './store';


@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SkillComponent,
    ExpertiseComponent,
    ContactComponent,
    AboutMeComponent,
    ProfessionalInfoComponent,
    ExperienceComponent,
    TechnicalInfoComponent,
    MainContentWrapperComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    InterestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
