import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { groupListComponent } from '../../group/view/groupList.component';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, groupListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'shared-expenses';
}
