export default class ColorPicker {

	private readonly buttons: NodeListOf<HTMLElement>
	private readonly images: NodeListOf<HTMLElement>
	private activeId: number = null

	constructor () {
		this.buttons = document.querySelectorAll('.color-picker__controller .controller__variant')
		this.images = document.querySelectorAll('.color-picker__img img')
	}

	private _render (nodeList: NodeListOf<HTMLElement>, className: string) {
		nodeList.forEach(el => {
			if (Number(el.dataset.colorPickerId) === this.activeId)
				return el.classList.add(className)

			el.classList.remove(className)
		})
	}

	public init () {
		this.buttons.forEach(el => el.addEventListener('click', () => {
			this.activeId = Number(el.dataset.colorPickerId)
			this._render(this.buttons, 'controller__variant--active')
			this._render(this.images, 'color-picker__img--active')
		}))
	}
}