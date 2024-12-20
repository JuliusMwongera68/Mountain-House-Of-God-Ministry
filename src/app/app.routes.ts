import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { ServiceprogrammeComponent } from './serviceprogramme/serviceprogramme.component';
import { SermonsComponent } from './sermons/sermons.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { LocationComponent } from './location/location.component';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'sermons',component:SermonsComponent},
    {path:'serviceprogramme',component:ServiceprogrammeComponent},
    {path:'ministries',component:MinistriesComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactsComponent},
    {path:'announcements',component:AnnouncementsComponent},
    {path:'events',component:EventsComponent},
    {path:'location',component:LocationComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'serviceprogramme',component:ServiceprogrammeComponent}



];
