import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter, TemplateRef, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-button-filter',
    templateUrl: './button-filter.component.html',
    styleUrls: ['./button-filter.component.scss'],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        NgClass,
    ]
})
export class ButtonFilterComponent implements OnInit, OnDestroy {
    @ViewChild('filterOrigin') private _filterOrigin: MatButton;
    @ViewChild('filterPanel') private _filterPanel: TemplateRef<any>;

    @Input() label = 'Filter';
    @Input() disable = false;

    @Output() clickFilter = new EventEmitter<void>();

    isActive: boolean = false

    private _overlayRef: OverlayRef;

    /**
         * Constructor
         */
        constructor(
            // private _changeDetectorRef: ChangeDetectorRef,
            // private _messagesService: MessagesService,
            private _overlay: Overlay,
            private _viewContainerRef: ViewContainerRef
        ) {}

    onClick() {
        this.clickFilter.emit();
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        // this._unsubscribeAll.next(null);
        // this._unsubscribeAll.complete();

        // Dispose the overlay
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
    }

    /**
         * Open the messages panel
         */
    openPanel(): void {
        // Return if the messages panel or its origin is not defined
        if (!this._filterPanel || !this._filterOrigin) {
            return;
        }

        // Create the overlay if it doesn't exist
        if (!this._overlayRef) {
            this._createOverlay();
        }

        // Attach the portal to the overlay
        this._overlayRef.attach(
            new TemplatePortal(this._filterPanel, this._viewContainerRef)
        );

        this.isActive = true
    }

    closePanel(): void {
        this._overlayRef.detach();
        this.isActive = false
    }

    /**
     * Create the overlay
     */
    private _createOverlay(): void {
        // Create the overlay
        this._overlayRef = this._overlay.create({
            hasBackdrop: true,
            backdropClass: 'fuse-backdrop-on-mobile',
            scrollStrategy: this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay
                .position()
                .flexibleConnectedTo(
                    this._filterOrigin._elementRef.nativeElement
                )
                .withLockedPosition(true)
                .withPush(true)
                .withPositions([
                    {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'top',
                    },
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'bottom',
                    },
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top',
                    },
                    {
                        originX: 'end',
                        originY: 'top',
                        overlayX: 'end',
                        overlayY: 'bottom',
                    },
                ]),
        });

        // Detach the overlay from the portal on backdrop click
        this._overlayRef.backdropClick().subscribe(() => {
            this._overlayRef.detach();
            this.isActive = false
        });
    }
}
