1. npm init playwright@latest
2. npm i playwright-bdd -D
3. npm i @cucumber/cucumber@latest -D
4. add **/*feature to playwright config +
   add steps path to playwright config:

const testDir = defineBddConfig({
  paths: ['features/**/*.feature'],
  require: ['steps/**/*.js']
})

5. to run tests: 
npx bddgen; npx playwright test --reporter=html, list


to generate step definition:
npx bddgen


library link:
https://vitalets.github.io/playwright-bdd/#/