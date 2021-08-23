export default class SectionVisible {

	private readonly elems: NodeListOf<HTMLElement>
	private readonly anchors: NodeListOf<HTMLLinkElement>
	private activeSection: HTMLElement

	constructor () {
		this.anchors = document.querySelectorAll('.header__nav-item')
		this.elems = document.querySelectorAll('.sections__item')
		this._init()
	}

	private _visibleTest (target: HTMLElement): void {
		const targetPosition = {
			top: window.pageYOffset + target.getBoundingClientRect().top + (window.innerHeight / 2),
			bottom: window.pageYOffset + target.getBoundingClientRect().bottom - (window.innerHeight / 2)
		}

		const windowPosition = {
			top: (window.pageYOffset),
			bottom: (window.pageYOffset + document.documentElement.clientHeight)
		}

		if (
			targetPosition.bottom > windowPosition.top &&
			targetPosition.top < windowPosition.bottom &&
			(this.activeSection?.id || '') !== target.id
		) {
			this.activeSection = target
		}
	}

	private _init () {
		this.elems.forEach(el => window.addEventListener('scroll', () => {
			this._visibleTest(el)
		}))
	}

	public get getActiveSection () {
		return this.activeSection
	}
}