import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolBarWithSideBarComponent } from './tool-bar-with-side-bar/tool-bar-with-side-bar.component';
const routes: Routes = [




{
  path:'',
  redirectTo:'',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
