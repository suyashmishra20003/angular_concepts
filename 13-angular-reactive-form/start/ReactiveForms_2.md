# Creating a Custom async Validator
We use async validator when we need to send an HTTP request to the server to check if the data entered in a form element is valid or not.
- The async validator must return either a promise or an observable.
- Angular does not provide any built-in async validator