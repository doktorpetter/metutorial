import React, { Component } from 'react';
import { Appbar } from 'material-ui/AppBar';

class PrimaryNav extends React.Component {

	render() {
		return (
			<div>
				<AppBar
				    title="Ylf"
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				    style={{backgroundColor: '#3D5AFE'}}
				/>
			</div>
		);
	}
}

export default PrimaryNav;