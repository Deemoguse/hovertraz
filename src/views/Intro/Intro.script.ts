import anime from 'animejs'
import ShakeJs from 'shake.js'

type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null

// =====================================================

class ReleaseLettersAnimation {

	private readonly animation: () => anime.AnimeInstance
	private ended: boolean = false

	constructor (targets: AnimeTarget) {
		this.animation = () => anime({
			targets: targets,
			translateX: this.ended === true ? 0 : () => anime.random(-25, 25),
			translateY: this.ended === true ? 0 : () => anime.random(-25, 25),
			scale: this.ended === true ? 1 : () => anime.random(0.8, 1.6),
			rotate: this.ended === true ? 0 : () => anime.random(-45, 45),
			delay: () => anime.random(0, 250),
			easing: 'spring',
			begin: () => (this.ended = !this.ended)
		})
	}

	public getAnimation (): () => anime.AnimeInstance {
		return this.animation
	}
}

// =====================================================

export default class FreeLetters {

	private readonly trigger: HTMLElement
	private readonly letters: readonly Element[]
	private readonly animation: () => anime.AnimeInstance

	constructor () {
		const letters: Element[] = []
		const rows = document.querySelectorAll('.intro .free-letters .free-letters__row')
		rows.forEach(el => {
			el.innerHTML = el.textContent.split('').map(letter => {
				return `<span class="free-letters__item">${letter}</span>`
			}).join('')
			el.querySelectorAll('.free-letters__item').forEach(el => letters.push(el))
		})

		this.trigger = document.querySelector('.intro__title .free-letters')
		this.letters = letters
		this.animation = new ReleaseLettersAnimation(this.letters).getAnimation()
	}

	public init (): void {
		new ShakeJs({
			threshold: 8,
			timeout: 1000
		}).start()

		const animation = () => window.innerWidth > 992 && this.animation()
		this.trigger.addEventListener('mouseenter', animation)
		this.trigger.addEventListener('mouseleave', animation)
		window.addEventListener('shake', () => this.animation());
	}
}