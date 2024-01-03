import { createContext } from "react"


export const UserContext = createContext({
    user: {
      name: "Dummy Name",
      email: "dummy@name.com"
    }
  })

// export default UserContext;