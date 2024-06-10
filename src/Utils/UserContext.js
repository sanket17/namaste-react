import { createContext } from "react";

const UserContext = createContext({
  loggedInUserName: "default User",
});

export default UserContext;
