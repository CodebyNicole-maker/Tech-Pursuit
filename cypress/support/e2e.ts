// e2e.js (or e2e.ts)
import './commands';  // Ensures commands.js is used if needed

// You can add global configuration and behavior for tests here
Cypress.on('uncaught:exception', (_err, _runnable) => {
    return false; // Prevents Cypress from failing tests due to errors
});