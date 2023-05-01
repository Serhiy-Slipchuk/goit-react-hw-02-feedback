import css from './FeedbackOptions.module.scss'
import PropTypes from 'prop-types'

const FeedbackOptions = function ( {options: { leaveGoodFeedback, leaveNeutralFeedback, leaveBadFeedback }} ) {
    return (
        <div className={css.buttonThumb}>
            <button className={css.button} type="button" onClick={leaveGoodFeedback} >Good</button>
            <button className={css.button} type="button" onClick={leaveNeutralFeedback}>Neutral</button>
            <button className={css.button} type="button" onClick={leaveBadFeedback} >Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        leaveGoodFeedback: PropTypes.func.isRequired,
        leaveNeutralFeedback: PropTypes.func.isRequired,
        leaveBadFeedback: PropTypes.func.isRequired
    }),
}

export default FeedbackOptions