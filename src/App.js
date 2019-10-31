import React from "react";
import { useUser } from "./context/user-context";
import FullPageSpinner from "./components/FullPageSpinner";

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"));
const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp"));

export default () => {
  const { user } = useUser();

  // pre-load the authenticated side in the background while the user's
  // filling out the login form.
  // React.useEffect(() => {
  //   loadAuthenticatedApp()
  // }, [])
  return <React.Suspense fallback={<FullPageSpinner />}>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</React.Suspense>;
};
