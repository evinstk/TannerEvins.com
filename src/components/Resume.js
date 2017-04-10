import React from 'react'
import Section from './CollapsibleSection'

const languages = [
    'JavaScript (ECMAScript 6)',
    'C',
    'C++11/C++14',
    'C#',
    'Python',
    'Haskell',
    'Scala',
    'Clojure',
    'SQL'
]

const software = [
    'Node.js',
    'npm',
    'React',
    'Redux',
    'Flux',
    'Lodash',
    'Gulp',
    'Browserify',
    'Babel',
    'AngularJS',
    'Git',
    'Emacs',
    'Vim',
    'Bash shell',
    'GNU/Linux utilities',
    'Visual Studio'
]

const mapLi = arr => arr.map((item, index) => <li key={index}>{item}</li>)

const Resume = () => (
  <div className="resume">
    <div className="name">Tanner Evins</div>
    <div>
      <Section title="languages">{mapLi(languages)}</Section>
      <Section title="software">{mapLi(software)}</Section>
    </div>
  </div>
)

export default Resume
