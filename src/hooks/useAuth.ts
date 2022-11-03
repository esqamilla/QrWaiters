import { useAppSelector } from "hooks/reduxHooks";

const useAuth = () => {
  const { token, user } = useAppSelector((state) => state.user);

  return {
    isAuth: true /*!!user && !!token*/,
    token,
  };
};

export default useAuth;
