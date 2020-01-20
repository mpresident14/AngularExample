import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './routing/hello/hello.component';
import { GoodbyeComponent } from './routing/goodbye/goodbye.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { HelloNameComponent } from './routing/hello-name/hello-name.component';
import { ChildRoutingComponent } from './routing/child-routing/child-routing.component';

const routes: Routes = [
    // With the wildcard below, the route '/' will not match any of these, so it will
    // result in page not found. We specify a default to circumvent this.
    {path: '', redirectTo: 'hello', pathMatch: 'full'},
    {path: 'hello', component: HelloComponent},
    {
        path: 'hello/:name', 
        component: HelloNameComponent,
        children: [
            {
                path: 'child-route', component: ChildRoutingComponent
            }
        ]
    },
    {path: 'goodbye', component: GoodbyeComponent},
    // Make sure this is last so that the wildcard match is only 
    // selected if nothing else matches
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
