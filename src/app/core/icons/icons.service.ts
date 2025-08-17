import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconsService {
    /**
     * Constructor
     */
    constructor() {
        const domSanitizer = inject(DomSanitizer);
        const matIconRegistry = inject(MatIconRegistry);

        // Register icon sets
        matIconRegistry.addSvgIconSet(
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/material-twotone.svg'
            )
        );
        matIconRegistry.addSvgIconSetInNamespace(
            'mat_outline',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/material-outline.svg'
            )
        );
        matIconRegistry.addSvgIconSetInNamespace(
            'mat_solid',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/material-solid.svg'
            )
        );
        matIconRegistry.addSvgIconSetInNamespace(
            'feather',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/feather.svg')
        );
        matIconRegistry.addSvgIconSetInNamespace(
            'heroicons_outline',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/heroicons-outline.svg'
            )
        );
        matIconRegistry.addSvgIconSetInNamespace(
            'heroicons_solid',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/heroicons-solid.svg'
            )
        );
        matIconRegistry.addSvgIconSetInNamespace(
            'heroicons_mini',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/heroicons-mini.svg'
            )
        );

        // ======== APP ICON ========

        matIconRegistry.addSvgIcon(
            'ic-filter',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-filter.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-hot',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-hot.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-dashboard',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/ic-dashboard.svg'
            )
        );

        matIconRegistry.addSvgIcon(
            'ic-cold',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-cold.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-warm',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-warm.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-warm',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-warm.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-close',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-close.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-double-check',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/ic-double-check.svg'
            )
        );

        matIconRegistry.addSvgIcon(
            'ic-follow-up',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/ic-follow-up.svg'
            )
        );

        matIconRegistry.addSvgIcon(
            'ic-mail-open',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/ic-mail-open.svg'
            )
        );

        matIconRegistry.addSvgIcon(
            'ic-pending',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-pending.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-panel-menu',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/ic-panel-menu.svg'
            )
        );

        matIconRegistry.addSvgIcon(
            'ic-registed',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-registed.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-statistic',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'icons/ic-statistic.svg'
            )
        );

        matIconRegistry.addSvgIcon(
            'ic-cancel',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-cancel.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-search',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-search.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-calendar',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-calendar.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-edit',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-edit.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-arrow-back',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-arrow-back.svg')
        );

        matIconRegistry.addSvgIcon(
            'ic-add',
            domSanitizer.bypassSecurityTrustResourceUrl('icons/ic-add.svg')
        );
    }
}
