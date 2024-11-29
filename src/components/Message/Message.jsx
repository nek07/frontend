import React, {Component} from 'react';
import './Message.scss'

class Message extends Component {
    render() {
        const { message } = this.props;
        const parsedMessage = typeof message === 'string' ? JSON.parse(message) : message;

        if (!parsedMessage || !parsedMessage.body) {
            return <div className="Message">Invalid message</div>;
        }

        return (
            <div className="Message">
                {parsedMessage.body}
            </div>
        );
    }
}



export default Message;