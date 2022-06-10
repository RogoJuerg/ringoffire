import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game/:id', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
