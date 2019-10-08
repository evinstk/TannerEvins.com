export default [
  {
    skill: `
      Writes software that balances reusability and
      replaceability: Keeps an eye toward code's maintainability
      and future reuse while avoiding decisions that chain a team
      to an inflexible design.
    `
  },
  {
    skill: `
      Values consistency in code: Ensures new code written serves
      a single, definite purpose that's cohesive with the rest of
      the codebase.
    `
  },
  {
    skill: `
      Avoids duplication and brute force solutions. Takes the
      extra effort to write elegant code, callable from multiple
      contexts.
    `
  },
  {
    skill: `
      Programs text editor and shell to reduce redundant tasks and
      facilitate efficient development.
    `
  }
].map((skill, _id) => ({ ...skill, _id }))
