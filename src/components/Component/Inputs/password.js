import React, { useEffect } from 'react'
import { gsap } from 'https://cdn.skypack.dev/gsap@3.11.0'  
import { MorphSVGPlugin, ScrambleTextPlugin } from 'gsap/all';

const Password = () => {

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrambleTextPlugin, MorphSVGPlugin);
      }, []);

const BLINK_SPEED = 0.075
const TOGGLE_SPEED = 0.125
const ENCRYPT_SPEED = 1

let busy = false

const EYE = document.querySelector('.eye')
const TOGGLE = document.querySelector('button')
const INPUT = document.querySelector('#password')
const PROXY = document.createElement('div')

// 'upperAndLowerCase'
const chars =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~,.<>?/;":][}{+_)(*&^%$#@!±=-§'

let blinkTl
const BLINK = () => {
  const delay = gsap.utils.random(2, 8)
  const duration = BLINK_SPEED
  const repeat = Math.random() > 0.5 ? 3 : 1
  blinkTl = gsap.timeline({
  	delay,
  	onComplete: () => BLINK(),
  	repeat,
  	yoyo: true,
  })
	  .to('.lid--upper', {
	  	morphSVG: '.lid--lower',
  		duration,
	  })
	  .to('#eye-open path', {
	  	morphSVG: '#eye-closed path',
  		duration,
	  }, 0)
}

BLINK()

const posMapper = gsap.utils.mapRange(-100, 100, 30, -30)
let reset
const MOVE_EYE = ({ x, y }) => {
	if (reset) reset.kill()
	reset = gsap.delayedCall(2, () => {
		gsap.to('.eye', { xPercent: 0, yPercent: 0, duration: 0.2 })
	})
	const BOUNDS = EYE.getBoundingClientRect()
	// Get distance and angle between two points
	gsap.set('.eye', {
		xPercent: gsap.utils.clamp(-30, 30, posMapper(BOUNDS.x - x)),
		yPercent: gsap.utils.clamp(-30, 30, posMapper(BOUNDS.y - y))
	})
}

window.addEventListener('pointermove', MOVE_EYE)

// Trick is to animate from discs and to discs.

TOGGLE.addEventListener('click', () => {
	if (busy) return
	const isText = INPUT.matches('[type=password]')
	const val = INPUT.value
	busy = true
	// Need to stop the blink here and kill it off. 
	TOGGLE.setAttribute('aria-pressed', isText)
	const duration = TOGGLE_SPEED

	if (isText) {
		if (blinkTl) blinkTl.kill()

		gsap.timeline({
			onComplete: () => {
				busy = false
			}
		})
			// Close the eye first and kill the TL
			.to('.lid--upper', {
		  	morphSVG: '.lid--lower',
	  		duration,
		  })
		  .to('#eye-open path', {
		  	morphSVG: '#eye-closed path',
	  		duration,
		  }, 0)
		  // Decrypt the text input
			.to(PROXY, {
				duration: ENCRYPT_SPEED,
				onStart: () => {
					INPUT.type = 'text'
				},
				onComplete: () => {
					PROXY.innerHTML = ''
					INPUT.value = val
				},
				scrambleText: {
					chars,
					text:
						INPUT.value.charAt(INPUT.value.length - 1) === ' '
							? `${INPUT.value.slice(0, INPUT.value.length - 1)}${chars.charAt(
									Math.floor(Math.random() * chars.length)
							  )}`
							: INPUT.value,
				},
				onUpdate: () => {
					const len = val.length - PROXY.innerText.length
					INPUT.value = `${PROXY.innerText}${new Array(len).fill('•').join('')}`
				},
			}, 0)
	} else {
		gsap.timeline({
			onComplete: () => {
				BLINK()
				busy = false
			}
		})
			.to('.lid--upper', {
		  	morphSVG: '.lid--upper',
	  		duration,
		  })
		  .to('#eye-open path', {
		  	morphSVG: '#eye-open path',
	  		duration,
		  }, 0)
			.to(PROXY, {
				duration: ENCRYPT_SPEED,
				onComplete: () => {
					INPUT.type = 'password'
					INPUT.value = val
					PROXY.innerHTML = ''
				},
				scrambleText: {
					chars,
					text: new Array(INPUT.value.length).fill('•').join(''),
				},
				onUpdate: () => {
					INPUT.value = `${PROXY.innerText}${val.slice(
						PROXY.innerText.length,
						val.length
					)}`
				},
			}, 0)
	}
})


const FORM = document.querySelector('form')
FORM.addEventListener('submit', event => event.preventDefault())
  return (
    <form action="">
  <div class="form-group">
    <label for="password">Password</label>
    <input id="password" type="password" required />
    <button type="button" title="Reveal Password" aria-pressed="false">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="eye-open">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12V20H12H1V12Z" fill="#D9D9D9" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
          </mask>
          <mask id="eye-closed">
            <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12V20H12H1V12Z" fill="#D9D9D9" />
          </mask>
        </defs>
        <path class="lid lid--upper" d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path class="lid lid--lower" d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <g mask="url(#eye-open)">
          <g class="eye">
            <circle cy="12" cx="12" r="4" fill="currentColor" />
            <circle cy="11" cx="13" r="1" fill="black" />
          </g>
        </g>
      </svg>
      <span class="sr-only">Reveal</span>
    </button>
  </div>
</form>
  )
}

export default Password