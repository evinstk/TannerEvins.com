import React from 'react'
import Section from '../components/CollapsibleSection'
import { connect } from 'react-redux'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import flow from 'lodash/fp/flow'
import sortBy from 'lodash/fp/sortBy'

const makeSkillLis = flow(filter(l => l.known),
                          map(l => <li key={l.key}>{l.name}</li>))

const Experience = ({ exp, company }) => {
    if (exp.company !== company.key) {
        throw new Error('Non-matching experience and company records.')
    }

    const { start, end } = exp

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
                          map(e => <Experience key={e.key} exp={e} company={entities.companies[e.company]} />))(entities.experience)
    })
)(
    ({ languages, software, experiences }) => (
      <div className="resume">
        <div className="name">Tanner Evins</div>
        <div>
          <Section title="languages"><ul>{languages}</ul></Section>
          <Section title="software"><ul>{software}</ul></Section>
          <Section title="experience"><div>{experiences}</div></Section>
        </div>
      </div>
    )
)

export default Resume
