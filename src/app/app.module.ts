import { CarouselModule } from 'primeng/carousel';
import { ImgMagnifier } from 'ng-img-magnifier';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
    declarations: [
      AppComponent,
      ProductDetailsComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ImgMagnifier,
      CarouselModule
      ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
