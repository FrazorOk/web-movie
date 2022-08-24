import { useEffect, useState } from 'react';

export let useSearch = (selectedCallback) => {
	let [searchMode, setSearchMode] = useState(false);
	let [focus, setFocus] = useState(false);
	let [hover, setHover] = useState(false);
	let [inputValue, setInputValue] = useState('');
	let [validate, setValidate] = useState(false);

	useEffect(() => {
		setValidate((validate = false));
	}, [validate]);

	//events for container search
	let eventMouseLeave = () => {
		if (!focus) {
			setSearchMode((searchMode = false));
			setInputValue((inputValue = ''));
		}
		setHover((hover = false));
	};
	let eventMouseEnter = () => {
		setSearchMode((searchMode = true));
		setHover((hover = true));
	};

	// events for input
	let eventFocusInput = () => {
		setSearchMode((searchMode = true));
		setFocus((focus = true));
	};
	let eventBlurInput = () => {
		if (!hover) {
			setInputValue((inputValue = ''));
		}
		setFocus((focus = false));
		setSearchMode((searchMode = false));
	};
	let eventChangeInput = (e) => {
		setSearchMode((searchMode = true));
		setInputValue((inputValue = e.target.value));
	};
	let eventKeyDown = (e) => {
		if (e.key === 'Enter') {
			if (inputValue) {
				setValidate((validate = true));
				selectedCallback(inputValue);
			}
			setSearchMode((searchMode = false));
			setFocus((focus = false));
			setInputValue((inputValue = ''));
		}
	};

	// event for btn
	let eventClickImg = () => {
		if (inputValue) {
			setValidate((validate = true));
			selectedCallback(inputValue);
			setSearchMode((searchMode = false));
			setValidate((validate = true));
		} else {
			setSearchMode((searchMode = true));
		}
		setInputValue((inputValue = ''));
	};

	return {
		eventsContainer: {
			eventMouseEnter,
			eventMouseLeave,
		},
		eventsInput: {
			eventFocusInput,
			eventBlurInput,
			eventChangeInput,
			eventKeyDown,
		},
		eventsBtn: { eventClickImg },
		state: {
			searchMode,
			validate,
			inputValue,
		},
	};
};
