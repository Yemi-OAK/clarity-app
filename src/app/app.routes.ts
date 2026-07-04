import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tarot } from './pages/tarot/tarot';
import { Moon } from './pages/moon/moon';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tarot', component: Tarot },
  { path: 'moon', component: Moon },
];