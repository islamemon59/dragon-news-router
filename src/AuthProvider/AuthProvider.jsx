import React, { createContext, useState } from 'react';


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const userInfo = {
        name: "hablumia",
        email: "hablu@mia.com",
        user,
        setUser,
    }

    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;