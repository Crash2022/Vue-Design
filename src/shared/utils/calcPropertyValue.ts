export default function(propName: any, originalValue: any, modificator: any) {
    const computedStyle: any = {}
    const timeQuantityOuter = originalValue.match(/^\d*\.?\d+/)[0]
    const timeUnit = originalValue.match(/s|(ms)$/)[0]
    const timeQuantityInner = Math.round(timeQuantityOuter * 1000 * modificator) / 1000

    computedStyle[propName] = timeQuantityInner + timeUnit
    return computedStyle
}