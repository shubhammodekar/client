import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { JournalWarraperComponent } from './journal/journal-warraper/journal-warraper.component';
import { LedgerWrraperComponent } from './ledger/ledger-wrraper/ledger-wrraper.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'journal',
    component: JournalWarraperComponent,
  }
  ,
  {
    path: 'Gl',
    component: LedgerWrraperComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
