import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { JournalWarraperComponent } from './journal/journal-warraper/journal-warraper.component';
import { JournalComponent } from './journal/journal/journal.component';
import { JournalFormComponent } from './journal/journal-form/journal-form.component';
import { LedgerWrraperComponent } from './ledger/ledger-wrraper/ledger-wrraper.component';
import { LedgerComponent } from './ledger/ledger/ledger.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    JournalWarraperComponent,
    JournalComponent,
    JournalFormComponent,
    LedgerWrraperComponent,
    LedgerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
