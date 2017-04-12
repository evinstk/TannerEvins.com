import React from 'react'
import ShadowSection from '../components/ShadowSection'
import Experience from '../components/Experience'
import { connect } from 'react-redux'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import flow from 'lodash/fp/flow'
import sortBy from 'lodash/fp/sortBy'

const makeSkillLis = flow(filter(l => l.known),
                          map(l => <li key={l._id}>{l.name}</li>))

const Resume = connect(
    ({ entities }) => ({
        languages: makeSkillLis(entities.languages),
        software: makeSkillLis(entities.software),
        experiences: flow(sortBy(e => -e.start),
                          map(e => <Experience
                                     key={e._id}
                                     exp={e}
                                     company={entities.companies[e.company]}
                                     points={filter(p => p.experience === e._id)(entities.expPoints)}
                                   />))(entities.experience)
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
