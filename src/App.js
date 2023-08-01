import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispach = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispach(
          loginUser({
            uid: authUser,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispach(setLoading(false));
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);
  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector(state => state.data.user.isLoading)
  return <div className="app">
    {isLoading ? (<div className="loader-container">
      <div className="loader"></div>
    </div>) : (<>{user ? <Homepage /> : <Authentication />}</>)}
  </div>
};

export default App;
