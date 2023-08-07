module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  plugins: ["simple-import-sort"],
  extends: ['eslint:recommended'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'quotes': ['error', 'single'], // 单引号
    'no-var': 'warn', // 禁止使用 var
    'no-undef': 'warn', // 禁止使用未定义的变量
    'comma-dangle': ['error', 'always-multiline'], // 末尾逗号
    'comma-spacing': ['error', { before: false, after: true }], // 逗号后空一格
    'prefer-const': ['error', { destructuring: 'all' }], // 申明后不再被修改的变量必须使用 const 来申明
    'semi': [1, 'always'], // 结尾处使用分号
    'no-underscore-dangle': 'off', // 禁止变量名出现下划线
    'no-callback-literal': 'off', // 禁止将文字作为异常抛出
    'no-trailing-spaces': 'error', // 禁止行尾有尾随空格
    'space-before-function-paren': ['error', 'always'], // 在函数定义左括号之前强制执行一致的间距
    'no-unreachable-loop': 'error', // 禁止在第一轮循环时就一定会退出循环的情况出现
    'no-tabs': 'error',
    'max-len': ['warn', { code: 150 }],
    'no-new-func': 'error', // 禁止使用 new Function
    'dot-notation': ['error', { allowKeywords: true }], // 尽可能强制执行点表示法
    'no-debugger': 'error', // 禁止debugger
    'object-curly-spacing': ['error', 'always'], // 强制大括号内的间距一致
  }
}