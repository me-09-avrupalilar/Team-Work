import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
const AuthContext = createContext();
export const createUser = (email, password)=> {
    
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}

const AuthContextProvider = ({children})=> {

return <AuthContext.Provider>
{children}

</AuthContext.Provider>

}

export default AuthContextProvider;
export const useAuthContext = ()=> {
    return useContext(AuthContext)
}
