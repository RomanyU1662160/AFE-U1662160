import React, { Fragment } from 'react';

import { InputItem, InputLabel, TabContent } from './style';

export default function Tab(props) {
	const { type, name, id, label, flight } = props;

	return (
		<Fragment>
			<InputItem type={type} name={name} id={id} label={label} />
			<InputLabel htmlFor={id} onClick={() => showContent(id + 'content')}>
				{label}
			</InputLabel>
			<TabContent id={id + 'content'}>
				{flight} {label}
			</TabContent>
		</Fragment>
	);
}

const showContent = (content) => {
	const tabContent = document.querySelector(`#${content}`);
	hideOtherContents(`#${content}`);
	return (tabContent.style.display = 'block');
};

const hideOtherContents = (content) => {
	const otherContents = [ ...document.querySelectorAll(TabContent) ];
	otherContents.map((otherContent) => {
		if (otherContent.id !== content) {
			return (otherContent.style.display = 'none');
		}
		return (otherContent.style.display = 'block');
	});
};
