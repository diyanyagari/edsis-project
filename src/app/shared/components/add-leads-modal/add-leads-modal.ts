import { CommonModule, NgClass } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogClose } from "@angular/material/dialog";
import { MatFormField } from "@angular/material/form-field";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

@Component({
    selector: 'add-leads-modal',
    templateUrl: './add-leads-modal.html',
    styleUrls: ['./add-leads-modal.scss'],
    imports: [
        CommonModule,
        MatIcon,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        NgClass,
        MatDialogClose,
    ]
})
export class AddLeadsModalComponent implements OnInit, OnDestroy {
    

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        // this._unsubscribeAll.next(null);
        // this._unsubscribeAll.complete();
    }
}
