import check from '../assets/checkmark.svg';
import PropTypes from 'prop-types';
import '../styles/Checkmark.css';

const Checkmark = () => {
  return (
    <div>
          <img className="image-size" src={check} alt="Checkmark" />
    </div>
  )
}

Checkmark.propTypes = {
  done: PropTypes.bool
}

export default Checkmark;