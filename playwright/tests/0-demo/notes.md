You have succesfully installed playwright following the [install guide](https://playwright.dev/docs/intro#installing-playwright)

How to run the tests?

Use the vscode extension: 
navigate to a test file and click the "run test" option

start by executing the `cd playwright` command to make sure you always execute commands inside the playwright directory
then change directory to `tests` with `cd tests`

with `npx playwright test`
- EITHER start by changing directory to the current assignment e.g. `cd 0-demo` and use the basic test command `npx playwright test`.  
    (don't forget to `cd ..` and `cd` into the next assignment at some point)
- OR make sure to add the path everytime you run your tests. e.g. `npx playwright test 0-demo`
    
UI mode:
use `npx playwright test --ui` instead of the regular command
optional: start the ui mode in a localhost browser by running `npx playwright test --ui-host=0.0.0.0 --ui-port=8080` instead.

look at the report:
click the report text or run `npx playwright show-report`