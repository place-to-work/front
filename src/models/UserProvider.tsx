import React, { Dispatch, FC, SetStateAction } from 'react';


type setStateType<S> = Dispatch<SetStateAction<S | null>>;



/**
 *  Контекст для работы с delivery в Product
 */
export const UserContext = React.createContext<{

    user?: any;
    setUser?: setStateType<any>;

} | null>(null);



export const UserProvider: FC = ({ children}) => {
    const [user, setUser] = React.useState<any>({});

    return (
        <UserContext.Provider value={{setUser, user}}>
            {children}
        </UserContext.Provider>
    );
};
