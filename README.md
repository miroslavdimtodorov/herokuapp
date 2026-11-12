# herokuapp
This project is with practice purpose.

UI test automation for https://the-internet.herokuapp.com built with WebdriverIO, Mocha and TypeScript.

## Install
```
npm install
```

## Configure (optional)
Copy `.env.example` to `.env` and adjust the values. `.env` is not committed.
Without it, the defaults from the code are used.

## Run tests
All commands are run from the project root.

### All tests
```
npm run wdio
```

### A single test file
```
npx wdio run ./wdio.conf.ts --spec ./test/FormAuthentication/positive/successfulLogin.ts
```

### A folder
Use a glob ending in `/**/*.ts` — a bare folder path (e.g. `./test/FormAuthentication/positive`) does not work.
```
# all login tests (positive and negative)
npx wdio run ./wdio.conf.ts --spec "./test/FormAuthentication/**/*.ts"

# only the positive login tests
npx wdio run ./wdio.conf.ts --spec "./test/FormAuthentication/positive/**/*.ts"
```

### Several files or folders
Repeat `--spec`:
```
npx wdio run ./wdio.conf.ts --spec ./test/FormAuthentication/positive/successfulLogin.ts --spec "./test/Checkboxes/**/*.ts"
```

### A single test (`it`) by name
```
npx wdio run ./wdio.conf.ts --spec ./test/FormAuthentication/positive/successfulLogin.ts --mochaOpts.grep "valid credentials"
```

### Notes
- Every `npx wdio run ./wdio.conf.ts ...` command can also be written as `npm run wdio -- ...`,
  e.g. `npm run wdio -- --spec "./test/FormAuthentication/**/*.ts"`.
- Keep the quotes around glob patterns, so WebdriverIO expands them the same way in every shell.
