import React, {useState} from 'react';
export const LoadingContext = React.createContext();

export default function Loading({children}) {
    const [isLoading, setLoading] = useState(false)
    return (
        <LoadingContext.Provider value={{isLoading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    );
};