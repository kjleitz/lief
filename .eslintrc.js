module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/max-attributes-per-line": [2, {
      "singleline": 5,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/html-self-closing": 0,
    "vue/no-multi-spaces": 0,
    "typescript/adjacent-overload-signatures": 2,
    "typescript/class-name-casing": 2,
    "typescript/explicit-function-return-type": [2, {
      "allowExpressions": true
    }],
    "typescript/explicit-member-accessibility": 0,
    "typescript/interface-name-prefix": [2, "never"],
    "typescript/member-delimiter-style": 2,
    "typescript/member-naming": 0,
    "typescript/member-ordering": 2,
    "typescript/no-angle-bracket-type-assertion": 2,
    "typescript/no-array-constructor": 2,
    "typescript/no-empty-interface": 2,
    "typescript/no-explicit-any": 1,
    "typescript/no-inferrable-types": [2, {
      "ignoreProperties": true,
      "ignoreParameters": true
    }],
    "typescript/no-namespace": [1, {
      "allowDeclarations": true,
      "allowDefinitionFiles": true
    }],
    "typescript/no-non-null-assertion": 2,
    "typescript/no-parameter-properties": 2,
    "typescript/no-triple-slash-reference": 2,
    "typescript/no-type-alias": 0,
    "typescript/no-unused-vars": 2,
    "typescript/no-use-before-define": 2,
    "typescript/no-var-requires": 2,
    "typescript/prefer-namespace-keyword": 2,
    "typescript/type-annotation-spacing": 0,
    "no-multi-spaces": 0,
    "key-spacing": 0,
    "no-undef": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "quotes": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": 0,
    "no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "no-plusplus": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "no-underscore-dangle": 0,
    "wrap-iife": [1, "inside"],
    "valid-typeof": 0,
    "max-len": 1,
    "arrow-body-style": 1,
    "lines-between-class-members": 0,
    "object-curly-newline": 1,
    "prefer-destructuring": [
      "error",
      {
        "object": true,
        "array": false
      }
    ],
    "no-restricted-globals": 0,
    "prefer-template": 1,
    "newline-per-chained-call": 1,
    "vars-on-top": 0
  },
};
