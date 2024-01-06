import { createContext } from "react"


export const UserContext = createContext({
    user: {
      name: "Dummy Name",
      email: "dummy@name.com"
    },
    Ruppes: []=[]
  })

// export default UserContext;