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
  function differenceBy(ary, ...sths) {
    const rst = []
    const set = new Set
    let fn = null
    let L = sths.length
    if(isWhat('array', sths[L - 1])) {
      fn = doBy()
    } else {
      L--
      fn = doBy(sths[L])
    }
    for(let i=0; i<L; i++) {
      if(isWhat('array', sths[i])) {
        for(let item of sths[i]) {
          set.add(fn(item))
        }
      }
    }
    for(let item of ary) {
      if(!set.has(fn(item))) {
        rst.push(item)
      }
    }
    return rst
  }
  function differenceWith(ary, ...sths) {
    const rst = []
    const set = new Set
    let fn = null
    let L = sths.length
    if(isWhat('array', sths[L - 1])) {
      fn = doBy()
    } else {
      L--
      fn = doBy(sths[L])
    }
    for(let i=0; i<L; i++) {
      if(isWhat('array', sths[i])) {
        for(let item of sths[i]) {
          set.add(item)
        }
      }
    }
    for(let item1 of ary) {
      let flag = true
      for(let item2 of set) {
        if(fn(item1, item2)) {
          flag = false
          break
        }
      }
      if(flag) {
        rst.push(item1)
      }
    }
    return rst
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
  function dropRightWhile(ary, sth) {
    const rst = []
    const fn = doWhile(sth)
    for(let i=ary.length-1; i>=0; i--) {
      if(!fn(ary[i])) {
        for(let j=0; j<=i; j++) {
          rst.push(ary[j])
        }
        break
      }
    }
    return rst
  }
  function dropWhile(ary, sth) {
    const rst = []
    const fn = doWhile(sth)
    for(let i=0; i<ary.length; i++) {
      if(!fn(ary[i])) {
        for(let j=i; j<ary.length; j++) {
          rst.push(ary[j])
        }
        break
      }
    }
    return rst
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
    return rst
  }
  function findIndex(ary, sth, start=0) {
    const fn = doWhile(sth)
    for(let i=start; i<ary.length; i++) {
      if(fn(ary[i])) {
        return i
      }
    }
    return -1
  }
  function findLastIndex(ary, sth, end=ary.length-1) {
    const fn = doWhile(sth)
    for(let i=end; i>=0; i--) {
      if(fn(ary[i])) {
        return i
      }
    }
    return -1
  }
  function flatten(ary) {
    const rst = []
    for(let elt of ary) {
      if(isWhat('array', elt)) {
        for(let e of elt) {
          rst.push(e)
        }
      } else {
        rst.push(elt)
      }
    }
    return rst
  }
  function flattenDeep(ary, rst=[]) {
    for(let elt of ary) {
      if(isWhat('array', elt)) {
        flattenDeep(elt, rst)
      } else {
        rst.push(elt)
      }
    }
    return rst
  }
  function flattenDepth(ary, dpt=1, rst=[]) {
    for(let elt of ary) {
      if(!isWhat('array', elt) || dpt===0) {
        rst.push(elt)
      } else {
        flattenDepth(elt, --dpt, rst)
      }
    }
    return rst
  }
  function fromPairs(ary) {
    const rst = {}
    for(let elt of ary) {
      rst[elt[0]] = elt[1]
    }
    return rst
  }
  function head(ary) {
    return ary[0]
  }
  function indexOf(ary, vl, stt=0) {
    for(let i=stt; i<ary.length; i++) {
      if(ary[i] === vl) {
        return i
      }
    }
    return -1
  }
  function initial(ary) {
    const rst = []
    for(let i=0; i<ary.length-1; i++) {
      rst.push(ary[i])
    }
    return rst
  }
  function intersection(ary, ...arys) {
    const rst = []
    const map = new Map
    for(let ary of arys) {
      for(let item of ary) {
        if(map.has(item)) {
          map.set(item, map.get(item)+1)
        } else {
          map.get(item, 1)
        }
      }
    }
    for(let item of ary) {
      map.forEach((v, k) => {
        if(item===k && v===arys.length) {
          rst.push(item)
        }
      })
    }
    return rst
  }
  function intersectionBy(ary, ...sths) {
    const rst = []
    const map = new Map
    let fn = null
    let L = sths.length
    if(isWhat('array', sths[L - 1])) {
      fn = doBy()
    } else {
      L--
      fn = doBy(sths[L])
    }
    for(let i=0; i<L; i++) {
      for(let item of sths[i]) {
        let tpy = fn(item)
        if(map.has(tpy)) {
          map.set(tpy, map.get(tpy)+1)
        } else {
          map.set(tpy, 1)
        }
      }
    }
    for(let item of ary) {
      map.forEach((v, k) => {
        if(fn(item)===v && k===L) {
          rst.push(item)
        }
      })
    }
    return rst
  }
  function intersectionWith(ary, ...sths) {
    const rst = []
    let fn = null
    let L = sths.length
    if(isWhat('array', sths[L - 1])) {
      fn = doWith()
    } else {
      L--
      fn = doWith(sths[L])
    }
    for(let item1 of ary) {
      let flag1 = true
      for(let i=0; i<L; i++) {
        let flag2 = true
        for(let item2 of sths[i]) {
          if(fn(item1, item2)) {
            flag2 = false
            break
          }
        }
        if(flag2) {
          flag1 = false
          break
        }
      }
      if(flag1) {
        rst.push(item1)
      }
    }
    return rst
  }
/*=========================Lang==========================*/
  function isMatch(ojt, src) {
    if(getWhat(ojt) !== getWhat(src)) {
      return false
    }
    for(let k of Object.keys(src)) {
      if(isWhat('ojt', src[k]) && !isMatch(ojt, src)) {
        return false
      } else if(ojt[k] !== src[k]) {
        return false
      }
    }
    return true
  }
/*=========================Lang==========================*/
/*=========================Util==========================*/
  function identity(val) {
    return val
  }
  function matches(src) {
    return sth => isMatch(sth, src)
  }
  function matchesProperty(pt, vl) {
    return sth => property(pt)(sth) === vl
  }
  function property(path) {
    const rex = /\w+?(?=$|[\.\[\]])/g
    ps = String(path).match(rex)
    return sth => {
      let rst = sth
      for(let p of ps) {
        if(isWhat('pmt', sth)) {
          return undefined
        }
        rst = rst[p]
      }
      return rst
    }
  }
/*=========================Util==========================*/
/*=========================Self==========================*/
  function comparator() {
    return false
  }
  function getWhat(sth) {
    let typed = null
    const tpo = typeof sth
    if(tpo==='function' || tpo==='object') {
      const tpy = Object.prototype.toString.call(sth)
      const tstr = tpy.slice(8, tpy.length-1).toLowerCase()
      if(tstr === 'null') {
        typed = 'pmt-' + tstr
      } else {
        typed = 'ojt-' + tstr
      }
    } else {
      typed = 'pmt-' + tpo
    }
    return typed
  }
  function isWhat(type, sth) {
    const typed = getWhat(sth).split('-')
    type = type.toLowerCase()
    if(type===typed[0] || type===typed[1]) {
      return true
    }
    return false
  }
  function doWith(sth) {
    let fn = comparator
    if(isWhat('function', sth)) {
      fn = sth
    }
    return fn
  }
  function doBy(sth) {
    let fn = identity
    if(isWhat('function', sth)) {
      fn = sth
    } else if(isWhat('string', sth)) {
      fn = property(sth)
    }
    return fn
  }
  function doWhile(sth) {
    let fn = identity
    if(isWhat('function', sth)) {
      fn = sth
    } else if(isWhat('object', sth)) {
      fn = matches(sth)
    } else if(isWhat('array', sth)) {
      fn = matchesProperty(...sth)
    } else if(isWhat('string', sth)) {
      fn = property(sth)
    }
    return fn
  }
/*=========================Self==========================*/
/*********************************************************/
  return {
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    differenceWith,
    drop,
    dropRight,
    dropRightWhile,
    dropWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    intersection,
    intersectionBy,
    intersectionWith,
    identity,
    matches,
    matchesProperty,
    property,
  }
}()