import React from 'react'
import ShadowSection from './ShadowSection'
import Experience from './Experience'
import Honor from './Honor'
import languages from '../data/languages'
import software from '../data/software'
import experience from '../data/experience'
import companies from '../data/companies'
import expPoints from '../data/experience-points'
import skills from '../data/skills'
import honors from '../data/honors'
import filter from 'lodash/fp/filter'
import map from 'lodash/fp/map'
import flow from 'lodash/fp/flow'
import sortBy from 'lodash/fp/sortBy'
import keyBy from 'lodash/keyBy'
import PrintIcon from '@material-ui/icons/Print'

const makeSkillLis = flow(filter((l: { known: boolean }) => l.known),
                          map((l: { _id: number, name: string }) => <li key={l._id}>{l.name}</li>))

const ExpTitle = () => (
  <div className="experience-title">
    <div>Experience</div>
    <div>
      <button title="PDF Version">
        <a href="docs/evins-resume.pdf"><PrintIcon /></a>
      </button>
    </div>
  </div>
)

const companiesByKey = keyBy(companies, '_id')

const Resume = () => (
  <div className="resume">
    <div className="resume-content">
      <ShadowSection className="education" title="Education">
        <div>
          Rhodes College<br />
          BA in Philosophy, 3.69 GPA
        </div>
      </ShadowSection>
      <ShadowSection className="languages" title="Languages">
        <ul>
          {makeSkillLis(languages)}
        </ul>
      </ShadowSection>
      <ShadowSection className="software" title="Software">
        <ul>
          {makeSkillLis(software)}
        </ul>
      </ShadowSection>
      <ShadowSection className="experience" title={<ExpTitle />}>
        <div>
          {flow(sortBy((e: typeof experience[0]) => -e.start),
                    map((e: typeof experience[0]) => <Experience
                          key={e._id}
                          exp={e}
                          company={companiesByKey[e.company]}
                          points={filter((p: typeof expPoints[0]) => p.experience === e._id)(expPoints)}
                        />))(experience)}
        </div>
      </ShadowSection>
      <ShadowSection className="skills" title="Skills, Knowledge, and Values">
        <div>
          {map((s: typeof skills[0]) => <div className="skill" key={s._id}>{s.skill}</div>)(skills)}
        </div>
      </ShadowSection>
      <ShadowSection className="honors" title="Honors">
        <div>
          {map((h: typeof honors[0]) => <Honor honor={h} className="honor" key={h._id} />)(honors)}
        </div>
      </ShadowSection>
    </div>
  </div>
)

export default Resume
