import background from '../../../image/3.jpg';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function About({ scroll }) {
    return (
        <div className={cx('wrapper', 'grid')}>
            <img className={cx('background-img')} src={background} alt="background-img" />
            {scroll && (
                <div className={cx('all-wrapper')}>
                    <div className={cx('title-div')}>
                        <h1 className={cx('title')}>About me</h1>
                        <div className={cx('devide')}></div>
                    </div>
                    <div className={cx('container', 'row', 'no-gutters')}>
                        <div className={cx('info', 'col', 'l-4', 'l-o-1', 'm-10', 'm-o-1', 'c-10', 'c-o-1')}>
                            <div className={cx('header-div')}>
                                <h1 className={cx('header')}>Information</h1>
                                <div className={cx('divide-2')}></div>
                            </div>

                            <ul style={{ listStyle: 'none', marginTop: 10 }} className={cx('list')}>
                                <li className={cx('list-item')}>
                                    <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                        I.{' '}
                                    </span>{' '}
                                    <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Full name:</span>
                                    <span style={{ display: 'inline-block' }}> Từ Huỳnh Minh Quân.</span>
                                </li>
                                <li className={cx('list-item')}>
                                    <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                        II.{' '}
                                    </span>{' '}
                                    <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Eng name:</span>{' '}
                                    <span> Paul.</span>
                                </li>
                                <li className={cx('list-item')}>
                                    <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                        III.{' '}
                                    </span>{' '}
                                    <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Birth:</span>{' '}
                                    <span> 01/11/1999.</span>
                                </li>
                                <li className={cx('list-item')}>
                                    <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                        IV.{' '}
                                    </span>{' '}
                                    <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Address:</span>{' '}
                                    <span>Can Tho City</span>
                                </li>
                                <li className={cx('list-item')}>
                                    <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                        V.{' '}
                                    </span>{' '}
                                    <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Favorite:</span>{' '}
                                    <span> Playing sports, reading books, cooking & listening podcast</span>
                                </li>
                            </ul>

                            <div className={cx('education')}>
                                <div className={cx('header-div')}>
                                    <h1 className={cx('header')}>Education</h1>
                                    <div className={cx('divide-2')}></div>
                                </div>
                                <div className={cx('detail')}>
                                    <p className={cx('time')}>08/2017- 04/2022</p>
                                    <p className={cx('major')}>Computer Engineering- Can Tho University</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('edu', 'col', 'l-5', 'l-o-1', 'm-10', 'm-o-1', 'c-10', 'c-o-1')}>
                            <div className={cx('header-div')}>
                                <h1 className={cx('header')}>Introduce</h1>
                                <div className={cx('divide-2')}></div>
                            </div>
                            <p className={cx('info-paragraph')}>
                                I have learned coding from September 2022 up to now and i spent all of my time to work
                                with HTML, CSS, JavaScript and React. Although my major is just related for this job
                                (Web Developer) for a little, but i enjoy and have passion for searching and learning
                                everyday. My goal is pursuing and growing a career in the field of web development.
                                pursuing and growing a career in the field of web development.
                                <span style={{ display: 'block', marginTop: 10 }}>
                                    To describing myself, i especially impressed on strange experiences, like the new
                                    books, new trips, and anything news. And i dream of showing off all of them to
                                    everyone by my own projects. pursuing and growing a career in the field of web
                                    development.{' '}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <div className={cx('all-wrapper-mobile')}>
                <div className={cx('title-div')}>
                    <h1 className={cx('title')}>About me</h1>
                    <div className={cx('devide')}></div>
                </div>
                <div className={cx('container', 'row', 'no-gutters')}>
                    <div className={cx('info', 'col', 'l-4', 'l-o-1', 'm-10', 'm-o-1', 'c-10', 'c-o-1')}>
                        <div className={cx('header-div')}>
                            <h1 className={cx('header')}>Information</h1>
                            <div className={cx('divide-2')}></div>
                        </div>

                        <ul style={{ listStyle: 'none', marginTop: 10 }} className={cx('list')}>
                            <li className={cx('list-item')}>
                                <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                    I.{' '}
                                </span>{' '}
                                <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Full name:</span>
                                <span style={{ display: 'inline-block' }}> Từ Huỳnh Minh Quân.</span>
                            </li>
                            <li className={cx('list-item')}>
                                <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                    II.{' '}
                                </span>{' '}
                                <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Eng name:</span>{' '}
                                <span> Paul.</span>
                            </li>
                            <li className={cx('list-item')}>
                                <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                    III.{' '}
                                </span>{' '}
                                <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Birth:</span>{' '}
                                <span> 01/11/1999.</span>
                            </li>
                            <li className={cx('list-item')}>
                                <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                    IV.{' '}
                                </span>{' '}
                                <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Address:</span>{' '}
                                <span>Can Tho City</span>
                            </li>
                            <li className={cx('list-item')}>
                                <span style={{ color: '#eeeeee', fontWeight: 600, paddingRight: 5, minWidth: 30 }}>
                                    V.{' '}
                                </span>{' '}
                                <span style={{ color: '#eeeeee', fontWeight: 600, minWidth: 110 }}>Favorite:</span>{' '}
                                <span> Playing sports, reading books, cooking & listening podcast</span>
                            </li>
                        </ul>

                        <div className={cx('education')}>
                            <div className={cx('header-div')}>
                                <h1 className={cx('header')}>Education</h1>
                                <div className={cx('divide-2')}></div>
                            </div>
                            <div className={cx('detail')}>
                                <p className={cx('time')}>08/2017- 04/2022</p>
                                <p className={cx('major')}>Computer Engineering- Can Tho University</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('edu', 'col', 'l-5', 'l-o-1', 'm-10', 'm-o-1', 'c-10', 'c-o-1')}>
                        <div className={cx('header-div')}>
                            <h1 className={cx('header')}>Introduce</h1>
                            <div className={cx('divide-2')}></div>
                        </div>
                        <p className={cx('info-paragraph')}>
                            I have learned coding from September 2022 up to now and i spent all of my time to work with
                            HTML, CSS, JavaScript and React. Although my major is just related for this job (Web
                            Developer) for a little, but i enjoy and have passion for searching and learning everyday.
                            My goal is pursuing and growing a career in the field of web development. pursuing and
                            growing a career in the field of web development.
                            <span style={{ display: 'block', marginTop: 10 }}>
                                To describing myself, i especially impressed on strange experiences, like the new books,
                                new trips, and anything news. And i dream of showing off all of them to everyone by my
                                own projects. pursuing and growing a career in the field of web development.{' '}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
