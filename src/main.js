

async function testMeWithout () {
  console.log(`I'm the webpack main chunk that need the promise polyfill without finally. Let me import it!`)
  await import('core-js/modules/es.promise')

  new Promise(resolve => {
    console.log(`I'm inside the webpack main chunk Promise. I am done!`)
    resolve()
  })
}

setTimeout(() => {
  testMeWithout()
}, 5000)
