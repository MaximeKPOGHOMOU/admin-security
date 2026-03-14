import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './layout/layout';
import { authGuard } from './core/guards/auth-guard';
import { Agent } from './features/agent/agent';
import { Client } from './features/client/client';
import { Site } from './features/site/site';
import { Planing } from './features/planing/planing';

export const routes: Routes = [
  // Routes publiques
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Routes protégées par authGuard
  {
    path: '',
    component: Layout, // wrapper avec sidebar, navbar, footer
    canActivate: [authGuard],
    children: [
      // Dashboard par défaut
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'agents', component: Agent },
      { path: 'clients', component: Client },
      { path: 'sites', component: Site },
      { path: 'planing', component: Planing },
      { path: 'register', component: Register },
      // { path: 'entreprises', component: EntreprisesList }
    ]
  },

  // Route fallback
  { path: '**', redirectTo: 'dashboard' }
];