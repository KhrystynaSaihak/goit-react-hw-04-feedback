import PropTypes from 'prop-types';
import { Notify } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Notify>{message}</Notify>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
