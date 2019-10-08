import React from 'react'
import map from 'lodash/fp/map'
import moment from 'moment-timezone'
import experience from '../data/experience'
import companies from '../data/companies'
import expPoints from '../data/experience-points'

const FORMAT = 'M/YYYY';

const Experience = ({
  exp,
  company,
  points,
}: {
  exp: typeof experience[0],
  company: typeof companies[0],
  points: typeof expPoints,
}) => {
  if (company && exp.company !== company._id) {
    throw new Error('Non-matching experience and company records.')
  }

  const start = moment.tz(exp.start, 'Zulu');
  const end = exp.end && moment.tz(exp.end, 'Zulu');

  return (
    <div className="experience">
      <div className="full-position"><span className="position">{exp.position}</span>{company && ` at ${company.name}`}</div>
      <div className="years">
        {start.format(FORMAT)} &ndash; {end ? end.format(FORMAT) : 'Present'} | {exp.location}
      </div>
      <div className="points">
        {map((p: typeof expPoints[0]) => <div className="point" key={p._id}>{p.point}</div>)(points)}
      </div>
    </div>
  )
}

export default Experience
