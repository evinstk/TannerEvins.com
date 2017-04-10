import React from 'react'

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
    <div>Tanner Evins</div>
    <div>
      <div className="section">languages</div>
      <ul>{mapLi(languages)}</ul>
      <div className="section">software</div>
      <ul>{mapLi(software)}</ul>
    </div>
  </div>
)

export default Resume
