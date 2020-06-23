async function testMeWith () {
  console.log(`I'm the webpack secondary chunk that need the promise polyfill with finally. Let me import both!`)
  await import('core-js/modules/es.promise')
  await import('core-js/modules/es.promise.finally')

  new Promise(resolve => {
    console.log(`I'm a inside the webpack secondary chunk Promise. I am done!`)
    resolve()
  }).finally(() => {
    console.log(`
      I'm a inside the webpack secondary chunk Promise finally.
      After some time, Let me queue up another Promise with a finally block.
    `)

    setTimeout(() => {
      try {
        console.log(`The time has come. Queue up another promise in the secondary chunk with a finally declaration.`)
        // this is going to explode...
        new Promise(function(){}).finally(() => {})
      } catch(e) {
        console.log(`What happened? Why is "finally" undefined???`)
        throw e
      }
    }, 10000)
  })
}


setTimeout(() => {
  testMeWith()
})
