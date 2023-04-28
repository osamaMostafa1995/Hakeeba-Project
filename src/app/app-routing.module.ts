import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentersModule } from './@core/centers/centers.module';
import { HomeModule } from './@core/home/home.module';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'center', loadChildren: () => CentersModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    anchorScrolling: 'enabled',
            relativeLinkResolution: 'corrected',

            scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
