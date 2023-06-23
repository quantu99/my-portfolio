import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { faLocationArrow, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import MessageFinal from './MessageFinal';
const cx = classNames.bind(styles);
function Contact({ scroll4 }) {
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('contact', 'l-6', 'c-12')}>
                    <div className={cx('row', 'no-gutters')}>
                        {scroll4 && (
                            <div className={cx('contact-div', 'col', 'l-10', 'l-o-2', 'c-10', 'c-o-1')}>
                                <div className={cx('header-div')}>
                                    <h1 className={cx('header')}>Connect with me</h1>
                                    <div className={cx('divide')}></div>
                                </div>
                                <ul className={cx('contact-list')}>
                                    <li className={cx('list-item')}>
                                        <FontAwesomeIcon className={cx('list-icon')} icon={faPhoneVolume} />
                                        <p>
                                            <span style={{ color: '#ffa735' }}>(+84) 906383497</span> or{' '}
                                            <span style={{ color: '#ffa735' }}>(+84) 889019638</span>
                                        </p>
                                    </li>
                                    <li className={cx('list-item', 'list-item-hover')}>
                                        <FontAwesomeIcon className={cx('list-icon')} icon={faPaperPlane} />
                                        <p>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none' }}
                                                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                callmequantu@gmail.com
                                            </a>
                                        </p>
                                    </li>
                                    <li className={cx('list-item', 'list-item-hover')}>
                                        <FontAwesomeIcon className={cx('list-icon')} icon={faLocationArrow} />
                                        <p>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none' }}
                                                href="https://www.google.com/maps/d/u/0/viewer?mid=1XFW-uHReJFO9LRijcIvRSEcWS6s&hl=en_US&ll=10.043179927791119%2C105.7785988811035&z=13"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Can Tho City, VietNam
                                            </a>
                                        </p>
                                    </li>
                                    <li className={cx('list-item', 'list-item-hover')}>
                                        <FontAwesomeIcon className={cx('list-icon')} icon={faGithub} />
                                        <p>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none' }}
                                                href="https://github.com/quantu99"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                github.com/quantu99
                                            </a>
                                        </p>
                                    </li>

                                    <li className={cx('list-item', 'list-item-hover')}>
                                        <FontAwesomeIcon className={cx('list-icon')} icon={faLinkedin} />
                                        <p>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none' }}
                                                href="https://www.linkedin.com/in/qu%C3%A2n-t%E1%BB%AB-14809527b/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                lindekin.com/quantu
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <div className={cx('contact-div-mobile', 'col', 'l-10', 'l-o-2', 'c-10', 'c-o-1')}>
                            <div className={cx('header-div')}>
                                <h1 className={cx('header')}>Connect with me</h1>
                                <div className={cx('divide')}></div>
                            </div>
                            <ul className={cx('contact-list')}>
                                <li className={cx('list-item')}>
                                    <FontAwesomeIcon className={cx('list-icon')} icon={faPhoneVolume} />
                                    <p>
                                        <span style={{ color: '#ffa735' }}>(+84) 906383497</span> or{' '}
                                        <span style={{ color: '#ffa735' }}>(+84) 889019638</span>
                                    </p>
                                </li>
                                <li className={cx('list-item', 'list-item-hover')}>
                                    <FontAwesomeIcon className={cx('list-icon')} icon={faPaperPlane} />
                                    <p>
                                        <a
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            callmequantu@gmail.com
                                        </a>
                                    </p>
                                </li>
                                <li className={cx('list-item', 'list-item-hover')}>
                                    <FontAwesomeIcon className={cx('list-icon')} icon={faLocationArrow} />
                                    <p>
                                        <a
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                            href="https://www.google.com/maps/d/u/0/viewer?mid=1XFW-uHReJFO9LRijcIvRSEcWS6s&hl=en_US&ll=10.043179927791119%2C105.7785988811035&z=13"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Can Tho City, VietNam
                                        </a>
                                    </p>
                                </li>
                                <li className={cx('list-item', 'list-item-hover')}>
                                    <FontAwesomeIcon className={cx('list-icon')} icon={faGithub} />
                                    <p>
                                        <a
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                            href="https://github.com/quantu99"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            github.com/quantu99
                                        </a>
                                    </p>
                                </li>

                                <li className={cx('list-item', 'list-item-hover')}>
                                    <FontAwesomeIcon className={cx('list-icon')} icon={faLinkedin} />
                                    <p>
                                        <a
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                            href="https://www.linkedin.com/in/qu%C3%A2n-t%E1%BB%AB-14809527b/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            lindekin.com/quantu
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('message', 'l-6', 'c-12')}>
                    <div className={cx('row', 'no-gutters')}>
                        {scroll4 && (
                            <div className={cx('message-div', 'col', 'l-10', 'l-o-1', 'c-10', 'c-o-1')}>
                                <MessageFinal />
                            </div>
                        )}
                        <div className={cx('message-div-mobile', 'col', 'l-10', 'l-o-1', 'c-10', 'c-o-1')}>
                            <MessageFinal />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('end')}>
                <p>Copyright © 2023 Callmequantu All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Contact;
