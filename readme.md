# Angular

* What is Angular?
    * Angluar is a web framework
* MVC
    * Model
        * Application Data
        * User Data
        * Data Structure
        * Any rendered data
            * Manipulate data (change into a format that we want / need)
            * Multiple teams may use the same data set

    * View
        * Represent the user interface
        * How do we display the data to the user?
        * Identifying what is a view and what isn't

    * Controller / Component
        * Go-between for the model and the view
        * Handles user input and application logic
        * Manages communication in the application
    
    * Why do we use MVC?
        * Separation of logic
        * Reusability
        * Scalability

* Naming Conventions
    * **Camel Case**
        * all of our new words except the first starts with a capital letter
        * allOfOurNewWordsExceptTheFirstStartsWithACapitalLetter
        * Used in all instances except Class creation and in Component Naming
    * **Pascal Case**
        * All of our new words including the first starts with a capital letter
        * AllOfOurNewWordsIncludingTheFirstStartsWithACapitalLetter
    * Snake Case
        * All of our new words are separated by an underscore and all words are lower cased
        * all_of_our_new_words
    * Kebab Case
        * all words separated by a hyphen or dash

* Dependencies
    * Dependencies are necessary for the application to run
    * To install a dependency:
        * npm i dependencyname

```json
"dependencies": {
    "@angular/animations": "^16.2.0",
    "@angular/common": "^16.2.0",
    "@angular/compiler": "^16.2.0",
    "@angular/core": "^16.2.0",
    "@angular/forms": "^16.2.0",
    "@angular/platform-browser": "^16.2.0",
    "@angular/platform-browser-dynamic": "^16.2.0",
    "@angular/router": "^16.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  }
```
* Dev Dependencies
    * Dev are necessary only for development of the application, not to be used in production
    * To install a dev dependency
        * npm i dependencyname --save-dev
* Directives
    * Structural Directive
        * Modify the structure of the DOM (webpage)
            * Creating, removing & hiding elements
        * Start with an * (asterix)
    * Attribute Directive
        * Behavioural directives
        * Add IDs and Classes to elements... We can remove IDs and Classes from Elements
        * ngStyle:
            * Dynamically set the style of an element depending on the data of that element


## Flags

* ng serve // this starts the server but doesn't open the browser
* ng serve --open // starts the server and opens the browser
* ng serve --open --port 4201
* ng serve --host 127.0.0.1

* ng new FirstApp --routing // enable routing in the application from the start
* ng new FirstApp --css

* ng build --prod // dist

* ng g component

* Authentication
    * Code Snippets from Jacob

## Piping
    * Transforming data & formatting data before it is displayed to the user
    * Data can come in all ranges and sizes, we may just want to manipulate a subset of a large data structure


## Routes

* What are routes?
    * A way to navigate between our pages / components etc
    * Our routes are specific and when we enable Angular-Routing in the CLI, the routes are focused / located in the **app-routing.module.ts**
        * In our example application, we have 3 components:
            * Navigation bar
            * Home
            * Profile
        * Our navigation bar is NOT a route... it is a component that will allow other components to be accessed
            * We do not put our navbar in the routes array
```ts
// app-routing.module.ts
// update our routes array with the pages we want to access
const routes: Routes = [
  { path: '', component: HomeComponent }, // our home page is the HomeComponent
  { path: 'profile', component: ProfileComponent } // /profile will go to our ProfileComponent
];
```
* Our navigation bar now needs updating with routerLink in the **navbar.component.html**:
```html
<nav>
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/profile">Profile</a></li>
    <li><a routerLink="#">Settings</a></li>
  </ul>
</nav>
```
* If you attempt to navigate now, your path will change, but the content will not and that is because we now need to add <router-outlet></router-outlet> to the bottom of our **app.component.html**
```html
<!-- app.component.html -->
<app-navbar></app-navbar>
<router-outlet></router-outlet>
```

