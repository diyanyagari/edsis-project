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
                icon: 'heroicons_outline:envelope-open',
                link: '/dashboards/project',
            },
            {
                id: 'dashboards.analytics',
                title: 'Pending',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/dashboards/analytics',
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
                icon: 'heroicons_outline:envelope-open',
                link: '/dashboards/project',
            },
            {
                id: 'dashboards.analytics',
                title: 'Pending',
                type: 'basic',
                icon: 'heroicons_outline:book-open',
                link: '/dashboards/analytics',
            },
        ],
    },
]

export const panelNavigationStatic: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:home',
    },
    {
        id: 'statistic',
        title: 'Statistic',
        type: 'basic',
        icon: 'heroicons_outline:presentation-chart-line',
    },
    {
        id: 'dataLeads',
        subtitle: 'Data',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dataLeads.registed',
                title: 'Registed',
                type: 'basic',
                icon: 'heroicons_outline:document-text',
                link: '/dashboards/project',
            },
            {
                id: 'dataLeads.followup',
                title: 'Follow Up',
                type: 'basic',
                icon: 'heroicons_outline:megaphone',
                link: '/dashboards/analytics',
            },
             {
                id: 'dataLeads.cancel',
                title: 'Cancel',
                type: 'basic',
                icon: 'heroicons_outline:x-mark',
                link: '/dashboards/analytics',
            },
             {
                id: 'dataLeads.close',
                title: 'Close',
                type: 'basic',
                icon: 'heroicons_outline:document-check',
                link: '/dashboards/analytics',
            },
        ],
    },
    {
        id: 'attentionLeads',
        // title: 'Prospek',
        subtitle: 'Data',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'attentionLeads.open',
                title: 'Open',
                type: 'basic',
                icon: 'heroicons_outline:envelope-open',
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
                icon: 'heroicons_outline:cube-transparent',
                link: '/dashboards/analytics',
                badge: {
                    title: '22',
                    classes: 'rounded-full bg-[#FF0351C9] aspect-square text-white p-1 flex item-center justify-center text-center'
                }
            }
        ],
    },
]