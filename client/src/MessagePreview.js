import React from 'react';

export default class MessagePreview extends React.Component {

  // TODO conver time to more readable format

  render() {
    const {
      to,
      time,
      text,
    } = this.props;
    return (
      <div className="message-preview-container">
        <h4 className="message-to-field">to: {to}</h4>
        <h4 className="message-time-field">{time}</h4>
        <div className="message-text-field">{text}</div>
      </div>
    );
  }
}
