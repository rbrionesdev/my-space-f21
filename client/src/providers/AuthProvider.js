import React, { useState } from "react";

// we need to pass in the actual context itself.
export const AuthContext = React.createContext();
// probably wont use this (using useContext hook instead )
// export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  
  return (
    <AuthContext.Provider
      value = {{
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;