* We no longer need the <h1>Hello, World</h1> in our app.component.html as we are using the HomeComponent as our home page. The application will now load that page instead.

### Updating with a new component

* Run 'ng generate component settings'
* Update the **app-routing.module.ts** routes array with the new path
```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent}
];
```
* Update the **navbar.component.html** with the new route
```html
<nav>
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/profile">Profile</a></li>
    <li><a routerLink="/settings">Settings</a></li>
  </ul>
</nav>
```

## Todo

* Display the current items in my todo data structure
* Textbox that allows the user to input an item
* Remove an item from the todo

* Create: Input an item
* Read: Display the current items
* Update: Not yet used
* Delete: Remove an item

* What did we need to include in our app yesterday when we wanted to take data from the user on a page?
    * FormsModule

### Data Service

* We are creating a todo service, to generate it:
```
ng generate service data
```

## Data Binding

* Interpolation (One-way binding)
    * Allow the developer to display dynamic data in the HTML template
    * {{ }}
    * <p>{{ title }}</p>
    * Display variables, properties, or expressions in your html

* Property Binding (One-way binding)
    * Allows you to set a html element to a value from the component
    * [ ]
    * <img [src]="diceImage">

* Event Binding (One-way binding)
    * Allows you to listen for events (clicks, inputs, hovers etc) in the view / UI and then trigger / run / call a method in your component
    * ( )
    * <button (click)="onSubmit()">Submit</button>

* Two-way Binding (Two-way binding)
    * Allows you to combine property and event binding to sync data in both directions. This is between the UI / View and the component
    * [(ngModel)] and normally used in forms
    * <input [(ngModel)]="username">

### Summary of Data Binding
* **Interpolation** is for displaying data in the UI / View
* **Property Binding** is for setting an element's property value
* **Event Binding** is for responding to user interactions
* **Two-way Binding** is for bidirectional data sync, often used in forms / sending information to and from the component and view


## API calls

* Are a request to a service, whether that is a free service or paid
* Application Program Interface

### Steps to call an API

* We can / *should* separate our api calls into specific services
    * Generate your service early to get your structure setup

* To make an API call, we need to import the HttpClientModule into our app.module.ts

## Lifecycle Hooks

* ngOnChanges
    * We use this when our component needs to react to changes in input properties: usernames, values given to the component from the user
```ts
ngOnChanges(changes: SimpleChanges) {
    if('inputData' in changes) {
        this.processChange(changes.inputData.currentValue)
    }
}
```

* ngOnInit
    * This hook is only called once - it is called when the component is initialised. We use it to set properties and attributes with values
    * Fetch initial data to be used in the component
    * Why would we fetch data at the start of the component?
        * If the page depends on the data?
* ngDoCheck
* ngAfterContentInit
    * Use this hook to perform actions after we project content onto the component's view
* ngAfterContentChecked
    * It is called after every check of the component's content
    * Ensuring the data is pulled through correctly
* ngOnDestroy
    * Used to destroy components, subscriptions, event listeners and timers + more to reduce the risk of memory leaks / issues

## Subscriptions

* HTTP requests:
    * We may have multiple HTTP requests needed to happen at the same time
    * Subscriptions allow us to use multiple requests using asynchronous data to handle and respond to data

* Allow us to prevent memory leaks and issues by destroying elements that are no longer needed. 

* Error Handling to allow processes to continue when an error occurs
    * Is essential for allowing applications to continue when there is an issue

* Real-time data updates
    * We want to work with real-life data and receive updates from servers to give the user the most up-to-date information possible to then give them the best experience possible

## Challenge

* What do we need to do to build a calculator?
    * Input from a user
        * Simple text box?
        * Buttons?
    * Understand the formula of the operations:
        * Addition, subtraction, multiplication, division
    * Display the result
    * Reset the calculator
    * Show the user what they have pressed
    * Accepting keyboard presses for the numbers? I like it.
    * Continuing calculations from the previous
        * Previous answer variable

* Services
* RxJS
* Testing