import css from './Section.module.scss'
import PropTypes from 'prop-types'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'
import Statistics from 'components/Statistics/Statistics'

const Section = function ({ title, statistics, options }) {
    return (
        <div className={css.section}>
            <h1 className={css.title}>{title}</h1>
            <h2 className={css.text}>Please leave feedback</h2>
            <FeedbackOptions options={options} />
            <h2 className={css.text}>Statistics</h2>
            <Statistics statistics={statistics} />
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    statistics: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
}

export default Section