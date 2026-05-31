# Portfolio - React SPA
Portfolio SPA is a responsive, single portfolio page that allows users to add, view & search projects.
It is built with react with vite.

## Features
- A landing page: displays a list of projects.
- A form: allows users to add  new projects dynamically.
- A search feature: dynamically filter projects.
- A responsive design: seamless user expereince

## How this app works
### Adding a new Project
- The has threee fields:- Project name, short description, detailed description for expand mode.
- onSubmit the a submit event handler does:
  1. Prevents page reloading.
  2. Extracts form data from the event.
  3. Creates a `newproject` object in this format:- `name`: "value", `shortDesc`: "value", `description`: "value".
  4. Destructures the `projects` state, adds the `newProject` item and updates the `projects` state.

### Project Cards rendering
*Please note: I have created 4 initial default projects items*
- The app initializes the `projects` state by:
  1. Checking if there is an exists `projects` array in the `localStorage`.
  2. If there it exists, the `projects` state is initialized with the data from the `localStorage`.
  3. Else the `projects` state is initialized by the default projects items.

- The `projects` state is id(ed) and passed down as prop to the `ProjectsList` component for rendering.
*Please note: the projects array objects don't have an id key hence it is generated when passing down as prop.*
*This makes adding and filtering projects easier as well as making cards dynamic*

- ProjectsList component renders `ProjectCards` separate and renders only 1 `ProjectDetails`component only when triggered to improve its efficiency.
  `ProjectsList` manages `ProjectDetails` state `expandedProject`, which stores a `project.id` when `ProjectDetails` is active or `null` when inactive.
- The `ProjectDetails` component grabs the `project.id` from the `expandedProject` state, finds the specific project details in `data` and renders it.
- The `close` button in the `ProjectDetails` component fires the setter function to change the value from `project.id` to `null`

### ProjectCard component
- It contains the `project.id`(as card number), `project.name` & `project.shortDesc` fields and `Maximize` button.
- The `Maximize` button fires the `setExpandedProject` setter function to change the `expandedProject` state value from `null` to `project.id` which makes the `ProjectDetails` component active.

### Searching a project
- The `app` component houses the `searchTerm` state extracted by `setSearchTerm` setter function in the `SearchProject` component `input.value` fired by an `onChange` event.
- Then `filteredProjects` new array, is assigned by dynamically filtering the `projects` state array.
- The `filteredProjects` array is conditionally passed down as a prop to `ProjectsList` component which now renders the cards.

### Data storage
- Since this app has no database, the projects data is stored in your browser's `localStorage`.
- It works by using your `localStorage` to store data and react states to render projects' cards.

### Component Tree
App
  ↳ AddProject
  ↳ SearchProject
  ↳ ProjectsList
      ↳ ProjectCard
      ↳ ProjectDetails

*Add that's it, this app allows a user to add a new project, view existing projects, maximize a project, search projects and store projects data in your browser's localStorage*

## Technologies Used
- React: Creating UI components and handling states & events.
- Vite: Build tool to enable seamless react development.
- npm: Handle all our project dependecies & modules.
- HTML5 & CSS: Semantic markup and Styling.
- Javascript: add functionality

## Getting Started
You only a web browser to run this application.

### installation
1. Clone the repository:
`git clone https://https://github.com/gabrielkn254/portfolio-spa`

2. Navigate to the project directory:
`cd portfolio-spa`

3. To run raw code
`npm run dev`

### execution
Click this link to open the deployed app
Link -> `https://gabrielkn254.github.io/portfolio-spa/`

## License
This project is licensed under the MIT License.