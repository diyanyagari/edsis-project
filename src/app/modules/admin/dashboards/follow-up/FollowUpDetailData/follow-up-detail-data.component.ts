import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { DatePipe, DOCUMENT, Location, NgClass, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    OnInit,
    Renderer2,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    FuseNavigationItem,
    FuseVerticalNavigationComponent,
} from '@fuse/components/navigation';
import { FuseFindByKeyPipe } from '@fuse/pipes/find-by-key/find-by-key.pipe';
import { Category, Course } from 'app/modules/admin/apps/academy/academy.types';
interface DummyActivityType {
    date: string;
    status: string;
    name: string;
    description: string;
}
const DummyActivity: DummyActivityType[] = [
    {
        date: '2025-08-14T13:22:37.274Z',
        status: 'Calling',
        name: 'Andi Malarangeng',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s',
    },
    {
        date: '2025-08-13T15:13:37.274Z',
        status: 'Calling',
        name: 'Andi Malarangeng',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

@Component({
    selector: 'follow-up-detail-data',
    templateUrl: './follow-up-detail-data.component.html',
    styleUrl: './follow-up-detail-data.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatSidenavModule,
        RouterLink,
        MatIconModule,
        NgClass,
        MatButtonModule,
        MatProgressBarModule,
        CdkScrollable,
        MatTabsModule,
        FuseFindByKeyPipe,
        FuseVerticalNavigationComponent,
        MatTooltip,
        MatFormFieldModule,
        NgIf,
        MatCardModule,
        DatePipe,
    ],
})
export class FollowUpDetailDataComponent implements OnInit, OnDestroy {
    @ViewChild('courseSteps', { static: true }) courseSteps: MatTabGroup;
    categories: Category[];
    course: Course;
    currentStep: number = 0;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    isPanelMenuCollapsed = false;
    isScreenSmall: boolean;
    isCollapsed = true;
    isHovered = this.isPanelMenuCollapsed;
    panelNavigation: FuseNavigationItem[];
    opened: boolean = true;
    private _overlay: HTMLElement;
    private _scrollStrategy: ScrollStrategy =
        this._scrollStrategyOptions.block();
    activities: DummyActivityType[] = DummyActivity
    // private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _elementRef: ElementRef,
        private location: Location,
        private _renderer2: Renderer2,
        private _scrollStrategyOptions: ScrollStrategyOptions
    ) {
        // private _elementRef: ElementRef, // private _changeDetectorRef: ChangeDetectorRef, // private _academyService: AcademyService, // @Inject(DOCUMENT) private _document: Document,
        // private _fuseMediaWatcherService: FuseMediaWatcherService
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // // Get the categories
        // this._academyService.categories$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((categories: Category[]) => {
        //         // Get the categories
        //         this.categories = categories;
        //         // Mark for check
        //         this._changeDetectorRef.markForCheck();
        //     });
        // // Get the course
        // this._academyService.course$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((course: Course) => {
        //         // Get the course
        //         this.course = course;
        //         // Go to step
        //         this.goToStep(course.progress.currentStep);
        //         // Mark for check
        //         this._changeDetectorRef.markForCheck();
        //     });
        // // Subscribe to media changes
        // this._fuseMediaWatcherService.onMediaChange$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(({ matchingAliases }) => {
        //         // Set the drawerMode and drawerOpened
        //         if (matchingAliases.includes('lg')) {
        //             this.drawerMode = 'side';
        //             this.drawerOpened = true;
        //         } else {
        //             this.drawerMode = 'over';
        //             this.drawerOpened = false;
        //         }
        //         // Mark for check
        //         this._changeDetectorRef.markForCheck();
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        // this._unsubscribeAll.next(null);
        // this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Go to given step
     *
     * @param step
     */
    // goToStep(step: number): void {
    //     // Set the current step
    //     this.currentStep = step;

    //     // Go to the step
    //     this.courseSteps.selectedIndex = this.currentStep;

    //     // Mark for check
    //     this._changeDetectorRef.markForCheck();
    // }

    /**
     * Go to previous step
     */
    // goToPreviousStep(): void {
    //     // Return if we already on the first step
    //     if (this.currentStep === 0) {
    //         return;
    //     }

    //     // Go to step
    //     this.goToStep(this.currentStep - 1);

    //     // Scroll the current step selector from sidenav into view
    //     this._scrollCurrentStepElementIntoView();
    // }

    /**
     * Go to next step
     */
    // goToNextStep(): void {
    //     // Return if we already on the last step
    //     if (this.currentStep === this.course.totalSteps - 1) {
    //         return;
    //     }

    //     // Go to step
    //     this.goToStep(this.currentStep + 1);

    //     // Scroll the current step selector from sidenav into view
    //     this._scrollCurrentStepElementIntoView();
    // }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Scrolls the current step element from
     * sidenav into the view. This only happens when
     * previous/next buttons pressed as we don't want
     * to change the scroll position of the sidebar
     * when the user actually clicks around the sidebar.
     *
     * @private
     */
    // private _scrollCurrentStepElementIntoView(): void {
    //     // Wrap everything into setTimeout so we can make sure that the 'current-step' class points to correct element
    //     setTimeout(() => {
    //         // Get the current step element and scroll it into view
    //         const currentStepElement =
    //             this._document.getElementsByClassName('current-step')[0];
    //         if (currentStepElement) {
    //             currentStepElement.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //             });
    //         }
    //     });
    // }
    panelMenuToggleCollapse(): void {
        this.isPanelMenuCollapsed = !this.isPanelMenuCollapsed;
    }

    goBack() {
        this.location.back();
    }

    /**
     * Open the panel
     */
    open(): void {
        // Return if the panel has already opened
        if (this.opened) {
            return;
        }

        // Open the panel
        this._toggleOpened(true);
    }

    /**
     * Close the panel
     */
    close(): void {
        // Return if the panel has already closed
        if (!this.opened) {
            return;
        }

        // Close the panel
        this._toggleOpened(false);
    }

    /**
     * Toggle the panel
     */
    toggle(): void {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    /**
     * Show the backdrop
     *
     * @private
     */
    private _showOverlay(): void {
        // Try hiding the overlay in case there is one already opened
        this._hideOverlay();

        // Create the backdrop element
        this._overlay = this._renderer2.createElement('div');

        // Return if overlay couldn't be create for some reason
        if (!this._overlay) {
            return;
        }

        // Add a class to the backdrop element
        this._overlay.classList.add('quick-chat-overlay');

        // Append the backdrop to the parent of the panel
        this._renderer2.appendChild(
            this._elementRef.nativeElement.parentElement,
            this._overlay
        );

        // Enable block scroll strategy
        this._scrollStrategy.enable();

        // Add an event listener to the overlay
        this._overlay.addEventListener('click', () => {
            this.close();
        });
    }

    /**
     * Hide the backdrop
     *
     * @private
     */
    private _hideOverlay(): void {
        if (!this._overlay) {
            return;
        }

        // If the backdrop still exists...
        if (this._overlay) {
            // Remove the backdrop
            this._overlay.parentNode.removeChild(this._overlay);
            this._overlay = null;
        }

        // Disable block scroll strategy
        this._scrollStrategy.disable();
    }

    /**
     * Open/close the panel
     *
     * @param open
     * @private
     */
    private _toggleOpened(open: boolean): void {
        // Set the opened
        this.opened = open;

        // If the panel opens, show the overlay
        if (open) {
            this._showOverlay();
        }
        // Otherwise, hide the overlay
        else {
            this._hideOverlay();
        }
    }
}
