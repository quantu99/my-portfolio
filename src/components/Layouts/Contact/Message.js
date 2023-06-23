import { useState, useEffect } from 'react';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import rules from './rules';
const cx = classNames.bind(styles);
function Message({ sendMessage }) {
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setErrors(rules(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            sendMessage(true);
        }
    }, [errors]);
    return (
        <div>
            <div className={cx('input-div')}>
                <input
                    value={values.fullname}
                    onChange={handleChange}
                    type="name"
                    name="fullname"
                    className={cx('input')}
                    placeholder="Enter your name..."
                />
                {errors.fullname && <p className={cx('error-message')}>{errors.fullname}</p>}
            </div>
            <div className={cx('input-div')}>
                <input
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    className={cx('input')}
                    placeholder="Enter your email..."
                />
                {errors.email && <p className={cx('error-message')}>{errors.email}</p>}
            </div>
            <div className={cx('input-div')}>
                <input
                    value={values.message}
                    onChange={handleChange}
                    type="message"
                    name="message"
                    className={cx('input', 'mess-input')}
                    placeholder="Send the mess what you want to say with me ^^..."
                />
                {errors.message && <p className={cx('error-message')}>{errors.message}</p>}
            </div>
            <button onClick={handleLogin} className={cx('btn')}>
                <p className={cx('btn-content')}>SEND MESSAGE</p>
            </button>
        </div>
    );
}

export default Message;
