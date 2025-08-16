import { FuseNavigationItem } from '@fuse/components/navigation';

export const navigationStatic: FuseNavigationItem[] = [
    {
        id: 'leads',
        title: 'Leads',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Open',
                type: 'basic',
                icon: 'ic-mail-open',
            },
            {
                id: 'dashboards.analytics',
                title: 'Pending',
                type: 'basic',
                icon: 'ic-pending',
            },
        ],
    },
    {
        id: 'prospek',
        title: 'Prospek',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Open',
                type: 'basic',
                icon: 'ic-mail-open',
            },
            {
                id: 'dashboards.analytics',
                title: 'Pending',
                type: 'basic',
                icon: 'ic-pending',
            },
        ],
    },
]

export const panelNavigationStatic: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'ic-dashboard',
    },
    {
        id: 'statistic',
        title: 'Statistic',
        type: 'basic',
        icon: 'ic-statistic',
    },
    {
        id: 'dataLeads',
        subtitle: 'Data',
        type: 'group',
        children: [
            {
                id: 'dataLeads.registed',
                title: 'Registed',
                type: 'basic',
                icon: 'ic-registed',
                link: '/dashboards/project',
            },
            {
                id: 'dataLeads.followup',
                title: 'Follow Up',
                type: 'basic',
                icon: 'ic-follow-up',
                link: '/dashboards/analytics',
            },
             {
                id: 'dataLeads.cancel',
                title: 'Cancel',
                type: 'basic',
                icon: 'ic-cancel',
                link: '/dashboards/analytics',
            },
             {
                id: 'dataLeads.close',
                title: 'Close',
                type: 'basic',
                icon: 'ic-double-check',
                link: '/dashboards/analytics',
            },
        ],
    },
    {
        id: 'attentionLeads',
        subtitle: 'Data',
        type: 'group',
        children: [
            {
                id: 'attentionLeads.open',
                title: 'Open',
                type: 'basic',
                icon: 'ic-mail-open',
                link: '/dashboards/project',
                badge: {
                    title: '12',
                    classes: 'rounded-full bg-[#FF0351C9] aspect-square text-white p-1 flex item-center justify-center text-center'
                }
            },
            {
                id: 'attentionLeads.pending',
                title: 'Pending',
                type: 'basic',
                icon: 'ic-pending',
                link: '/dashboards/analytics',
                badge: {
                    title: '22',
                    classes: 'rounded-full bg-[#FF0351C9] aspect-square text-white p-1 flex item-center justify-center text-center'
                }
            }
        ],
    },
]