import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { EditProfilePageDialogComponent } from './edit-profile-page-dialog/edit-profile-page-dialog.component';
import { EditProfilePicDialogComponent } from './edit-profile-pic-dialog/edit-profile-pic-dialog.component';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public user: User;
  public imagePath: string | undefined;
  public facebookIcon = faFacebook;
  public twitterIcon = faTwitter;
  public linkedinIcon = faLinkedin;
  public editIcon = faPenToSquare;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.imagePath = this.user.userProfile?.avatar;
  }

  openEditProfileDialog() {
    const dialogRef = this.dialog.open(EditProfilePageDialogComponent, 
      {
          height: '400px',
          width: '600px',
      });
  }

  openEditProfilePicDialog(){
    const dialogRef = this.dialog.open(EditProfilePicDialogComponent,
      {
        height: '600px',
        width: '400px',
        data: {
          imagePath: this.imagePath
        }
      })
  }

}
