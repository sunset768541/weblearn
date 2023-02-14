module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  'parserOptions': {
    'parser': '@babel/eslint-parser',
    'requireConfigFile': false
  },
  'rules': {
    'vue/html-indent': [
      'error',
      2
    ],
    'linebreak-style': [0, 'error', 'windows'], // window一直报Expected linebreaks to be 'LF' but found 'CRLF'
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        'singleline': 4,
        'multiline': 1
      }
    ],
    'vue/require-default-prop': 2,
    'vue/singleline-html-element-content-newline': [
      0,
      {
        'ignoreWhenNoAttributes': true,
        'ignoreWhenEmpty': true
      }
    ],
    // airbnb
    'comma-dangle': [
      'warn',
      {
        'arrays': 'never',
        'objects': 'ignore',
        'imports': 'never',
        'exports': 'never',
        'functions': 'ignore'
      }
    ],
    'camelcase': 2,
    'dot-notation': 0,
    'new-parens': [
      'warn'
    ],
    'no-mixed-spaces-and-tabs': [
      'warn',
      'smart-tabs'
    ],
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'quote-props': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'global-require': 0,
    // 2022-10-26 全等先不报错
    'eqeqeq': 2,
    'no-redeclare': 1,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'no-prototype-builtins': 0,
    'no-undef': 0, // 不开启 一些全局注册的组件
    'no-unused-vars': ['warn', {
      'args': 'none', 'ignoreRestSiblings': true, 'argsIgnorePattern': '^_'
    }],
    // 'no-unused-vars': 0,
    'no-multiple-empty-lines': [
      'error', {
        'max': 2
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 0,
    'import/first': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-useless-return': 0,
    'prefer-const': 0,
    'no-else-return': 0,
    'declaration-block-trailing-semicolon': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'no-bitwise': 0,
    'padded-blocks': 0,
    'no-return-assign': 0,
    'max-len': 0,
    // 'max-len': [
    //   'warn',
    //   {
    //     'code': 150,
    //     'ignoreComments': true
    //   }
    // ],
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'no-nested-ternary': 0,
    'prefer-rest-params': 0,
    'class-methods-use-this': 0,
    'radix': 0,
    'no-new': 0,
    // tab缩进
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'no-tabs': 'off',
    'quotes': [
      2,
      'single'
    ],
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV !== 'production' ? 1 : 2,
    'no-var': 1,
    'no-const-assign': 2,
    'import/named': 0,
    'semi': [
      1,
      'never'
    ],
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-alert': 2,
    'no-unreachable': 2,
    'no-lone-blocks': 0,
    // 关键字周围强制使用空格
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // 大括号中强制使用空格
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    // 单行代码块前后要加空格
    'block-spacing': [
      'warn',
      'always'
    ],
    // 逗号后面加空格
    'comma-spacing': [
      'warn',
      {
        'before': false,
        'after': true
      }
    ],
    // 分号后面加空格
    'semi-spacing': [
      'warn',
      {
        'before': false,
        'after': true
      }
    ],
    // 在注释前有空白
    'spaced-comment': [
      'warn',
      'always'
    ],
    'vue/no-mutating-props': 0,
    'vue/no-v-html': 0,
    // 箭头函数前后要有空格
    'arrow-spacing': [
      'warn',
      {
        'before': true,
        'after': true
      }
    ],
    // 对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [
      'warn',
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    // 要求操作符周围有空格
    'space-infix-ops': [
      'warn',
      {
        'int32Hint': false
      }
    ],
    'jsx-quotes': 1
  }
}
