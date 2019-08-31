import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full'
  },
  {
    path: "calendar",
    loadChildren:"./calendar/calendar.module#CalendarModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true,
    // enableTracing:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
