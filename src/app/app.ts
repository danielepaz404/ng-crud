import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { ListComponent } from "./core/list/list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ng-crud';
}
