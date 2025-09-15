export default defineNuxtPlugin(() => {
    if (process.server) return

    function grained(ele, opt) {
        const doc = document
        let element = null
        let elementId = null

        if (typeof ele === 'string') {
            element = doc.getElementById(ele.replace('#', ''))
        }

        if (!element) {
            console.error('Grained: cannot find the element with id ' + ele)
            return
        } else {
            elementId = element.id
        }

        if (element.style.position !== 'absolute') {
            element.style.position = 'relative'
        }
        element.style.overflow = 'hidden'

        const prefixes = ['', '-moz-', '-o-animation-', '-webkit-', '-ms-']

        const options = {
            animate: true,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.1,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
            grainChaos: 0.5,
            grainSpeed: 20,
            ...opt,
        }

        const generateNoise = () => {
            const canvas = doc.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = options.patternWidth
            canvas.height = options.patternHeight

            for (
                let w = 0;
                w < options.patternWidth;
                w += options.grainDensity
            ) {
                for (
                    let h = 0;
                    h < options.patternHeight;
                    h += options.grainDensity
                ) {
                    const rgb = (Math.random() * 256) | 0
                    ctx.fillStyle = `rgba(${rgb},${rgb},${rgb},${options.grainOpacity})`
                    ctx.fillRect(w, h, options.grainWidth, options.grainHeight)
                }
            }
            return canvas.toDataURL('image/png')
        }

        const noise = generateNoise()
        let animation = ''
        const keyFrames = [
            '0%:-10%,10%',
            '10%:-25%,0%',
            '20%:-30%,10%',
            '30%:-30%,30%',
            '40%::-20%,20%',
            '50%:-15%,10%',
            '60%:-20%,20%',
            '70%:-5%,20%',
            '80%:-25%,5%',
            '90%:-30%,25%',
            '100%:-10%,10%',
        ]

        prefixes.forEach((pre) => {
            animation += `@${pre}keyframes grained{`
            keyFrames.forEach((frame) => {
                const [percent, values] = frame.split(':')
                animation += `${percent}{${pre}transform:translate(${values});}`
            })
            animation += '}'
        })

        let style = doc.getElementById('grained-animation')
        if (style) style.remove()

        style = doc.createElement('style')
        style.type = 'text/css'
        style.id = 'grained-animation'
        style.innerHTML = animation
        doc.body.appendChild(style)

        let styleAdded = doc.getElementById(`grained-animation-${elementId}`)
        if (styleAdded) styleAdded.remove()

        style = doc.createElement('style')
        style.type = 'text/css'
        style.id = `grained-animation-${elementId}`
        doc.body.appendChild(style)

        let rule = `background-image:url(${noise});position:absolute;content:"";height:300%;width:300%;left:-100%;top:-100%;`
        if (options.animate) {
            prefixes.forEach((pre) => {
                rule += `${pre}animation-name:grained;`
                rule += `${pre}animation-iteration-count:infinite;`
                rule += `${pre}animation-duration:${options.grainChaos}s;`
                rule += `${pre}animation-timing-function:steps(${options.grainSpeed},end);`
            })
        }

        const selectorElement = `#${elementId}::before`
        style.sheet.insertRule(`${selectorElement}{${rule}}`)
    }

    return {
        provide: {
            grained,
        },
    }
})
