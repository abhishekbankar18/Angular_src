import { Routes } from '@angular/router';

import { BatchDetailsComponent } from './batch-details/batch-details.component';

import { BatchListComponent } from './batch-list/batch-list.component';

import { HomepageComponent } from './homepage/homepage.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

export const routes: Routes = [
    // Specific Route
    {path : 'batchdetails', component : BatchDetailsComponent},
    {path : 'batchlist', component : BatchListComponent},
    
    // Default Route
    {path : '', component : HomepageComponent},

    // Wildcard route / invalid route
    {path: '**', component : InvalidpageComponent},
    
];

