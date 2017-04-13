export default [
    { _id: 'node', name: 'Node.js' },
    { _id: 'npm', name: 'NPM' },
    { _id: 'react', name: 'React' },
    { _id: 'redux', name: 'Redux' },
    { _id: 'flux', name: 'Flux' },
    { _id: 'lodash', name: 'Lodash' },
    { _id: 'express', name: 'Express' },
    { _id: 'css3', name: 'CSS3' },
    { _id: 'sass', name: 'Sass' },
    { _id: 'gulp', name: 'Gulp' },
    { _id: 'browserify', name: 'Browserify' },
    { _id: 'babel', name: 'Babel' },
    { _id: 'angularjs', name: 'AngularJS' },
    { _id: 'git', name: 'Git' },
    { _id: 'emacs', name: 'Emacs' },
    { _id: 'vim', name: 'Vim' },
    { _id: 'bash', name: 'Bash shell' },
    { _id: 'util', name: 'GNU/Linux utilities' },
    { _id: 'vs', name: 'Visual Studio' }
].map(s => {
    s.known = true
    return s
})
