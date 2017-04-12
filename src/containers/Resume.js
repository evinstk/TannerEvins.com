import React from 'react'
import ShadowSection from '../components/ShadowSection'
import { connect } from 'react-redux'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import flow from 'lodash/fp/flow'
import sortBy from 'lodash/fp/sortBy'

const makeSkillLis = flow(filter(l => l.known),
                          map(l => <li key={l._id}>{l.name}</li>))

const Experience = ({ exp, company }) => {
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
      </div>
    )
}

const Resume = connect(
    ({ entities }) => ({
        languages: makeSkillLis(entities.languages),
        software: makeSkillLis(entities.software),
        experiences: flow(sortBy(e => -e.start),
                          map(e => <Experience key={e._id} exp={e} company={entities.companies[e.company]} />))(entities.experience)
    })
)(
    ({ languages, software, experiences }) => (
      <div className="resume">
        <div className="resume-content">
          <ShadowSection className="education" title="Education">
            <div>
              Rhodes College<br />
              BA in Philosophy, 3.69 GPA
            </div>
          </ShadowSection>
          <ShadowSection className="languages" title="Languages"><ul>{languages}</ul></ShadowSection>
          <ShadowSection className="software" title="Software"><ul>{software}</ul></ShadowSection>
          <ShadowSection className="experience" title="Experience"><div>{experiences}</div></ShadowSection>
        </div>
      </div>
    )
)

export default Resume
