import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoChartComponent } from './pages/info-chart/info-chart.component';
import { OverviewComponent } from './pages/overview/overview.component';


const routes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'info/:id', component: InfoChartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
