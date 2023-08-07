module.exports = {
  overrides: [
    {
      parser: "vue-eslint-parser",
      files: ['*.vue'], // 只处理 vue 文件
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended'], // 使用 vue3 的推荐规则
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/no-dupe-keys': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',

  }
}