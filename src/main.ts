import FreeLetters from './views/Intro/Intro.script'
import ColorPicker from './components/ColorPicker/ColorPicker.script'
import {headerFill, headerMenu} from './components/Header/Header.script'
import animations from "./scripts/animations";

// Functions
	headerFill()
	headerMenu()
	animations()

// Classes
	new FreeLetters().init()
	new ColorPicker().init()
