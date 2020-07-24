import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#ccc'
  },
  AppBar: {
  	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  title: {
    flexGrow: 1,
  },
});


const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.AppBar}>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
	            		BUENA
	          		</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;