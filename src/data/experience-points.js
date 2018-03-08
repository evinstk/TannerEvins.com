export default [
  {
    experience: 'ecs',
    point: `
      Lead front-end developer for new Delivery Management
      System (DMS), a program used to track postal carrier
      positions and deliveries in realtime.
    `,
    order: 0
  },
  {
    experience: 'ecs',
    point: `
      Introduced modern technologies and approaches to
      front-end development: Powered DMS with AngularJS,
      delivering a level of interactivity unprecedented in the
      postal world.
    `,
    order: 1
  },
  {
    experience: 'exp',
    point: `
      Created revamped performance management review software for
      company's HR website, highly praised by clients as a vast
      improvement over the original system.
    `,
    order: 0
  },
  {
    experience: 'exp',
    point: `
      Wrote both C# and JavaScript code.
    `,
    order: 1
  },
  {
    experience: 'exp',
    point: `
      Git expert of the development team, often consulted for
      the tool's more advanced features.
    `,
    order: 2
  },
  {
    experience: 'dr',
    point: `
      Used Angular 4 and Ionic framework to create the Dave Ramsey
      Show app on iOS and Android.
    `
  },
  {
    experience: 's3',
    point: `
      Using React and Redux to create software used by customer
      service reps to resupply durable medical equipment for patients
      suffering from sleep-related issues (e.g., sleep apnea).
    `
  },
  {
    experience: 'free',
    point: `
      Self-employed as a freelance web developer. Currently
      accepting contracts.
    `,
    order: 0
  }
].map((point, _id) => ({ ...point, _id }))
