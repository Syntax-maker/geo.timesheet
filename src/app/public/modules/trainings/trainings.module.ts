import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { MainLayoutModule } from '@layout/main-layout/main-layout.module';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TrainingModalComponent } from './components/training-modal/training-modal.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    CardComponent,
    TrainingsComponent,
    TrainingModalComponent
  ],
  exports: [
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TrainingsModule { }