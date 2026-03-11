import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './layout/layout';
import { authGuard } from './core/guards/auth-guard';
import { Agent } from './features/agent/agent';

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
      // { path: 'entreprises', component: EntreprisesList }
    ]
  },

  // Route fallback
  { path: '**', redirectTo: 'dashboard' }
];