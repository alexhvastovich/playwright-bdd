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

6. use env library for env setup
npm i dotenv -D

7. use cross env for ci/cd 
npm i cross-env -D 
"qa-test": "npx bddgen && cross-env ENV=qa npx playwright test --headed"

8. clean auto generated folder prior to run
npm i rimraf -D

to generate step definition:
npx bddgen


library link:
https://vitalets.github.io/playwright-bdd/#/

reference:
https://www.youtube.com/watch?v=7neceStpHp4&list=PLf8vT0W16iNNYu7tBZ_9QoiUpOiefxG-J

fixtures:
https://www.youtube.com/watch?v=2O7dyz6XO2s

pom and fixtures:
https://www.youtube.com/watch?v=k488kAtT-Pw&list=PLMZDRUOi3a8NtMq3PUS5iJc2pee38rurc&index=24

must watch:
https://www.youtube.com/watch?v=2O7dyz6XO2s&list=PLMZDRUOi3a8NtMq3PUS5iJc2pee38rurc