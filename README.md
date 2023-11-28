Website testing ada **[disini](https://magento.softwaretestingboard.com)**

Untuk install
```
npm install
```

Untuk running cypress
```
npx cypress open
```

Untuk menghasilkan report 
```
npm i --save-dev cypress-mochawesome-reporter
```
Tambahkan konfigurasi pada cypress.config.js
```
module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir:'cypress/testReports',
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        debug: true
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on)
            return config
        },
    }
})
```

  Untuk mendapatkan report dalam bentuk html hnaya bisa dijalankan melalui CLI
  ```
  npx cypress run
  ```