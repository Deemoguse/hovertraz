import animElem from './animElem'

export default function animations () {
	const elems: NodeListOf<HTMLElement> = document.querySelectorAll('.anim')
	elems.forEach(el => new animElem(el, {
		duration: Number(el.dataset.animDuration) || 1000,
		delay: Number(el.dataset.animDelay) || 0,
		quota: Number(el.dataset.animQuota || 75),
		inStart: el.classList.contains('anim-in-start')
	}).init())
}