import { createContext } from "react";

const userInfo = createContext({
    user:{
        name: "dummy name",
        email:"dummy@gmail.com"
    }
})
export default userInfo;