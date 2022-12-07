<p align="center">
    <a href="https://webdriver.io/">
        <img alt="WebdriverIO" src="https://webdriver.io/assets/images/robot-3677788dd63849c56aa5cb3f332b12d5.svg" width="146">
    </a>
</p>

# 👩‍💻 WebdriverIO 
# Test automation project for testing saucedemo.com
## Getting started

> Before you follow the steps below, make sure you have the
[Node.js](https://nodejs.org/en/download/) installed _globally_ only your system

Install all the necessary dependency using npm :

```
npm install
```

package.json use the following dependency:
ci = "chromedriver": "106.0.1",
local = "chromedriver": "108.0.0", or your actual local chromedriver version.

for local use just to comment in wdio.conf.ts
'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
        }