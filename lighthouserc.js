module.exports = {
  ci: {
    // Provide LHCI information on how to run the test, like what your server starting command is, the URL to check against, etc.
    // You can provide multiple URLs to check against, as well as provide puppeteer commands to run before the test, which chrome/chromium to use.
    // See https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#collect for more details.
    collect: {
      url: ['http://localhost:5000/'],
      startServerCommand: 'npm run start:prod',
    },
    // Asserts the conditions in the Lighthouse CI config and exits with the appropriate status code if there were any failures.
    // Assertions are keyed by the Lighthouse audit ID, you can take a look at the default Lighthouse config for all audit IDs https://github.com/GoogleChrome/lighthouse/blob/v5.5.0/lighthouse-core/config/default-config.js.
    // See https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#assert for more details.
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['error', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.9}],
      },
    },
    // Saves the runs in the .lighthouseci/ folder to desired target and sets a GitHub status check when the GitHub token is available.
    // See https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#upload for more details.
    upload: {
      target: 'temporary-public-storage',
    },
    // See https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#server for more details.
    server: {},
    // See https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#wizard for more details.
    wizard: {},
  },
};
