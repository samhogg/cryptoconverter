# cryptoconverter

A small react/redux app to convert USD to BTC in a mock crypto exchange.

## Get hacking

1.  Install the app using yarn - `yarn`
1.  Run `yarn start` to run the development server.

## Testing

* `yarn test` to run Jest based snapshot and unit tests.
* `yarn test:watch` to run Jest in watch mode.
* `yarn lint` to run eslint (using react and prettier presets) - this uses the 'fix' option by default.

## Deployment

* `yarn deploy` runs tests, and then deploys to the `gh-pages` branch for viewing at [https://github.com/samhogg/cryptoconverter](https://github.com/samhogg/cryptoconverter).

## Further work

Obviously there's always plenty of ways of improving an application - here a few that immediately come to mind.

* More graceful handling of errors
* Inline form validations
* User initiated reloading of BTC quotes
