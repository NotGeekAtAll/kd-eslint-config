module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
     // off
     '@typescript-eslint/consistent-indexed-object-style': 'off', // 需要或不允许记录类型
     '@typescript-eslint/naming-convention': 'off', // 对代码库中的所有内容强制执行命名约定
     '@typescript-eslint/explicit-function-return-type': 'off', // 要求函数和类方法有显式返回类型
     '@typescript-eslint/explicit-member-accessibility': 'off', // 需要对类属性和方法进行显式可访问性修饰符
     '@typescript-eslint/no-explicit-any': 'off', // 可使用any
     '@typescript-eslint/parameter-properties': 'off', // 需要或禁止类构造函数中的参数属性
     '@typescript-eslint/no-empty-interface': 'off', // 禁止声明空接口
     '@typescript-eslint/ban-ts-ignore': 'off',
     '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
     '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用 ! 进行非空断言后缀运算符
     '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法显式返回和参数类型
     '@typescript-eslint/triple-slash-reference': 'off', // 禁止某些三斜杠指令，以支持 ES6 样式的导入声明。
  }
}
