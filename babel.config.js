module.exports = {
    presets: [
        [
          '@babel/preset-env',
          {
            corejs: 3, // this option does not do anything useful, but we are using corejs 3 here =)
            useBuiltIns: false // turn built ins off to enable explicit polyfilling
          }
        ]
      ],
    plugins: [ '@babel/plugin-transform-runtime']
}
