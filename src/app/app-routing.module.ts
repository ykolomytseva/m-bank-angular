import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
    { path: '', component: HomeDemoOneComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'team', component: TeamPageComponent },
    { path: 'pricing', component: PricingPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
