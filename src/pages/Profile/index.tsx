import { useAppSelector } from "../../app/hooks";
import styles from './style.module.css';

const Profile = () => {
    const {user} = useAppSelector((st): any => st.user);

    return <div className={styles.container}>
        <div className={styles.card}>
            <h2>{user.name} {user.surname}</h2>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone: {user.phone}</p>
        </div>
    </div>
}

export default Profile;