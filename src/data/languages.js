export default [
    { _id: 'js', name: 'JavaScript' },
    { _id: 'c', name: 'C' },
    { _id: 'cpp', name: 'C++' },
    { _id: 'csharp', name: 'C#' },
    { _id: 'python', name: 'Python' },
    { _id: 'haskell', name: 'Haskell' },
    { _id: 'scala', name: 'Scala' },
    { _id: 'clojure', name: 'Clojure' },
    { _id: 'sql', name: 'SQL' }
].map(lang => {
    lang.known = true
    return lang
})
