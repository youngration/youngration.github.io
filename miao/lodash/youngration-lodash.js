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
  function differenceBy(ary1, ary2=[], ite=null) {
    const rst = []
    const map = {}
    if(Array.isArray(ite)) {
      ite.forEach(val=>{
        if(map[val] === undefined) {
          map[val] = 1
        }
      })
      ite = null
    }
    for(let i=0; i<ary2.length; i++) {
      let tpy = null
      if(ite === null) {
        tpy = ary2[i]
      } else if(typeof ite === 'function') {
        tpy = ite(ary2[i])
      } else {
        tpy = ary2[i][ite]
      }
      if(map[tpy] === undefined) {
        map[tpy] = 1
      }
    }
    for(let i=0; i<ary1.length; i++) {
      let tpy = null
      if(ite === null) {
        tpy = ary1[i]
      } else if(typeof ite === 'function') {
        tpy = ite(ary1[i])
      } else {
        tpy = ary1[i][ite]
      }
      if(map[tpy] === undefined) {
        rst.push(ary1[i])
      }
    }
    return rst
  }
  function differenceWith(ary1, ary2=[], cpt=null) {
    const rst = []
    const map = {}
    for(let i=0; i<ary2.length; i++) {
      let tpy = null
      if(cpt === null) {
        tpy = ary2[i]
      } else {
        tpy = cpt(ary2[i])
      }
      if(map[tpy] === undefined) {
        map[tpy] = 1
      }
    }
    for(let i=0; i<ary1.length; i++) {
      let tpy = null
      if(cpt === null) {
        tpy = ary1[i]
      } else {
        tpy = cpt(ary1[i])
      }
      if(map[tpy] === undefined) {
        rst.push(ary1[i])
      }
    }
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
    for(let i=0; i<n; i++) {
      rst.push(ary[i])
    }
    return rst
  }
  function dropRightWhile(ary, pdt=null) {
    const rst = []
    if(ite === null) {
      return ary
    } else if(typeof ite === 'function') {
      ary.forEach(emt => {
        if(!ite(emt)) {
          rst.push(emt)
        }
      });
    } else if(Array.isArray(ite)) {
      ary.forEach(emt => {
        if(emt[ite[0]] !== ite[1]) {
          rst.push(emt)
        }
      })
    } else if(typeof ite === 'object') {
      ary.forEach(emt => {
        let flag = true
        for(k in ite) {
          if(emt[k] === ite[k]) {
            flag = false
            break
          }
        }
        if(flag) {
          rst.push(emt)
        }
      })
    } else {

    }
  }


/*********************************************************/
  return {
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    differenceWith,
    drop,
    dropRight
  }
}()