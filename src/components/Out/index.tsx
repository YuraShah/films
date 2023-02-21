import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink, Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUser } from "../../features/user/userSlice";
import { auth, db } from "../../firebase/firebase-config";
import { EnumFirestore } from "../../types/type";
import styles from './style.module.css';


const Out = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userCollection = collection(db, EnumFirestore.USER);
    const { user } = useAppSelector((st): any => st.user);
    const [response, setResponse] = useState(false);

    // console.log(auth)
    useEffect(() => {
        onAuthStateChanged(auth, async (obj) => {
            // console.log(obj)
            if (obj) {
                let q = query(userCollection, where('userId', '==', obj.uid))
                let info = await getDocs(q);
                await setResponse(true)
                if (info.size > 0) {
                    let myData = await info.docs[0]
                    dispatch(getUser({ id: myData.id, ...myData.data() }))
                }
            } else {
                setResponse(true)
            }
        })
    }, [])

    const logout = () => {
        signOut(auth);
        setResponse(false);
        navigate('/')
        window.location.reload()
    }
    if (response) {
        if ('id' in user) {
            return (<>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li className={styles.menu_list}>
                            <NavLink to={''}
                                className={styles.menu_link}>
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.menu_list}>
                            <NavLink to={'/profile'}
                                className={styles.menu_link}
                                style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
                                Profile
                            </NavLink>
                        </li>
                        <li className={styles.menu_list}>
                            <NavLink to={'/addfilm'}
                                className={styles.menu_link}
                                style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
                                Add Film
                            </NavLink>
                        </li>
                        <li className={styles.menu_list}
                            onClick={() => logout()}>
                            <span className={styles.span}>Logout</span>
                        </li>
                        <li className={styles.menu_list}>
                            <NavLink to={'/showfilms'}
                                className={styles.menu_link}
                                style={({ isActive }) => isActive ? { color: '#3ec0e1' } : {}}>
                                Show Films
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Outlet />
                </div>
            </>)
        } else {
            return <Navigate to='/' />
        }
    }
    return <> </>
}

export default Out;