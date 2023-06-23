import styles from './Wall.module.scss';
import classNames from 'classnames/bind';
import img from '../../../image/avatar.jpg';
const cx = classNames.bind(styles);
function Wall() {
    const moveToAbout = () => {
        window.scrollTo({
            top: 620,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('quotes', 'col', 'l-6', 'l-o-1', 'm-6', 'm-o-1', 'c-10', 'c-o-1')}>
                    <div className={cx('quotes-div')}>
                        <h1>" Love for the strange things & perfect experiences"</h1>
                        <p>
                            I have a love for the beauty,strange things, perfect experiences. And i wanna put all of
                            them into my website.
                        </p>
                        <div className={cx('devide')}></div>
                    </div>
                    <button onClick={moveToAbout} className={cx('btn')}>
                        About me !
                    </button>
                </div>
                <div className={cx('avatar', 'col', 'l-5')}>
                    <div className={cx('img-div', 'mask', 'mask_type4', 'mask_type4-a1', 'page__title')}>
                        <img className={cx('mask__img')} src={img} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wall;
