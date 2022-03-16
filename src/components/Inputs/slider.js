import Slider from 'rc-slider';
import React from 'react';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

const LabelStyle = styled.div`
	width: 120px;
	display: inline-block;
`;

const AllocationSlider = props => {
	const min = 0;
	const max = 100;
	const step = 5;
	const [value, setValue] = React.useState(0);

	const onSliderChange = val => {
		props.onUpdate(Number(-(value - val)), val);

		setValue(val);
	};

	return (
		<LabelStyle>
			<span>{value + '%'}</span>

			<Slider value={value} min={min} max={max} step={step} onChange={onSliderChange} />
		</LabelStyle>
	);
};

export default AllocationSlider;
