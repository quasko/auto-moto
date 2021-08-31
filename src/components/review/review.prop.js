import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  dignity: PropTypes.string.isRequired,
  disadvantages: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}).isRequired;
