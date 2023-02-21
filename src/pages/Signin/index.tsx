import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { EmPas } from "../../types/type";
import styles from "./style.module.css";

const Signin = () => {
    const { register, handleSubmit, reset } = useForm<EmPas>();
    const navigate = useNavigate();
    const [error, setError] = useState<string>('')
    const save = (login: EmPas) => {
        signInWithEmailAndPassword(auth, login.email, login.password).then((r) => {
            navigate('/profile')
            reset()
            setError('');
        }).catch((err) => {
            setError(err.message)
        })
    }

    return <div className={styles.wrap_cont}>
        <div className={styles.container}>
            {error != '' ? <p className={styles.error}>{error}</p> : ''}
            <form onSubmit={handleSubmit(save)} className={styles.form}>
                <div>
                    <input
                        type="text"
                        className={styles.form__inps}
                        placeholder="Email*"
                        {...register('email', { required: true })}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className={styles.form__inps}
                        placeholder="Password*"
                        {...register('password', { required: true })}
                    />
                </div>
                <div>
                    <button className={styles.form__btn}>Login</button>
                </div>
            </form>
        </div>
    </div>
}

export default Signin;