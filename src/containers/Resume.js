import React from 'react'
import Section from '../components/CollapsibleSection'
import { connect } from 'react-redux'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import flow from 'lodash/fp/flow'

const makeLi = flow(filter(l => l.known),
                    map(l => <li key={l.key}>{l.name}</li>))

const Resume = connect(
    state => ({
        languages: makeLi(state.entities.languages),
        software: makeLi(state.entities.software)
    })
)(
    ({ languages, software }) => (
      <div className="resume">
        <div className="name">Tanner Evins</div>
        <div>
          <Section title="languages"><ul>{languages}</ul></Section>
          <Section title="software"><ul>{software}</ul></Section>
        </div>
      </div>
    )
)

export default Resume
