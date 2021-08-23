import SectionVisible from "../../scripts/sectionVisible";

export function headerMenu (): void {
	const menu: HTMLElement = document.querySelector('.header__nav')
	const buttons = document.querySelectorAll('.header__nav-toggle')

	buttons.forEach(el => el.addEventListener('click', () => {
		menu.classList.toggle('header__nav--active')
	}))

	// Define position of clip-path mask and `close` button
	const setMaskCenter = () => {
		const ref = buttons[1] as HTMLElement
		const posX = ref.getBoundingClientRect().left + ref.clientWidth / 2

		menu.style.setProperty('--mask-pos-x', `${posX}px`);
		(buttons[0] as HTMLElement).style.setProperty('--pos-x', `${posX}px`)
	}

	setMaskCenter()
	window.addEventListener('resize', setMaskCenter)
}


export function headerFill (): void {
	const header: HTMLElement = document.querySelector('.header')
	const intro: HTMLElement = document.querySelector('.intro')

	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= intro.clientHeight - header.clientHeight / 2) {
			header.classList.add('header--active')
		} else {
			header.classList.remove('header--active')
		}
	})
}


export function headerAnchor () {
	const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.header__nav-item')

	links.forEach(el => {
		const anchor = document.querySelector(el.getAttribute('href'))
		const deactivate = () => {
			const activeELem = document.querySelector('.header__nav-item--active')
			if (activeELem) activeELem.classList.remove('header__nav-item--active')
		}

		// Click event
		el.addEventListener('click', (e) => {
			e.preventDefault(); deactivate()
			anchor.scrollIntoView({behavior: "smooth"})
			el.classList.add('header__nav-item--active')
		})
	})
}


export function highlightAnchor () {
	const section = new SectionVisible()
	const headerLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.header__nav-item')

	window.addEventListener('scroll', () => headerLinks.forEach(el => {
		if (el.getAttribute('href') === `#${section.getActiveSection.id}`) {
			el.classList.add('header__nav-item--active')
		} else {
			el.classList.remove('header__nav-item--active')
		}
	}))
}
