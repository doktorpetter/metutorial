import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class PrimaryNav extends React.Component {

	render() {
		return (
			<div>
				<AppBar
				    title="Ylf"
				    titleStyle={{color: 'black'}}
				    style={{backgroundColor: '#D6E8D1'}}
				    zDepth={2}
				/>
			</div>
		);
	}
}

export default PrimaryNav;