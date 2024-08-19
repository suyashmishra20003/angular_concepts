# Angular Change Detection and file structure

## Angular Change Detection

Angular does not use a Virtual DOM (Document Object Model) like React does. Instead, Angular uses its own change detection mechanism to efficiently update the DOM.

### Component Tree

Angular applications are built using a component-based architecture. Each component represents a part of the user interface and may contain other components, forming a component tree.

### Identifying Changes

Angular's Change Detection mechanism identifies changes in the application's data model. This includes changes to component properties, input bindings, and other stateful data.

### Updating Component State

When a change is detected, Angular updates the internal state of the affected components. This may involve updating component properties, state variables, or other internal data structures.

### Re-rendering Components

Once the component state has been updated, Angular triggers a re-rendering of the affected components. This involves generating a new virtual DOM representation of the component's template.

### Diffing and Patching

Angular then performs a "diffing" operation to compare the new virtual DOM representation with the previous one. This process identifies the specific changes that need to be applied to the actual DOM.

### Applying Changes to the DOM

Finally, Angular applies the identified changes to the actual DOM, updating the UI to reflect the new state of the application. This may involve adding, removing, or modifying DOM elements, attributes, or text content.

### Efficiency

Angular's change detection mechanism is highly optimized and performs efficiently even with large component trees. It only updates the parts of the DOM that have changed, rather than re-rendering the entire DOM like React's Virtual DOM approach.

## Angular Project Files & Folder Structure

```html
/angular-project
  |-- e2e/
  |-- node_modules/
  |-- src/
  |   |-- app/
  |   |   |-- app.component.css
  |   |   |-- app.component.html
  |   |   |-- app.component.spec.ts
  |   |   |-- app.component.ts
  |   |   |-- app.module.ts
  |   |-- assets/
  |   |-- environments/
  |   |-- favicon.ico
  |   |-- index.html
  |   |-- main.ts
  |   |-- polyfills.ts
  |   |-- styles.css
  |   |-- test.ts
  |-- .editorconfig
  |-- .gitignore
  |-- angular.json
  |-- browserslist
  |-- karma.conf.js
  |-- package.json
  |-- README.md
  |-- tsconfig.app.json
  |-- tsconfig.json
  |-- tsconfig.spec.json
  |-- tslint.json
```

- ***e2e/:*** This folder contains end-to-end tests for your application. These tests are written using tools like Protractor and are used to simulate user interactions with your application.

- ***node_modules/:*** This folder contains all the dependencies of your project. It's generated and managed by npm (Node Package Manager) and contains the packages required for your project to run.

- ***src/:*** This folder contains the source code of your Angular application.
  - ***app/:*** This subfolder contains the components, modules, services, and other application-specific files.
    - ***app.component.css:*** The CSS file for the root component of your application.
    - ***app.component.html:*** The HTML template file for the root component of your application.
    - ***app.component.spec.ts:*** The unit test file for the root component.
    - ***app.component.ts:*** The TypeScript file for the root component.
    - ***app.module.ts:*** The main module file of your Angular application, where you declare and import all the components, directives, and services used in your application.

- ***assets/:*** This folder contains static assets such as images, fonts, or other files that are used by your application.

- ***environments/:*** This folder contains environment-specific configuration files. By default, it includes files for environment.ts and environment.prod.ts, which are used for development and production environments, respectively.

- ***favicon.ico:*** The favicon file for your application.

- ***index.html:*** The main HTML file that serves as the entry point for your application.

- ***main.ts:*** The main TypeScript file that bootstraps your Angular application and initializes the Angular platform.

- ***polyfills.ts:*** This file includes polyfills required by Angular and the browser to support features that aren't natively supported by all browsers.

- ***styles.css:*** The global CSS file for your application.

- ***test.ts:*** The main entry point for running tests.

- ***.editorconfig:*** This file contains coding style configurations that can be used by various text editors and IDEs to ensure consistent code formatting.

- ***.gitignore:*** This file specifies which files and directories should be ignored by Git version control.

- ***angular.json:*** This file contains configuration settings for the Angular CLI, such as build options, project targets, and global configurations.

- ***browserslist:*** This file specifies a list of supported browsers for your project, which is used by various tools like Autoprefixer.

- ***karma.conf.js:*** The configuration file for Karma, the test runner used for unit testing in Angular applications.

- ***package.json:*** This file contains metadata and configuration settings for your project, including the list of dependencies and scripts for building, testing, and running the project.

- ***README.md:*** The README file for your project, which typically contains information about the project, instructions for installation and usage, and other relevant details.

- ***tsconfig.app.json:*** The TypeScript configuration file for the Angular application.

- ***tsconfig.json:*** The base TypeScript configuration file for your project.

- ***tsconfig.spec.json:*** The TypeScript configuration file used for compiling unit tests.

- ***tslint.json:*** The configuration file for TSLint, a static analysis tool for TypeScript code.

## Bootstraping angular app

Bootstrapping an Angular application refers to the process of initializing and starting up an Angular application. This process involves several steps:

`Angular Project => index.html => angular.json => main.ts => app.module.ts => app.component.ts`

- When the index.html file is loaded, Angular core libraries & third party libraries are also loaded by that time.
- Now angular locates the main entry point. To locate it, It goes to angular.json file.

  ```ts
  "options": {
            "outputPath": "dist/angular-ekart-new",
            "index": "src/index.html",
            "main": "src/main.ts", // main entry point
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          },
  ```

- In main.ts file it calls ***`platformBrowserDynamic().bootstrapModule(AppModule)`***. This function is responsible for initializing the Angular application and starting the bootstrapping process. This fuctions loads the ***`AppModule`***.
  
- After main.ts angular goes to app.module.ts which has below code -

```ts
@NgModule({
  declarations: [
    AppComponent // all the pipes, components, directives etc are defined here
  ],
  imports: [
    BrowserModule, // external imports required
    AppRoutingModule
  ],
  providers: [], // all the services are provided here
  bootstrap: [AppComponent] // component to be loaded when this module is loaded
})
export class AppModule { }
```

- Then angular goes to the app.component.ts file were it accesses @Component decorator.

```ts
@Component({
  selector: 'app-root', // selector value can be used a html tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

- Now whereever `app-root` is used a html tag the view template (app.component.html) is rendered.
