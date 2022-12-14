import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-edit-profile-pic-dialog',
    templateUrl: './edit-profile-pic-dialog.component.html',
    styleUrls: ['./edit-profile-pic-dialog.component.scss']
})
export class EditProfilePicDialogComponent implements OnInit {
    imagePath: any;
    defaultImageList = [
        "assets/avatar/IMG2774.png",
        "assets/avatar/IMG2776.png",
        "assets/avatar/IMG2780.png",
        "assets/avatar/IMG2781.png",
        "assets/avatar/IMG2784.png",

        "assets/avatar/IMG2774.png",
        "assets/avatar/IMG2776.png",
        "assets/avatar/IMG2780.png",
        "assets/avatar/IMG2781.png",
        "assets/avatar/IMG2784.png",

        "assets/avatar/IMG2774.png",
        "assets/avatar/IMG2776.png",
        "assets/avatar/IMG2780.png",
        "assets/avatar/IMG2781.png",
        "assets/avatar/IMG2784.png",

        "assets/avatar/IMG2774.png",
        "assets/avatar/IMG2776.png",
        "assets/avatar/IMG2780.png",
        "assets/avatar/IMG2781.png",
        "assets/avatar/IMG2784.png",
    ]
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditProfilePicDialogComponent>) {
        this.imagePath = this.data.imagePath;
    }

    ngOnInit(): void {}

    onSelectProfilePic(targetImagePath: any) {
        this.imagePath = targetImagePath;
    }

    onSave() {
        this.dialogRef.close(this.imagePath);
    }
}

