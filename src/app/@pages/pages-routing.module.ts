import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'blog/home',
        loadChildren: () => import('./blog/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'blog/post',
        loadChildren: () => import('./blog/post/post.module').then(m => m.PostModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'portfolio/item',
        loadChildren: () => import('./portfolio/item/item.module').then(m => m.ItemModule)
      },
      {
        path: 'portfolio/overview',
        loadChildren: () => import('./portfolio/overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
