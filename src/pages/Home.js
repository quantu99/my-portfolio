import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFaceLaughBeam, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Home() {
    const [color, setColor] = useState('white');
    const [appear, setAppear] = useState(false);
    const [appear2, setAppear2] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAppear(true);
        }, 4000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setAppear2(true);
        }, 11000);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor((prevColor) => (prevColor === '#0a0e16' ? 'white' : '#0a0e16')); // toggle between black and white color
        }, 500);

        return () => clearInterval(intervalId); // clean up interval on component unmount
    }, []);
    return (
        <div className="App">
            <div className={cx('grid', 'all-wrapper')}>
                <div className={cx('row', 'no-gutters', 'wrapper')}>
                    <div className={cx('col', 'l-6', 'c-6', 'left')}>
                        <div className={cx('content-left')}>
                            <h1 className={cx('content-left-upper')}>PORT</h1>
                        </div>
                        <div className={cx('intro-paragraph')}>
                            <div style={{ minHeight: '50%' }} className={cx('p-div')}>
                                <p>&lt; Hello, welcome to my Portfolio. My name is Minh Quân.</p>
                                {appear && (
                                    <p style={{ marginLeft: 10 }}>
                                        I am a Web developer. Let's find out more and connect with me /&gt;
                                        <FontAwesomeIcon
                                            icon={faFaceLaughBeam}
                                            style={{ paddingLeft: 5, paddingRight: 5, fontSize: 20 }}
                                        />
                                        <span style={{ color: color, fontSize: 20, fontStyle: 'normal' }}>|</span>
                                    </p>
                                )}
                            </div>

                            <Link to={'/info'} className={cx('icon-div')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faHandPointRight} />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('col', 'l-6', 'c-6', 'right')}>
                        <div className={cx('content-right')}>
                            <h1 className={cx('content-right-upper')}>FOLIO</h1>
                        </div>
                        <div className={cx('right-paragraph')}>
                            <p>
                                Designed by:
                                <span> Quân Từ ( Paul)</span>
                            </p>
                        </div>
                        <div className={cx('intro-paragraph-2-div')}>
                            <div className={cx('intro-paragraph-2')}>
                                <h1>Contact me</h1>
                                <ul className={cx('right-list')}>
                                    <li className={cx('list-item')}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </li>
                                    <li className={cx('list-item')}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </li>
                                    <li className={cx('list-item')}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                    <li className={cx('list-item')}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </li>
                                    <li className={cx('list-item')}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row', 'no-gutters')}>
                    <div className={cx('mobile-content', 'col', 'c-5', 'c-o-1')}>
                        <div className={cx('content-mobile-wrapper')}>
                            <div className={cx('intro-paragraph-mobile')}>
                                <div style={{ minHeight: '25%' }} className={cx('p-div')}>
                                    <p>&lt; Hello, welcome to my Portfolio. My name is Minh Quân.</p>

                                    <p style={{ marginLeft: 10 }}>
                                        I am a Web developer. Let's find out more and connect with me /&gt;
                                        <FontAwesomeIcon
                                            icon={faFaceLaughBeam}
                                            style={{ paddingLeft: 5, paddingRight: 5, fontSize: 20 }}
                                        />
                                        <span style={{ color: color, fontSize: 20, fontStyle: 'normal' }}>|</span>
                                    </p>
                                </div>

                                <Link to={'/info'} className={cx('icon-div')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHandPointRight} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('contact-mobile')}>
                    <ul className={cx('contact-mobile-list')}>
                        <li className={cx('mobile-list-item')}>
                            <a
                                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon className={cx('mobile-icon')} icon={faPaperPlane} />
                            </a>
                        </li>
                        <li className={cx('mobile-list-item')}>
                            <a href="https://github.com/quantu99" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className={cx('mobile-icon')} icon={faGithub} />
                            </a>
                        </li>
                        <li className={cx('mobile-list-item')}>
                            <a
                                href="https://www.linkedin.com/in/qu%C3%A2n-t%E1%BB%AB-14809527b/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon className={cx('mobile-icon')} icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
