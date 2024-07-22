import customAxios from "./api";

const AuthService = {
  userRegister: async (user) => {
    const { data } = await customAxios.post("/users", { user });
    return data;
  },
  userLogin: async (user) => {
    const { data } = await customAxios.post("/users/login", { user });
    return data;
  },
  getUser: async () => {
    const { data } = await customAxios.get("/user");
    return data;
  },
};

export default AuthService;
