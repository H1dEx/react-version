import React, {useState} from 'react';

export const ErrorContext = React.createContext();

export default function Error({children}) {
    const [error, updError] = useState({
        message: 'something goes wrong...'
    })
    
    function setError(e) {
        updError(e)
    }
    
    function clearError() {
        setError(null)
    }
    
    return (
        <ErrorContext.Provider value={{error, setError, clearError}}>
            {children}
        </ErrorContext.Provider>
    );
};