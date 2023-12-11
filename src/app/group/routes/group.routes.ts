import { Routes } from '@angular/router';
import { GroupComponent } from '../view/group.component';

export const groupRoutes: Routes = [
  {
    path: 'group-list',
    title: 'Group View',
    component: GroupComponent, // this is the component with the <router-outlet> in the template
    children: [
      /* {
        path: 'child-a', // child route path
        title: resolvedChildATitle,
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        title: 'child b',
        component: ChildBComponent, // another child route component that the router renders
      },
      */
    ],
  },
];
