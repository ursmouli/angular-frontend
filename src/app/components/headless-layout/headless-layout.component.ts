import { NgModule, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-headless-layout',
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './headless-layout.component.html',
  styleUrl: './headless-layout.component.scss'
})
export class HeadlessLayoutComponent {

}
