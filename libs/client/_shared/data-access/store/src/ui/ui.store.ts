import { signalStore, withState } from '@ngrx/signals';

type NavItems = {
    label: string;
    path: string;
    icon: string;
    iconSelected?: string;
    exact: boolean;
    hidden: boolean;
}

const DEFAULT_NAV_ITEMS: NavItems[] = [
    {
        label: 'Dashboard', path: 'dashboard', icon: 'dashboard', exact: false, hidden: true,
    },
    {
        label: 'Books', path: 'books', icon: 'book', exact: true, hidden: false,
    }
]

export const UIStore = signalStore({ providedIn: 'root'},
    withState({
        navItems: DEFAULT_NAV_ITEMS,
    })
)