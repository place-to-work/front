import * as React from 'react';
import UserStore from './UserStore';

export const StoreContext = React.createContext<
    UserStore | undefined
    >(undefined);

export const useStore = (): UserStore => {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within StoreProvider');
    }

    return context;
};
