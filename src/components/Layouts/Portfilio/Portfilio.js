import classNames from 'classnames/bind';
import styles from './Portfilio.module.scss';
import sneaker from '../../../image/sneaker.gif';
import travel from '../../../image/travel.gif';
import portfolio from '../../../image/portfolio.gif';
import men from '../../../image/men.gif';
import background from '../../../image/2.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Portfilio({ scroll3 }) {
    const [appear, setAppear] = useState(true);
    const [appear2, setAppear2] = useState(false);
    const [appear3, setAppear3] = useState(false);
    const [appear4, setAppear4] = useState(false);
    const handleClick = () => {
        setAppear(false);
        setAppear2(true);
        setAppear3(false);
        setAppear4(false);
    };
    const handleClick2 = () => {
        setAppear(false);
        setAppear2(false);
        setAppear3(true);
        setAppear4(false);
    };
    const handleClick3 = () => {
        setAppear(false);
        setAppear2(false);
        setAppear3(false);
        setAppear4(true);
    };
    const handleClick4 = () => {
        setAppear(true);
        setAppear2(false);
        setAppear3(false);
        setAppear4(false);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <img className={cx('background-img')} src={background} alt="background-img" />
            {scroll3 && (
                <div className={cx('pc')}>
                    {appear && (
                        <div className={cx('all-wrapper')}>
                            <div className={cx('all-wrapper-2')}>
                                <div className={cx('header-div')}>
                                    <h1 style={{ margin: 0 }} className={cx('header')}>
                                        Portfolio
                                    </h1>
                                    <div className={cx('divide')}></div>
                                </div>
                                <div className={cx('container', 'row', 'no-gutters')}>
                                    <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <div className={cx('title-div')}>
                                            <h1 className={cx('title')}>Sneakers website</h1>
                                            <div className={cx('divide-2')}></div>
                                        </div>
                                        <div className={cx('middle-div')}>
                                            <p className={cx('description')}>
                                                This is my first project that i finished after following tutorials and
                                                courses on Social network. This is an E-commerce website, it was built
                                                by ReactJs. Its feature are: Products listing, products detail,
                                                add/remove item to/from shopping cart.
                                            </p>
                                            <ul className={cx('tech-list')}>
                                                <li className={cx('list-item')}>• ReactJs</li>
                                                <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                                <li className={cx('list-item')}>• JavaScript</li>
                                            </ul>
                                        </div>
                                        <div className={cx('btn-div')}>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://quantu99.github.io/sneaker-ui/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Live
                                                </a>
                                            </button>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://github.com/quantu99/sneaker-ui/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Source
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <img src={sneaker} alt="sneaker-img" />
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    onClick={handleClick3}
                                    className={cx('icon', 'left')}
                                    icon={faCaretLeft}
                                />
                                <FontAwesomeIcon
                                    onClick={handleClick}
                                    className={cx('icon', 'right')}
                                    icon={faCaretRight}
                                />
                            </div>
                        </div>
                    )}
                    {appear2 && (
                        <div className={cx('all-wrapper')}>
                            <div className={cx('all-wrapper-2')}>
                                <div className={cx('header-div')}>
                                    <h1 style={{ margin: 0 }} className={cx('header')}>
                                        Portfolio
                                    </h1>
                                    <div className={cx('divide')}></div>
                                </div>
                                <div className={cx('container', 'row', 'no-gutters')}>
                                    <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <div className={cx('title-div')}>
                                            <h1 className={cx('title')}>Travel website</h1>
                                            <div className={cx('divide-2')}></div>
                                        </div>
                                        <div className={cx('middle-div')}>
                                            <p className={cx('description')}>
                                                A travel website where visitors can get detail of places such as:
                                                History, beauty,... and more informations about the place where they
                                                want. It was built by ReactJs.
                                            </p>
                                            <ul className={cx('tech-list')}>
                                                <li className={cx('list-item')}>• ReactJs</li>
                                                <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                                <li className={cx('list-item')}>• JavaScript</li>
                                            </ul>
                                        </div>
                                        <div className={cx('btn-div')}>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://quantu99.github.io/travel-ui/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Live
                                                </a>
                                            </button>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://github.com/quantu99/travel-ui"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Source
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <img src={travel} alt="sneaker-img" />
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    onClick={handleClick4}
                                    className={cx('icon', 'left')}
                                    icon={faCaretLeft}
                                />
                                <FontAwesomeIcon
                                    onClick={handleClick2}
                                    className={cx('icon', 'right')}
                                    icon={faCaretRight}
                                />
                            </div>
                        </div>
                    )}
                    {appear3 && (
                        <div className={cx('all-wrapper')}>
                            <div className={cx('all-wrapper-2')}>
                                <div className={cx('header-div')}>
                                    <h1 style={{ margin: 0 }} className={cx('header')}>
                                        Portfolio
                                    </h1>
                                    <div className={cx('divide')}></div>
                                </div>
                                <div className={cx('container', 'row', 'no-gutters')}>
                                    <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <div className={cx('title-div')}>
                                            <h1 className={cx('title')}>Portfolio website</h1>
                                            <div className={cx('divide-2')}></div>
                                        </div>
                                        <div className={cx('middle-div')}>
                                            <p className={cx('description')}>
                                                An website that i can introduce myself shortly through it. It contains
                                                all of mine as: My informations, my projects, contact
                                                information,...This was built by ReactJs.
                                            </p>
                                            <ul className={cx('tech-list')}>
                                                <li className={cx('list-item')}>• ReactJs</li>
                                                <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                                <li className={cx('list-item')}>• JavaScript</li>
                                            </ul>
                                        </div>
                                        <div className={cx('btn-div')}>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://quantu99.github.io/my-portfolio/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Live
                                                </a>
                                            </button>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://github.com/quantu99/my-portfolio"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Source
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <img src={portfolio} alt="portfolio-img" />
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    onClick={handleClick}
                                    className={cx('icon', 'left')}
                                    icon={faCaretLeft}
                                />
                                <FontAwesomeIcon
                                    onClick={handleClick3}
                                    className={cx('icon', 'right')}
                                    icon={faCaretRight}
                                />
                            </div>
                        </div>
                    )}
                    {appear4 && (
                        <div className={cx('all-wrapper')}>
                            <div className={cx('all-wrapper-2')}>
                                <div className={cx('header-div')}>
                                    <h1 style={{ margin: 0 }} className={cx('header')}>
                                        Portfolio
                                    </h1>
                                    <div className={cx('divide')}></div>
                                </div>
                                <div className={cx('container', 'row', 'no-gutters')}>
                                    <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <div className={cx('title-div')}>
                                            <h1 className={cx('title')}>Men's Era</h1>
                                            <div className={cx('divide-2')}></div>
                                        </div>
                                        <div className={cx('middle-div')}>
                                            <p className={cx('description')}>
                                                An second E-commerce website of mine. This project has features as: Sign
                                                in; Sign up; Log out; Manage user’s cart, wist list; Manage user’s
                                                information. And it still developed to add more abilities in future.
                                            </p>
                                            <div style={{ display: 'flex' }}>
                                                <ul className={cx('tech-list')}>
                                                    <p
                                                        style={{
                                                            color: 'white',
                                                            fontWeight: 600,
                                                            paddingBottom: '5px',
                                                        }}
                                                    >
                                                        Front-end
                                                    </p>
                                                    <li className={cx('list-item')}>• ReactJs</li>
                                                    <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                                    <li className={cx('list-item')}>• JavaScript</li>
                                                </ul>
                                                <ul style={{ paddingLeft: '50px' }} className={cx('tech-list')}>
                                                    <p
                                                        style={{
                                                            color: 'white',
                                                            fontWeight: 600,
                                                            paddingBottom: '5px',
                                                        }}
                                                    >
                                                        Back-end
                                                    </p>
                                                    <li className={cx('list-item')}>• NodeJs(Express)</li>
                                                    <li className={cx('list-item')}>• Mongodb</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cx('btn-div')}>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://men-era.vercel.app/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Live
                                                </a>
                                            </button>
                                            <button className={cx('btn')}>
                                                <a
                                                    style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                    href="https://github.com/quantu99/MenEra"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Source
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                        <img src={men} alt="portfolio-img" />
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    onClick={handleClick2}
                                    className={cx('icon', 'left')}
                                    icon={faCaretLeft}
                                />
                                <FontAwesomeIcon
                                    onClick={handleClick4}
                                    className={cx('icon', 'right')}
                                    icon={faCaretRight}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
            <div className={cx('mobile')}>
                {appear && (
                    <div className={cx('all-wrapper')}>
                        <div className={cx('all-wrapper-2')}>
                            <div className={cx('header-div')}>
                                <h1 style={{ margin: 0 }} className={cx('header')}>
                                    Portfolio
                                </h1>
                                <div className={cx('divide')}></div>
                            </div>
                            <div className={cx('container', 'row', 'no-gutters')}>
                                <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <div className={cx('title-div')}>
                                        <h1 className={cx('title')}>Sneakers website</h1>
                                        <div className={cx('divide-2')}></div>
                                    </div>
                                    <div className={cx('middle-div')}>
                                        <p className={cx('description')}>
                                            This is my first project that i finished after following tutorials and
                                            courses on Social network. This is an E-commerce website, it was built by
                                            ReactJs. Its feature are: Products listing, products detail, add/remove item
                                            to/from shopping cart.
                                        </p>
                                        <ul className={cx('tech-list')}>
                                            <li className={cx('list-item')}>• ReactJs</li>
                                            <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                            <li className={cx('list-item')}>• JavaScript</li>
                                        </ul>
                                    </div>
                                    <div className={cx('btn-div')}>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://quantu99.github.io/sneaker-ui/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Live
                                            </a>
                                        </button>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://github.com/quantu99/sneaker-ui/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Source
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <img src={sneaker} alt="sneaker-img" />
                                </div>
                            </div>
                            <FontAwesomeIcon onClick={handleClick3} className={cx('icon', 'left')} icon={faCaretLeft} />
                            <FontAwesomeIcon
                                onClick={handleClick}
                                className={cx('icon', 'right')}
                                icon={faCaretRight}
                            />
                        </div>
                    </div>
                )}
                {appear2 && (
                    <div className={cx('all-wrapper')}>
                        <div className={cx('all-wrapper-2')}>
                            <div className={cx('header-div')}>
                                <h1 style={{ margin: 0 }} className={cx('header')}>
                                    Portfolio
                                </h1>
                                <div className={cx('divide')}></div>
                            </div>
                            <div className={cx('container', 'row', 'no-gutters')}>
                                <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <div className={cx('title-div')}>
                                        <h1 className={cx('title')}>Travel website</h1>
                                        <div className={cx('divide-2')}></div>
                                    </div>
                                    <div className={cx('middle-div')}>
                                        <p className={cx('description')}>
                                            A travel website where visitors can get detail of places such as: History,
                                            beauty,... and more informations about the place where they want. It was
                                            built by ReactJs.
                                        </p>
                                        <ul className={cx('tech-list')}>
                                            <li className={cx('list-item')}>• ReactJs</li>
                                            <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                            <li className={cx('list-item')}>• JavaScript</li>
                                        </ul>
                                    </div>
                                    <div className={cx('btn-div')}>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://quantu99.github.io/travel-ui/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Live
                                            </a>
                                        </button>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://github.com/quantu99/travel-ui"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Source
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <img src={travel} alt="sneaker-img" />
                                </div>
                            </div>
                            <FontAwesomeIcon onClick={handleClick4} className={cx('icon', 'left')} icon={faCaretLeft} />
                            <FontAwesomeIcon
                                onClick={handleClick2}
                                className={cx('icon', 'right')}
                                icon={faCaretRight}
                            />
                        </div>
                    </div>
                )}
                {appear3 && (
                    <div className={cx('all-wrapper')}>
                        <div className={cx('all-wrapper-2')}>
                            <div className={cx('header-div')}>
                                <h1 style={{ margin: 0 }} className={cx('header')}>
                                    Portfolio
                                </h1>
                                <div className={cx('divide')}></div>
                            </div>
                            <div className={cx('container', 'row', 'no-gutters')}>
                                <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <div className={cx('title-div')}>
                                        <h1 className={cx('title')}>Portfolio website</h1>
                                        <div className={cx('divide-2')}></div>
                                    </div>
                                    <div className={cx('middle-div')}>
                                        <p className={cx('description')}>
                                            An website that i can introduce myself shortly through it. It contains all
                                            of mine as: My informations, my projects, contact information,...This was
                                            built by ReactJs.
                                        </p>
                                        <ul className={cx('tech-list')}>
                                            <li className={cx('list-item')}>• ReactJs</li>
                                            <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                            <li className={cx('list-item')}>• JavaScript</li>
                                        </ul>
                                    </div>
                                    <div className={cx('btn-div')}>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://quantu99.github.io/my-portfolio/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Live
                                            </a>
                                        </button>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://github.com/quantu99/my-portfolio"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Source
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <img src={portfolio} alt="portfolio-img" />
                                </div>
                            </div>
                            <FontAwesomeIcon onClick={handleClick} className={cx('icon', 'left')} icon={faCaretLeft} />
                            <FontAwesomeIcon
                                onClick={handleClick3}
                                className={cx('icon', 'right')}
                                icon={faCaretRight}
                            />
                        </div>
                    </div>
                )}
                {appear4 && (
                    <div className={cx('all-wrapper')}>
                        <div className={cx('all-wrapper-2')}>
                            <div className={cx('header-div')}>
                                <h1 style={{ margin: 0 }} className={cx('header')}>
                                    Portfolio
                                </h1>
                                <div className={cx('divide')}></div>
                            </div>
                            <div className={cx('container', 'row', 'no-gutters')}>
                                <div className={cx('description-div', 'col', 'l-4', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <div className={cx('title-div')}>
                                        <h1 className={cx('title')}>Men's Era</h1>
                                        <div className={cx('divide-2')}></div>
                                    </div>
                                    <div className={cx('middle-div')}>
                                        <p className={cx('description')}>
                                            An second E-commerce website of mine. This project has features as: Sign in;
                                            Sign up; Log out; Manage user’s cart, wist list; Manage user’s information.
                                            And it still developed to add more abilities in future.
                                        </p>
                                        <div style={{ display: 'flex' }}>
                                            <ul className={cx('tech-list')}>
                                                <p
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        paddingBottom: '5px',
                                                    }}
                                                >
                                                    Front-end
                                                </p>
                                                <li className={cx('list-item')}>• ReactJs</li>
                                                <li className={cx('list-item')}>• HTML, CSS(SCSS)</li>
                                                <li className={cx('list-item')}>• JavaScript</li>
                                            </ul>
                                            <ul style={{ paddingLeft: '50px' }} className={cx('tech-list')}>
                                                <p
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        paddingBottom: '5px',
                                                    }}
                                                >
                                                    Back-end
                                                </p>
                                                <li className={cx('list-item')}>• NodeJs(Express)</li>
                                                <li className={cx('list-item')}>• Mongodb</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={cx('btn-div')}>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://men-era.vercel.app/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Live
                                            </a>
                                        </button>
                                        <button className={cx('btn')}>
                                            <a
                                                style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
                                                href="https://github.com/quantu99/MenEra"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Source
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('img-div', 'col', 'l-5', 'l-o-1', 'c-10', 'c-o-1')}>
                                    <img src={men} alt="portfolio-img" />
                                </div>
                            </div>
                            <FontAwesomeIcon onClick={handleClick2} className={cx('icon', 'left')} icon={faCaretLeft} />
                            <FontAwesomeIcon
                                onClick={handleClick4}
                                className={cx('icon', 'right')}
                                icon={faCaretRight}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfilio;
