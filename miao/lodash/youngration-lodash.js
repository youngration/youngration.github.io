var youngration = function() {
  function chunk(ary, sz=1) {
    const a = []
    let t = []
    for (let i = 0; i < ary.length; i++) {
      t.push(ary[i])
      if(!((i + 2) % (sz + 1)) || i === ary.length - 1) {
        a.push(t)
        t = []
      }
    }
    return a
  }







  return {
    chunk: chunk
  }
}()