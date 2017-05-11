import React from 'react'
import map from 'lodash/fp/map'
import moment from 'moment'

const FORMAT = 'M/YYYY';

const Experience = ({ exp, company, points }) => {
  if (company && exp.company !== company._id) {
    throw new Error('Non-matching experience and company records.')
  }

  const start = moment.utc(exp.start);
  const end = exp.end && moment.utc(exp.end);

  return (
    <div className="experience">
      <div className="full-position"><span className="position">{exp.position}</span>{company && ` at ${company.name}`}</div>
      <div className="years">
        {start.format(FORMAT)} &ndash; {end ? end.format(FORMAT) : 'Present'} | {exp.location}
      </div>
      <div className="points">
        {map(p => <div className="point" key={p._id}>{p.point}</div>)(points)}
      </div>
    </div>
  )
}

export default Experience
