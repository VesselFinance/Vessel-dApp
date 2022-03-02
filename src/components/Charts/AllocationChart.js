import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { tokenData } from '../../Data/tokens';

const getData = (ratio, wrappertokens) => {
	const pieData = [
		{
			id: 'token-0',
			label: tokenData[wrappertokens[0]],
			value: ratio[0] / 100,
			color: 'hsl(291, 61%, 57%)',
		},
		{
			id: 'token-1',
			label: tokenData[wrappertokens[1]],
			value: ratio[1] / 100,
			color: 'hsl(50, 60%, 52%)',
		},
		{
			id: 'token-2',
			label: tokenData[wrappertokens[2]],
			value: ratio[2] / 100,
			color: 'hsl(45, 83%, 45%)',
		},
		{
			id: 'token-3',
			label: tokenData[wrappertokens[3]],
			value: ratio[3] / 100,
			color: 'hsl(218, 58%, 75%)',
		},
		{
			id: 'token-4',
			label: tokenData[wrappertokens[4]],
			value: ratio[4] / 100,
			color: 'hsl(2, 55%, 61%)',
		},
		{
			id: 'token-5',
			label: tokenData[wrappertokens[5]],
			value: ratio[5] / 100,
			color: 'hsl(195, 51%, 61%)',
		},
		{
			id: 'token-6',
			label: tokenData[wrappertokens[6]],
			value: ratio[6] / 100,
			color: 'hsl(216, 62%, 57%)',
		},
		{
			id: 'token-7',
			label: tokenData[wrappertokens[7]],
			value: ratio[7] / 100,
			color: 'hsl(293, 62%, 48%)',
		},
		{
			id: 'token-8',
			label: tokenData[wrappertokens[8]],
			value: ratio[8] / 100,
			color: 'hsl(167, 35%, 55%)',
		},
		{
			id: 'token-9',
			label: tokenData[wrappertokens[9]],
			value: ratio[9] / 100,
			color: 'hsl(199, 86%, 44%)',
		},
		{
			id: 'token-10',
			label: tokenData[wrappertokens[10]],
			value: ratio[10] / 100,
			color: 'hsl(291, 61%, 57%)',
		},
		{
			id: 'token-11',
			label: tokenData[wrappertokens[11]],
			value: ratio[11] / 100,
			color: 'hsl(50, 60%, 52%)',
		},
		{
			id: 'token-12',
			label: tokenData[wrappertokens[12]],
			value: ratio[12] / 100,
			color: 'hsl(45, 83%, 45%)',
		},
		{
			id: 'token-13',
			label: tokenData[wrappertokens[13]],
			value: ratio[13] / 100,
			color: 'hsl(218, 58%, 75%)',
		},
		{
			id: 'token-14',
			label: tokenData[wrappertokens[14]],
			value: ratio[14] / 100,
			color: 'hsl(2, 55%, 61%)',
		},
		{
			id: 'token-15',
			label: tokenData[wrappertokens[15]],
			value: ratio[15] / 100,
			color: 'hsl(195, 51%, 61%)',
		},
		{
			id: 'token-16',
			label: tokenData[wrappertokens[16]],
			value: ratio[16] / 100,
			color: 'hsl(216, 62%, 57%)',
		},
		{
			id: 'token-17',
			label: tokenData[wrappertokens[17]],
			value: ratio[17] / 100,
			color: 'hsl(293, 62%, 48%)',
		},
		{
			id: 'token-18',
			label: tokenData[wrappertokens[18]],
			value: ratio[18] / 100,
			color: 'hsl(167, 35%, 55%)',
		},
		{
			id: 'token-19',
			label: tokenData[wrappertokens[19]],
			value: ratio[19] / 100,
			color: 'hsl(199, 86%, 44%)',
		},
	];
	return pieData;
};

const Pie = props => {
	return (
		<ResponsivePie
			data={getData(props.ratio, props.wrappertokens)}
			margin={{ top: 30, right: 40, bottom: 30, left: 40 }}
			innerRadius={0.5}
			padAngle={0.7}
			valueFormat=" >-0.0~%"
			isInteractive={false}
			cornerRadius={3}
			colors={{ datum: 'data.color' }}
			borderWidth={1}
			borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
			arcLinkLabelsSkipAngle={15}
			arcLinkLabelsTextColor="#ffffff"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsSkipAngle={20}
			arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
			activeOuterRadiusOffset={10}
			arcLabelsRadiusOffset={0.5}
		/>
	);
};

export default Pie;
