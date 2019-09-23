import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashcardComponent} from './dashcard/dashcard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {LineGraphComponent} from './line-graph/line-graph.component';
import {BarGraphComponent} from './bar-graph/bar-graph.component';
import {DoughnutGraphComponent} from './doughnut-graph/doughnut-graph.component';
import {ProfileCardComponent} from './profile-card/profile-card.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {PricingPlanComponent} from './pricing-plan/pricing-plan.component';
import {MatListModule} from '@angular/material/list';
import {WeatherComponent} from './weather/weather.component';
import {Ng2OdometerModule} from 'ng2-odometer';
import {SharePriceComponent} from './share-price/share-price.component';
import {RoundProgressbarComponent} from './round-progressbar/round-progressbar.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {SalesListComponent} from './sales-list/sales-list.component';
import {D3UsaComponent} from './d3-usa/d3-usa.component';
import {WorldMapComponent} from './world-map/world-map.component';
import {ProjectHealthComponent} from './project-health/project-health.component';
import {QualityComponent} from './quality/quality.component';
import {ReleasesComponent} from './releases/releases.component';
import { AgileMetricsComponent } from './agile-metrics/agile-metrics.component';
import { CodeQualityComponent } from './code-quality/code-quality.component';
import { EnvironmentComponent } from './environment/environment.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    Ng2OdometerModule,
    RoundProgressModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashcardComponent,
    LineGraphComponent,
    BarGraphComponent,
    DoughnutGraphComponent,
    ProfileCardComponent,
    PricingPlanComponent,
    WeatherComponent,
    ProjectHealthComponent,
    QualityComponent,
    ReleasesComponent,
    SharePriceComponent,
    RoundProgressbarComponent,
    SalesListComponent,
    D3UsaComponent,
    WorldMapComponent,
    AgileMetricsComponent,
    CodeQualityComponent,
    EnvironmentComponent,

  ],
  exports: [
    DashcardComponent,
    LineGraphComponent,
    BarGraphComponent,
    DoughnutGraphComponent,
    ProfileCardComponent,
    PricingPlanComponent,
    WeatherComponent,
    ProjectHealthComponent,
    QualityComponent,
    ReleasesComponent,
    SharePriceComponent,
    RoundProgressbarComponent,
    SalesListComponent,
    D3UsaComponent,
    WorldMapComponent,
    AgileMetricsComponent,
    EnvironmentComponent,
    CodeQualityComponent,
  ]
})
export class DashboardWidgetModule {
}
