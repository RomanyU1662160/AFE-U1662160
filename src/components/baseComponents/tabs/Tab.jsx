import React, { Fragment, useContext, useEffect } from 'react';

import { InputItem, InputLabel, TabContent } from './style';
import { ThemeContext } from '../../../contexts/ThemeContext';

export default function Tab(props) {
	const { type, name, id, label, content } = props;
	const { theme } = useContext(ThemeContext);

	return (
		<Fragment>
			<InputItem type={type} name={name} id={id} label={label} />
			<InputLabel theme={theme} htmlFor={id} onClick={() => showContent(id + 'content')}>
				{label}
			</InputLabel>

			<TabContent id={id + 'content'}>
				{Object.entries(content).map(([ key, value ]) => {
					return (
						<div className="row border-bottom" key={value}>
							<div className="col-md-6"> {key.toUpperCase()} : </div>
							<div className="col-md-6"> {value}</div>
						</div>
					);
				})}
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
