import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../../../image/4.jpg';
import styles from './Skill.module.scss';
import classNames from 'classnames/bind';
import { faCss3Alt, faFigma, faGit, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Skill({ scroll2 }) {
    return (
        <div className={cx('wrapper', 'grid')}>
            <img className={cx('background-img')} src={background} alt="background-img" />
            {scroll2 && (
                <div className={cx('all-wrapper')}>
                    <div className={cx('title-div')}>
                        <h1 className={cx('title')}>Skills</h1>
                        <div className={cx('divide')}></div>
                    </div>
                    <div className={cx('container', 'row', 'no-gutters')}>
                        <div className={cx('item', 'col', 'l-10', 'l-o-1', 'm-10', 'm-o-1', 'c-10', 'c-o-1')}>
                            <div className={cx('row')}>
                                <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                    <div className={cx('inner')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faHtml5} />
                                        <span className={cx('name')}> HTML</span>
                                    </div>
                                </div>
                                <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                    <div className={cx('inner')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCss3Alt} />
                                        <span className={cx('name')}> CSS</span>
                                    </div>
                                </div>
                                <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                    <div className={cx('inner')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faJs} />
                                        <span className={cx('name')}> JavaScript</span>
                                    </div>
                                </div>
                                <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                    <div className={cx('inner')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faReact} />
                                        <span className={cx('name')}> ReactJs</span>
                                    </div>
                                </div>
                                <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                    <div className={cx('inner')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faGit} />
                                        <span className={cx('name')}> Git</span>
                                    </div>
                                </div>
                                <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                    <div className={cx('inner')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faFigma} />
                                        <span className={cx('name')}> Figma</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={cx('all-wrapper-mobile')}>
                <div className={cx('title-div')}>
                    <h1 className={cx('title')}>Skills</h1>
                    <div className={cx('divide')}></div>
                </div>
                <div className={cx('container', 'row', 'no-gutters')}>
                    <div className={cx('item', 'col', 'l-10', 'l-o-1', 'm-10', 'm-o-1', 'c-10', 'c-o-1')}>
                        <div className={cx('row')}>
                            <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                <div className={cx('inner')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHtml5} />
                                    <span className={cx('name')}> HTML</span>
                                </div>
                            </div>
                            <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                <div className={cx('inner')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faCss3Alt} />
                                    <span className={cx('name')}> CSS</span>
                                </div>
                            </div>
                            <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                <div className={cx('inner')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faJs} />
                                    <span className={cx('name')}> JavaScript</span>
                                </div>
                            </div>
                            <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                <div className={cx('inner')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faReact} />
                                    <span className={cx('name')}> ReactJs</span>
                                </div>
                            </div>
                            <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                <div className={cx('inner')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faGit} />
                                    <span className={cx('name')}> Git</span>
                                </div>
                            </div>
                            <div className={cx('item', 'col', 'l-2', 'm-4', 'c-4')}>
                                <div className={cx('inner')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faFigma} />
                                    <span className={cx('name')}> Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
