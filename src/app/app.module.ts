import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteModule } from './route.module';
import { HomeComponent } from './home/home.component';
import { DashBoardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './login/auth.module';
import { CounterService } from './Services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule,
    DashBoardModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  providers: [CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
