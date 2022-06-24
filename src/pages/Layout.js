import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";
import LogedNavBar from "../components/LogedNavBar";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../features/user";


export default function Layout(props) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    let email = localStorage.getItem('logged');
    let users = JSON.parse(localStorage.getItem('users'));
    if (users != null && user.email == '') {
        let loginuser;
        for ([,loginuser] of users.entries()) {
            if (loginuser.email == email) {
                dispatch(login({
                    firstname: loginuser.firstname,
                    lastname: loginuser.lastname,
                    email: email
                }));
            }
        }
    }


    return (
        <div>
            {user.email != '' ? <LogedNavBar/> : <NavBar />}
            <main>{props.children}</main>
            <Outlet/>
        </div>
    );
}

