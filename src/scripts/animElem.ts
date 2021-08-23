import anime from "animejs";

export type Options = {
	duration?: number
	delay?: number
	quota?: number
	inStart?: boolean
}

export default class Animation {

	private readonly elem: HTMLElement
	private readonly animation: anime.AnimeInstance
	private readonly options: Options
	private lock: boolean = false

	constructor (elem: HTMLElement, opt: Options) {
		this.elem = elem
		this.options = opt
		this.animation = anime({
			autoplay: this.options.inStart,
			targets: this.elem,
			translateY: [150,0],
			opacity: [0,1],
			delay: this.options.delay,
			duration: this.options.duration,
			easing: 'cubicBezier(.065, .3, .26, .985)'
		})
	}

	public init () {
		if (this.options.inStart === false) return window.addEventListener('scroll', () => {
			if (
				this.elem.getBoundingClientRect().top < window.innerHeight - this.options.quota
				&& this.lock === false
			) {
				this.lock = true
				this.animation.play()
			}
		})
	}
}