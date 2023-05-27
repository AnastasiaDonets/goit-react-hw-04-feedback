import PropTypes from 'prop-types';

export const Notifacation = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
