import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function MessageSucess() {
    return (
        <div className={cx('success-wrapper')}>
            Thank you for your message, i will reply you soon!
            <FontAwesomeIcon style={{ marginLeft: 5, color: 'red' }} icon={faHeart} />
        </div>
    );
}

export default MessageSucess;
