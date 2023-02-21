import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { EnumFirestore, User } from "../../types/type";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styles from './style.module.css';

const Signup = () => {
    const [error, setError] = useState<string>()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<User>()
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userCollection = collection(db, EnumFirestore.USER)

    const save = async (data: User) => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then(async (r) => {
            await addDoc(userCollection, {
                userId: r.user.uid,
                name: data.name,
                surname: data.surname,
                age: data.age,
                gender: data.gender,
                email: data.email,
                password: data.password,
                phone: data.phone
            })
            setError('');
            navigate('/');
            reset();
        }).catch((err) => {
            setError(err.message)
        })
    }

    const res = (e: any) => {
        e.preventDefault();
        reset();
        setError('');
        for (const [k, v] of Object.entries(errors)) {
            v.message = ""
        }
    }

    return <div className={styles.wrap_cont}>
        <div className={styles.container}>
            <h3 className={styles.title}>Registration</h3>
            <form onSubmit={handleSubmit(save)} className={styles.form}>
                {error != '' ? <p className={styles.error}>{error}</p> : ''}
                {errors.name && <p className={styles.error}>Error Name</p>}
                {errors.surname && <p className={styles.error}>Error Surname</p>}
                <div className={styles.box_name}>
                    <div className={styles.box_col}>
                        <div>
                            <label htmlFor="">Name<span className={styles.starcolor}>*</span></label>
                        </div>
                        <div>
                            <input
                                type="text"
                                className={`${styles.form__inps} ${styles.form__divs}`}
                                {...register('name', { required: true, pattern: /^[ a-zA-Z\-]+$/ })}
                            />
                        </div>
                    </div>
                    <div className={styles.box_col} style={{ marginLeft: '30px' }}>
                        <div >
                            <label htmlFor="">Surname<span className={styles.starcolor}>*</span></label>
                        </div>
                        <div>
                            <input
                                type="text"
                                className={`${styles.form__inps} ${styles.form__divs}`}
                                {...register('surname', { required: true, pattern: /^[ a-zA-Z\-]+$/ })}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.form__divs}>
                    <label htmlFor="">Age<span className={styles.starcolor}>*</span></label>
                </div>
                <div className={styles.form__divs}>
                    <input
                        type="text"
                        className={styles.form__inps}
                        {...register('age', { required: true, pattern: /^(1[89]|[2-9]\d)$/gm, min: 18, max: 100 })}
                    />
                    {errors.age && <p className={styles.error}>Age must be a number and in the range 18-100</p>}
                </div>
                <div>

                    <label htmlFor="">Gender<span className={styles.starcolor}>*</span></label>
                </div>
                {errors.gender && <p className={styles.error}>Choose gender</p>}
                <div className={styles.box__gender}>
                    <div>
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            className={styles.form__inps_radio}
                            value='male'
                            {...register('gender', { required: true })}
                            id='male'
                            name="gender"
                        />
                    </div>
                    <div>
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            className={styles.form__inps_radio}
                            value='female'
                            {...register('gender', { required: true })}
                            id='female'
                            name="gender"
                        />
                    </div>
                </div>
                <div className={styles.form__divs}>
                    <label htmlFor="">Email<span className={styles.starcolor}>*</span></label>
                </div>
                <div className={styles.form__divs}>
                    <input
                        type="text"
                        className={styles.form__inps}
                        {...register('email', { required: true })}
                    />
                </div>
                <div className={styles.form__divs}>
                    <label htmlFor="">Password<span className={styles.starcolor}>*</span></label>
                </div>
                <div className={styles.form__divs}>
                    <input
                        type="password"
                        className={styles.form__inps}
                        {...register('password', { required: true })}
                    />
                </div>
                <div className={styles.form__divs}>
                    <label htmlFor="">Phone<span className={styles.starcolor}>*</span></label>
                </div>
                <div className={styles.form__divs}>
                    <input
                        type="text"
                        className={styles.form__inps}
                        {...register('phone', {
                            required: true,
                            pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                            minLength: 6
                        }
                        )}
                    />
                    {errors.phone && <p className={styles.error}>Phone must be a number and must contain at least 6 numbers</p>}
                </div>
                <p className={styles.starmessage}><span className={styles.starcolor}>*</span> fields are required</p>
                <div className={`${styles.form__divs} ${styles.btn__box}`}>
                    <button onClick={(e) => res(e)}>Reset</button>
                </div>
                <div className={`${styles.form__divs} ${styles.btn__box}`}>
                    <button>Save</button>
                </div>
            </form>
        </div>
    </div>
}

export default Signup;