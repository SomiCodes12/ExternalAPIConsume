import { FC, PropsWithChildren } from "react";
import { useMainUser, useUserToken } from "../global/jotai";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [ state , setState ] = useMainUser();
  const [ useToken ] : any = useUserToken();

  if (useToken) {
    const decode : any = jwtDecode(useToken);
    setState(decode.id)
  }

  return <div>{state ? <div>{children}</div> : <Navigate to="/sign-in" />}</div>;
};

export default PrivateRoute;
