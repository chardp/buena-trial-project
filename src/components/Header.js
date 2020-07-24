import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from './Link';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#ccc'
  },
  AppBar: {
  	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  title: {
    // flexGrow: 1,
  },
  item: {
  	color: '#fff',
  	textDecoration: 'none',
  	padding: 10,
  	'&:hover': {
  		textDecoration: 'underline'
  	},
  },
  
  nav: {
  	fontWeight: 'normal',
  	marginLeft: 40
  }
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
	          		<Typography variant="h6" className={classes.nav}>
	          			<Link href="/" className={classes.item}>Breeds</Link>
	          			<Link href="/favorites" className={classes.item}>Favorites</Link>
	          		</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;