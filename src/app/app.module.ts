import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { PartnersComponent } from './components/common/partners/partners.component';
import { MoneyCalculatorComponent } from './components/common/money-calculator/money-calculator.component';
import { QuoteComponent } from './components/common/quote/quote.component';
import { TextSliderComponent } from './components/common/text-slider/text-slider.component';
import { BusinessNeedsComponent } from './components/common/business-needs/business-needs.component';
import { SubscriptionComparisonComponent } from './components/common/subscription-comparison/subscription-comparison.component';
import { MissionComponent } from './components/common/mission/mission.component';
import { AllCountriesComponent } from './components/common/all-countries/all-countries.component';
import { ReviewsComponent } from './components/common/reviews/reviews.component';
import { TextSlider2Component } from './components/common/text-slider2/text-slider2.component';
import { CollectingPaymentsComponent } from './components/common/collecting-payments/collecting-payments.component';
import { DigitalBankingComponent } from './components/common/digital-banking/digital-banking.component';
import { HoBannerComponent } from './components/pages/home-demo-one/ho-banner/ho-banner.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { PaymentsEvolutionComponent } from './components/common/payments-evolution/payments-evolution.component';
import { OnlinePaymentComponent } from './components/common/online-payment/online-payment.component';
import { WhyWeBestComponent } from './components/common/why-we-best/why-we-best.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { OurCommitmentComponent } from './components/common/our-commitment/our-commitment.component';
import { TeamComponent } from './components/common/team/team.component';
import { ServicesComponent } from './components/common/services/services.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        FeaturesComponent,
        PartnersComponent,
        MoneyCalculatorComponent,
        QuoteComponent,
        TextSliderComponent,
        BusinessNeedsComponent,
        SubscriptionComparisonComponent,
        MissionComponent,
        AllCountriesComponent,
        ReviewsComponent,
        TextSlider2Component,
        CollectingPaymentsComponent,
        DigitalBankingComponent,
        HoBannerComponent,
        SubscribeComponent,
        PaymentsEvolutionComponent,
        OnlinePaymentComponent,
        WhyWeBestComponent,
        AboutPageComponent,
        OurCommitmentComponent,
        TeamComponent,
        ServicesComponent,
        TeamPageComponent,
        ContactPageComponent,
        PricingPageComponent,
        HowItWorksComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
