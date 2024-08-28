# Angular Unit Testing
- We will learn how to write angular unit tests.
- when and why to write unit tests.
- This is a automated testing. And goal of this is to increase the quality of the software.

- Angular have two types of unit tests -:-
    - ***Isolated*** :- Does not depend on anything
    - ***Integrated*** :- Combined testing of components and child components
- Angular automatically installs testing framework via angular cli
- The project you create with the CLI is immediately ready to test. Just run the ***`ng test`*** CLI command

- In Automated testing there are 3 types of testing in general -
    - Unit Testing
    - E2E Testing
    - Integration or  Functional Testing 

## Unit Testing
- Unit testing is done for a single `unit` of code in isolation or shallow testing
- There are basically 3 types of unit testing -:-
    - Shallow
    - Isolation
    - Deep Integration Testing
- Here a unit means a single `class` or in rare cases a group of clsses
- There are few Angular units that can be tested in isoloation (free from other dependencies)
    - Pipe
    - Service
    - Class
    - Directive
    - Component
- In Isolation Unit testing we cannot test the template parts of the component 

## E2E Testing
- E2E Testing of a live running app with live database and  serve. Generally done through automating web browser.
- Tests are writtento manipulate the browser in an automated way to do things like click buttons type values in the forms navigate to the page and so on.
- Difficult to write tests as testcases are more complex

## Integration or  Functional Testing 
- Comes between the unit testing and the E2E testing.
- Normally this wil be done to check that whether one part of the app is working with another part