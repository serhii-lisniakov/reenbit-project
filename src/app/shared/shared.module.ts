import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';



@NgModule({
  declarations: [ConfirmModalComponent, SuccessModalComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HeaderModule,
    FooterModule
  ],
    exports: [
        CommonModule,
        FormsModule,
        HeaderModule,
        FooterModule,
        FormsModule,
        ReactiveFormsModule,
        ConfirmModalComponent,
        SuccessModalComponent
    ]
})
export class SharedModule { }
