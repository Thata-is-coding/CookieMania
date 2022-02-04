import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'blank',
    loadChildren: () => import('./pages/blank/blank.module').then( m => m.BlankPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./pages/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'login-user',
    loadChildren: () => import('./pages/login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'sign-user',
    loadChildren: () => import('./pages/sign-user/sign-user.module').then( m => m.SignUserPageModule)
  },
  {
    path: 'salvar',
    loadChildren: () => import('./pages/salvar/salvar.module').then( m => m.SalvarPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./pages/sair/sair.module').then( m => m.SairPageModule)
  },
  {
    path: 'alterar-senha',
    loadChildren: () => import('./pages/alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./pages/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./pages/cookie/cookie.module').then( m => m.CookiePageModule)
  },
  {
    path: 'conquista',
    loadChildren: () => import('./pages/conquista/conquista.module').then( m => m.ConquistaPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
