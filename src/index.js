import {getLCP, getFID, getCLS, getTTFB, getFCP} from 'web-vitals'
function values(rest){
    window.localStorage.setItem(rest.name, Math.round(rest.value) + "ms")
}
function plublicFn({entries, ...rest}){
    values(rest)
}
getCLS(plublicFn);
getFID(plublicFn);
getLCP(plublicFn);
getTTFB(plublicFn);
getFCP(plublicFn);
// DNS 耗时
console.log(window.performance.timing)

// TCP 耗时
// FP 与 FCP 指标
// const observer = new PerformanceObserver((list, observer) => {
//     const entries = list.getEntries()
//     entries.forEach((entry) => {
//         console.log(entry.name)
//         console.log(entry.startTime)
//         console.log(entry.duration)
//     })
// })
//
// observer.observe(
//     {
//         entryTypes: [
//             // 'largest-contentful-paint',
//             "paint",
//             // "first-input",
//             // 'layout-shift'
//         ]
//     }
// )