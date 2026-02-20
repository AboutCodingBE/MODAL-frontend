import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { ArchiveBrowser } from './archive-browser/archive-browser';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'archieven', pathMatch: 'full' },
      { path: 'archieven', component: ArchiveBrowser },
    ],
  },
];
