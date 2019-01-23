var youngration = function() {
  function chunk(ary, sz=1) {
    const rst = []
    let t = []
    for (let i = 0; i < ary.length; i++) {
      t.push(ary[i])
      if(!((i + 2) % (sz + 1)) || i === ary.length - 1) {
        rst.push(t)
        t = []
      }
    }
    return rst
  }
  function compact(ary) {
    const rst = []
    for(let i=0; i<ary.length; i++) {
      if(ary[i]) {
        rst.push(ary[i])
      }
    }
    return rst
  }
  function concat(ary1, ...ary2) {
    const rst = []
    for(let i=0; i<ary1.length; i++) {
      rst.push(ary1[i])
    }
    for(let i=0; i<ary2.length; i++) {
      if(Array.isArray(ary2[i])) {
        for(let j=0; j<ary2[i].length; j++) {
          rst.push(ary2[i][j])
        }
      } else {
        rst.push(ary2[i])
      }
    }
    return rst
  }
  function difference(ary1, ...ary2) {
    const rst = []
    const map = {}
    for(let i=0; i<ary2.length; i++) {
      for(let j=0; j<ary2[i].length; j++) {
        if(map[ary2[i][j]] === undefined) {
          map[ary2[i][j]] = 1
        }
      }
    }
    for(let i=0; i<ary1.length; i++) {
      if(map[ary1[i]] === undefined) {
        rst.push(ary1[i])
      }
    }
    return rst
  }
  function differenceBy(ary1, ...ary2) {
    const rst = []
    const map = {}
    const ite = ary2[ary2.length - 1]
    let fn = null
    if(Array.isArray(ite)) {
        fn = val => val
    } else if(typeof ite === 'function') {
        fn = ite
        ary2.length--
    } else {
        fn = val => val[ite]
        ary2.length--
    }
    ary2.forEach(ary => {
        ary.forEach(val => {
            let tpy = fn(val)
            if(tpy!== undefined && map[tpy]===undefined) {
              map[tpy] = 1
            }
        })
    })
    ary1.forEach(val => {
        let tpy = fn(val)
        if(map[tpy] === undefined) {
          rst.push(val)
        }
    })
    return rst
  }
  //TO DO
  function differenceWith(ary1, ...ary2) {
    const rst = []
    const fn = ary2[ary2.length - 1]
    ary2.length--
    ary1.forEach(item => {
      let flag = true
      ary2.forEach(elt => {
        elt.forEach(tpy => {
          if(fn(item, tpy)) {
            flag = false
          }
        })
      })
      if(flag) {
        rst.push(item)
      }
    })
  }
  function drop(ary, n=1) {
    const rst = []
    if(n === 0) {
      return ary
    }
    for(let i=n; i<ary.length; i++) {
      rst.push(ary[i])
    }
    return rst
  }
  function dropRight(ary, n=1) {
    const rst = []
    if(n === 0) {
      return ary
    }
    for(let i=0; i<ary.length-n; i++) {
      rst.push(ary[i])
    }
    return rst
  }
  //TO DO
  function dropRightWhile(ary1, ary2) {
    const rst = []
    const fn = ary2[ary2.length - 1]
    ary2.length--
    
  }
  function fill(ary, val, start=0, end=ary.length) {
    const rst = []
    for(let i=0; i<ary.length; i++) {
      if(i>=start && i<end) {
        rst.push(val)
      } else {
        rst.push(ary[i])
      }
    }
  }
  function findIndex(ary) {

  }
/*=========================Util==========================*/
  function identity(val) {
    return val
  }
/*********************************************************/
  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    differenceBy: differenceBy,
    differenceWith: differenceWith,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    findIndex: findIndex
  }
}()