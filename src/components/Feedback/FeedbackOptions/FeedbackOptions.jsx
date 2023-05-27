import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.optionsBox}>
      {options.map(key => {
        return (
          <button
            className={css.button}
            type="button"
            key={key}
            onClick={() => onLeaveFeedback(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
