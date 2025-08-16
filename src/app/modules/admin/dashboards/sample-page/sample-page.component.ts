import {
    AsyncPipe,
    CurrencyPipe,
    DatePipe,
    NgClass,
    NgTemplateOutlet,
} from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { AddLeadsModalComponent } from 'app/shared/components/add-leads-modal/add-leads-modal';
import { SharedModule } from 'app/shared/shared.module';
import { Observable, of, Subject } from 'rxjs';
import {
    CategoriesType,
    InventoryPagination,
    SampleDataType,
    StatusesType,
} from './sampledata.type';

const mockDataTable = [
    {
        id: '1b6fd296-bc6a-4d45-bf4f-e45519a58cf5',
        transactionId: '528651571NT',
        name: 'Morgan Page',
        amount: +1358.75,
        status: 'completed',
        date: '2019-10-07T22:22:37.274Z',
    },
    {
        id: '2dec6074-98bd-4623-9526-6480e4776569',
        transactionId: '421436904YT',
        name: 'Nita Hebert',
        amount: -1042.82,
        status: 'completed',
        date: '2019-12-18T14:51:24.461Z',
    },
    {
        id: 'ae7c065f-4197-4021-a799-7a221822ad1d',
        transactionId: '685377421YT',
        name: 'Marsha Chambers',
        amount: +1828.16,
        status: 'pending',
        date: '2019-12-25T17:52:14.304Z',
    },
    {
        id: '0c43dd40-74f6-49d5-848a-57a4a45772ab',
        transactionId: '884960091RT',
        name: 'Charmaine Jackson',
        amount: +1647.55,
        status: 'completed',
        date: '2019-11-29T06:32:16.111Z',
    },
    {
        id: 'e5c9f0ed-a64c-4bfe-a113-29f80b4e162c',
        transactionId: '361402213NT',
        name: 'Maura Carey',
        amount: -927.43,
        status: 'completed',
        date: '2019-11-24T12:13:23.064Z',
    },
];

const categories: CategoriesType[] = ['cold', 'warm', 'hot'];
const statuses: StatusesType[] = ['registed', 'close', 'pending'];

const mockDataTable2: SampleDataType[] = Array.from({ length: 10 }, (_, i) => ({
    id: crypto.randomUUID(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    branch: ['Bogor', 'Jakarta', 'Bandung', 'Surabaya'][
        Math.floor(Math.random() * 4)
    ],
    source: ['Instagram', 'Facebook', 'WhatsApp'][
        Math.floor(Math.random() * 3)
    ],
    name: [
        'Dina Marta',
        'Andi Malarangeng',
        'Budi Santoso',
        'Rina Anggraini',
        'Siti Nurhaliza',
    ][Math.floor(Math.random() * 5)],
    contact:
        '08' + Math.floor(1000000000 + Math.random() * 9000000000).toString(),
    segmentation: ['building', 'house', 'apartment'][
        Math.floor(Math.random() * 3)
    ],
    createdBy: ['Andi Malarangeng', 'Joko Widodo', 'Megawati Soekarnoputri'][
        Math.floor(Math.random() * 3)
    ],
    createdAt: '2019-10-07T22:22:37.274Z',
}));

@Component({
    selector: 'app-sample-page',
    animations: fuseAnimations,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        NgClass,
        MatProgressBarModule,
        CurrencyPipe,
        DatePipe,
        MatPaginatorModule,
        AsyncPipe,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgTemplateOutlet,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatRippleModule,
        MatDatepickerModule,
        SharedModule,
        MatTooltipModule,
        RouterLink,
    ],
    templateUrl: './sample-page.component.html',
    styleUrl: './sample-page.component.scss',
    encapsulation: ViewEncapsulation.None,
    styles: [
        /* language=SCSS */
        `
            .inventory-grid {
                grid-template-columns: 48px auto 40px;

                @screen sm {
                    grid-template-columns: 48px auto 112px 72px;
                }

                @screen md {
                    grid-template-columns: 48px 112px auto 112px 72px;
                }

                @screen lg {
                    grid-template-columns: 48px 112px auto 112px 96px 96px 72px;
                }
            }
        `,
    ],
})
export class SamplePageComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('recentTransactionsTable', { read: MatSort })
    recentTransactionsTableMatSort: MatSort;
    @ViewChild('leadsTable', { read: MatSort }) leadsTableMatSort: MatSort;
    formFieldHelpers: string[] = [''];

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    dataBaru$: Observable<SampleDataType[]>;
    pagination: InventoryPagination;
    isLoading: boolean = false;

    constructor(private _matDialog: MatDialog) {}

    recentTransactionsTableColumns: string[] = [
        'transactionId',
        'date',
        'name',
        'amount',
        'status',
    ];

    leadsDataTableColumns: string[] = [
        'status',
        'category',
        'branch',
        'source',
        'name',
        'contact',
        'segmentation',
        'createdBy',
        'createdAt',
        'action',
    ];

    sampleDataTable: MatTableDataSource<any> = new MatTableDataSource();

    leadsDataTable: MatTableDataSource<any> = new MatTableDataSource();

    ngOnInit(): void {
        // Get the data
        // this._financeService.data$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((data) => {
        //         // Store the data
        //         this.data = data;

        //         // Store the table data
        //         this.recentTransactionsDataSource.data =
        //             data.recentTransactions;

        //         // Prepare the chart data
        //         // this._prepareChartData();
        //     });
        this.sampleDataTable.data = mockDataTable;
        this.leadsDataTable.data = mockDataTable2;
        this.dataBaru$ = of(mockDataTable2);
        console.log('ppp-> ', this.dataBaru$);
    }

    ngAfterViewInit(): void {
        this.sampleDataTable.sort = this.recentTransactionsTableMatSort;

        this.leadsDataTable.sort = this.leadsTableMatSort;
    }

    ngOnDestroy(): void {
        // throw new Error('Method not implemented.');
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    onPageChange(index: number): void {
        console.log('a');
    }

    onStatusFilterClick() {
        console.log('wwwww');
    }

    addNewLeads(): void {
        this._matDialog.open(AddLeadsModalComponent, {
            autoFocus: false,
            disableClose: true,
            data: {
                note: {},
            },
        });
    }
}
