import React from 'react'
import map from 'lodash/fp/map'

const Experience = ({ exp, company, points }) => {
    if (exp.company !== company._id) {
        throw new Error('Non-matching experience and company records.')
    }

    const start = new Date(exp.start)
    const end = exp.end ? new Date(exp.end) : exp.end

    const startMonth = start.getMonth() + 1
    const startYear = start.getFullYear()

    let endMonth, endYear
    if (end) {
        endMonth = end.getMonth() + 1
        endYear = end.getFullYear()
    }

    return (
      <div>
        <div>{company.name}</div>
        <div>{startMonth}/{startYear} &ndash; {end ? endMonth+'/'+endYear : 'Present'}</div>
        {map(p => <div key={p._id}>{p.point}</div>)(points)}
      </div>
    )
}

export default Experience
