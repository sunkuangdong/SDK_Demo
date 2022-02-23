// FP 与 FCP 指标
const observer = new PerformanceObserver((list, observer) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
        console.log(entry)
        console.log(entry.name)
        console.log(entry.startTime)
        console.log(entry.duration)
    })
})

observer.observe((
    {
        entryTypes: [
            'largest-contentful-paint',
            "paint",
            "first-input",
            'layout-shift'
        ]
    }
))