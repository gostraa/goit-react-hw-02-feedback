import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <ul>
          {options.map(id => {
            return (
              <li key={id}>
                <button type="button" onClick={() => onLeaveFeedback(id)}>
                  {id}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
