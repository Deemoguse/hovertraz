import FreeLetters from './views/Intro/Intro.script'
import ColorPicker from './components/ColorPicker/ColorPicker.script'
import SectionVisible from './scripts/sectionVisible'
import animations from './scripts/animations'
import {headerFill, headerMenu, headerAnchor, highlightAnchor} from './components/Header/Header.script'

// Functions
	headerFill()
	headerMenu()
	animations()
	headerAnchor()
	highlightAnchor()

// Classes
	new FreeLetters().init()
	new ColorPicker().init()