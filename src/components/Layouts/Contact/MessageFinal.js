import Message from './Message';
import MessageSucess from './MessageSuccess';
import { useState } from 'react';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MessageFinal() {
    const [messageIsSend, setMessageIsSend] = useState(false);
    const sendMessage = () => {
        setMessageIsSend(true);
    };
    return (
        <div className={cx('message-wrapper')}>
            {!messageIsSend ? <Message sendMessage={sendMessage} /> : <MessageSucess />}
        </div>
    );
}

export default MessageFinal;
