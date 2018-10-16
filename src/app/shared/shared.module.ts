import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule,
      HttpClientModule,
    ],
    declarations: [],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule
    ]
  })
  export class SharedModule {}
