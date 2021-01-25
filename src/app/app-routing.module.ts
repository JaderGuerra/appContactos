import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contactList',
    loadChildren: () =>
      import('./pages/contact-list/contact-list.module').then(
        (m) => m.ContactListModule
      ),
  },
  {
    path: 'addcontact',
    loadChildren: () =>
      import('./pages/addcontact/addcontact.module').then(
        (m) => m.AddcontactModule
      ),
  },
  {
    path: 'editar/:id',
    loadChildren: () =>
      import('./pages/addcontact/addcontact.module').then(
        (m) => m.AddcontactModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
