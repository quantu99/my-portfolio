import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function Header({ setScroll, setScroll2, setScroll3, setScroll4 }) {
    useEffect(() => {
        const handleScroll = function () {
            setScroll(window.scrollY >= 250 && window.scrollY < 1200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleScroll2 = function () {
            setScroll2(window.scrollY >= 850 && window.scrollY < 1610);
        };
        window.addEventListener('scroll', handleScroll2);
        return () => {
            window.removeEventListener('scroll', handleScroll2);
        };
    }, []);
    useEffect(() => {
        const handleScroll3 = function () {
            setScroll3(window.scrollY >= 1300 && window.scrollY < 2200);
        };
        window.addEventListener('scroll', handleScroll3);
        return () => {
            window.removeEventListener('scroll', handleScroll3);
        };
    }, []);
    useEffect(() => {
        const handleScroll4 = function () {
            setScroll4(window.scrollY >= 1820 && window.scrollY < 2500);
        };
        window.addEventListener('scroll', handleScroll4);
        return () => {
            window.removeEventListener('scroll', handleScroll4);
        };
    }, []);
    const moveToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const moveToAbout = () => {
        window.scrollTo({
            top: 620,
            behavior: 'smooth',
        });
    };
    const moveToSkills = () => {
        window.scrollTo({
            top: 1050,
            behavior: 'smooth',
        });
    };
    const moveToPortfolio = () => {
        window.scrollTo({
            top: 1650,
            behavior: 'smooth',
        });
    };
    const moveToContact = () => {
        window.scrollTo({
            top: 2400,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('logo', 'col', 'l-2', 'l-o-1', 'm-2', 'm-o-1', 'c-4', 'c-o-4')}>
                    <div className={cx('logo-div')}>
                        <h1>
                            Minh<span style={{ color: 'orange' }}>Quan</span>
                        </h1>
                        <p>&lt;Portfolio/&gt;</p>
                    </div>
                </div>
                <div style={{ marginLeft: 25 }} className={cx('navigate', 'col', 'l-8', 'm-8', 'c-0')}>
                    <div className={cx('navigate-div', 'row')}>
                        <div onClick={moveToTop} className={cx('navigate-item', 'col', 'l-2-4', 'm-2', 'c-2')}>
                            Home
                        </div>
                        <div onClick={moveToAbout} className={cx('navigate-item', 'col', 'l-2-4', 'm-2', 'c-2')}>
                            About me
                        </div>
                        <div onClick={moveToSkills} className={cx('navigate-item', 'col', 'l-2-4', 'm-2', 'c-2')}>
                            Skills
                        </div>
                        <div onClick={moveToPortfolio} className={cx('navigate-item', 'col', 'l-2-4', 'm-2', 'c-2')}>
                            Portfolio
                        </div>
                        <div onClick={moveToContact} className={cx('navigate-item', 'col', 'l-2-4', 'm-2', 'c-2')}>
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
