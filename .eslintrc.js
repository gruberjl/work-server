module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": 1
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": "readonly"
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  },
  "rules": {
    "no-console": "off",
    "semi": ["warn", "never"],
    "indent": ["warn", 2]
  }
}
