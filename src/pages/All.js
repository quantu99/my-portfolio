import About from '../components/Layouts/About/About';
import Contact from '../components/Layouts/Contact/Contact';
import Header from '../components/Layouts/Header/Header';
import Portfilio from '../components/Layouts/Portfilio/Portfilio';
import Skill from '../components/Layouts/Skill/Skill';
import Wall from '../components/Layouts/Wall/Wall';
import styles from './All.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function All({ scroll, setScroll, scroll2, setScroll2, scroll3, setScroll3, scroll4, setScroll4 }) {
    return (
        <div className={cx('wrapper')}>
            <Header setScroll={setScroll} setScroll2={setScroll2} setScroll3={setScroll3} setScroll4={setScroll4} />
            <Wall />
            <About scroll={scroll} />
            <Skill scroll2={scroll2} />
            <Portfilio scroll3={scroll3} />
            <Contact scroll4={scroll4} />
        </div>
    );
}

export default All;
