import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

//Import Components
import { AppComponent }  from './app.component';
import { navbarComponent } from './nav/navbar.component';
import { headerComponent } from './header/header.component';
import { sectionComponent } from './sections/section.component';
import { serviceSectionComponent } from './sections/serviceSection.component';
import { teamSectionComponent } from './sections/teamSection.component';
import { pricingSectionComponent } from './sections/pricingSection.component';
import { descSectionComponent } from './sections/descSection.component';
import { footerComponent } from './footer/footer.component';
import { signupModalComponent } from './modal/signupModal.component';
import { userComponent } from './users/user.component';

//Import Directives
import { spacebarDirective } from './directives/spacebar.directive';

//Import Service
import { globalVariables } from './service/globalVariables.service';
import { usersService } from './service/users.service';
import { lookupUsers } from './service/lookupUsers';
import { userAuthenticatedGuard } from './guards/userAuthenticatedGuard';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  RouterModule.forRoot([{
                    path : 'intro',
                    component : headerComponent
                  },{
                    path : 'user',
                    component : userComponent,
                    canActivate:[ userAuthenticatedGuard ]
                  },{
                    path : 'services',
                    component : serviceSectionComponent,
                    canActivate:[ userAuthenticatedGuard ]
                  },{
                    path : 'team',
                    component : teamSectionComponent,
                    canActivate:[ userAuthenticatedGuard ]
                  },{
                    path : 'pricing',
                    component : pricingSectionComponent,
                    canActivate:[ userAuthenticatedGuard ]
                  },{
                    path : '',
                    redirectTo : 'intro',
                    pathMatch: 'full'
                  },{
                    path : '*',
                    redirectTo:'intro',
                    pathMatch:'full'
                  }])
                ],
  declarations: [
  					AppComponent,
  					navbarComponent,
  					headerComponent,
  					sectionComponent,
  					serviceSectionComponent,
  					teamSectionComponent,
  					pricingSectionComponent,
  					descSectionComponent,
  					footerComponent,
  					signupModalComponent,
            userComponent,
            spacebarDirective
  				],
  providers : [
                globalVariables,
                usersService,
                userAuthenticatedGuard,
                lookupUsers
              ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
