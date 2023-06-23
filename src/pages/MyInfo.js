import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import styles from './MyInfo.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import background from '../image/background.jpg';
import avatar from '../image/avatar.jpg';
const cx = classNames.bind(styles);
function MyInfo() {
    const [hide, setHide] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [hide3, setHide3] = useState(true);
    const [hide4, setHide4] = useState(true);
    const [appear, setAppear] = useState(false);
    const [appear2, setAppear2] = useState(false);
    const [appear3, setAppear3] = useState(false);
    const [appear4, setAppear4] = useState(false);
    const [appear5, setAppear5] = useState(false);
    const [appear6, setAppear6] = useState(false);
    const [appear7, setAppear7] = useState(false);
    const [color, setColor] = useState('white');
    // The first line
    useEffect(() => {
        setTimeout(() => {
            setAppear(true);
        }, 3000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setHide(false);
        }, 3000);
    }, []);

    // The second line
    useEffect(() => {
        setTimeout(() => {
            setAppear2(true);
        }, 6000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setAppear3(true);
        }, 8000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setHide2(false);
        }, 8000);
    }, []);
    // The third line
    useEffect(() => {
        setTimeout(() => {
            setAppear4(true);
        }, 11000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setAppear5(true);
        }, 13000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setHide3(false);
        }, 13000);
    }, []);
    // The fourth line
    useEffect(() => {
        setTimeout(() => {
            setAppear6(true);
        }, 16000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setAppear7(true);
        }, 18000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setHide4(false);
        }, 18000);
    }, []);

    // Changed color separate
    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor((prevColor) => (prevColor === 'black' ? 'white' : 'black')); // toggle between black and white color
        }, 500);

        return () => clearInterval(intervalId); // clean up interval on component unmount
    }, []);
    return (
        <div className={cx('wrapper', 'grid')}>
            <img className={cx('background-img')} src={background} alt="background-img" />
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('intro-content', 'col', 'l-10', 'c-12')}>
                    <div className={cx('main-content')}>
                        <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                        {hide && <span style={{ fontSize: 30, fontWeight: 700, color: color }}>_</span>}
                        {appear && <span className={cx('main-inner-1')}>Once again, welcome to my Portfolio.</span>}
                    </div>
                    {appear2 && (
                        <div className={cx('main-content-1')}>
                            <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                            {hide2 && <span style={{ fontSize: 30, fontWeight: 700, color: color }}>_</span>}
                            {appear3 && (
                                <span className={cx('main-inner-2')}>
                                    My fullname is Từ Huỳnh Minh Quân( Paul), and i am a Web Developer( Front-end).
                                </span>
                            )}
                        </div>
                    )}
                    {appear4 && (
                        <div className={cx('main-content-2')}>
                            <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                            {hide3 && <span style={{ fontSize: 30, fontWeight: 700, color: color }}>_</span>}
                            {appear5 && (
                                <span className={cx('main-inner-3')}>
                                    I'm a graduate of Can Tho University. My major is "Computer Engineering".
                                </span>
                            )}
                        </div>
                    )}
                    {appear6 && (
                        <div className={cx('main-content-2')}>
                            <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                            {hide4 && <span style={{ fontSize: 30, fontWeight: 700, color: color }}>_</span>}
                            {appear7 && (
                                <span className={cx('main-inner-3')}>
                                    I have learned coding for 9 months by myself on social network. And i have some of
                                    my own projects, let's discover it.
                                    <span style={{ color: color, width: 20 }}>|</span>
                                </span>
                            )}
                        </div>
                    )}
                </div>
                <div className={cx('intro-content-mobile')}>
                    <div className={cx('main-content-mobile')}>
                        <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                        <span className={cx('main-inner-1-mobile')}>Once again, welcome to my Portfolio.</span>
                    </div>
                    <div className={cx('main-content-1-mobile')}>
                        <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                        <span className={cx('main-inner-2-mobile')}>
                            My fullname is Từ Huỳnh Minh Quân( Paul), and i am a Web Developer( Front-end).
                        </span>
                    </div>
                    <div className={cx('main-content-2-mobile')}>
                        <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                        <span className={cx('main-inner-3-mobile')}>
                            I'm a graduate of Can Tho University. My major is "Computer Engineering".
                        </span>
                    </div>
                    <div className={cx('main-content-2-mobile')}>
                        <span style={{ fontSize: 30, fontWeight: 600 }}>&gt;</span>
                        <span className={cx('main-inner-3-mobile')}>
                            I have learned coding for 9 months by myself on social network. And i have some of my own
                            projects, let's discover it.
                            <span style={{ color: color, width: 20 }}>|</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('info-content')}>
                <div
                    style={{ width: 200, height: 200, background: '#fff', borderRadius: '50%' }}
                    className={'img-wrapper'}
                >
                    <img
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        src={avatar}
                    />
                </div>
                <h1 className={cx('info-job')}>Từ Huỳnh Minh Quân</h1>
            </div>
            <Link to={'/all'} className={cx('icon-div')}>
                <FontAwesomeIcon className={cx('icon')} icon={faHandPointRight} />
            </Link>
        </div>
    );
}

export default MyInfo;
