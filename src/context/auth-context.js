import React, { useState, useEffect } from "react";

import userbase from "userbase-js";
import FullPageSpinner from "../components/FullPageSpinner";

const EMPTY_PROFILE = { item: {} };
const AuthContext = React.createContext();
function AuthProvider(props) {
  let [loadingUser, setLoadingUser] = useState(true);
  let [user, setUser] = useState(null);
  let [profile, setProfile] = useState(EMPTY_PROFILE);

  let setProfileAttribute = (key, value, onError) => {
    let newProfile = { ...profile };
    newProfile.item[key] = value;

    if (profile.itemId === undefined) {
      return userbase
        .insertItem({ databaseName: "profile", item: newProfile.item })
        .then(() => {})
        .catch(onError);
    } else {
      return userbase
        .updateItem({ databaseName: "profile", item: newProfile.item, itemId: profile.itemId })
        .then(() => {})
        .catch(onError);
    }
  };
  let profileChangeHandler = dbData => {
    let profile = EMPTY_PROFILE;
    if (dbData.length > 0) {
      profile = dbData[0];
    }
    setProfile(profile);
  };

  useEffect(() => {
    userbase
      .init({ appId: "7109ab3e-b57a-43dc-ac65-d313e94ca902" })
      .then(session => {
        if (session.user) {
          // there is a valid active session
          setUser(session.user);
          // Now open user profile
          return userbase.openDatabase({ databaseName: "profile", changeHandler: profileChangeHandler });
        }
        return Promise.reject();
      })
      .then(() => {
        setLoadingUser(false);
      })
      .catch(e => {
        console.error(e);
        setLoadingUser(false);
      });
  }, []);

  if (loadingUser) {
    return <FullPageSpinner />;
  }

  let data = { user, profile: profile };
  const login = (username, password, setError = undefined) => {
    return userbase
      .signIn({ username, password })
      .then(user => {
        setUser(user);
      })
      .catch(e => {
        console.error(e);
        if (setError) {
          setError(e);
        }
      });
  }; // make a login request
  const signup = (username, password, setError = undefined) => {
    return userbase
      .signUp({ username, email: username, password })
      .then(user => {
        console.log(user);
        setUser(user);
      })
      .catch(e => {
        console.error(e);
        if (setError) {
          setError(e);
        }
      });
  }; // signup the user
  const logout = () => {
    userbase
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch(e => {
        console.error(e);
      });
  };

  return <AuthContext.Provider value={{ data, setProfileAttribute, login, logout, signup, isAuthenticated: data && data.user }} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
