import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {renderDinamicList} from '../services/selectorTipo';
const json = require('../services/documentoTipoUno.json');

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding:100,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	formControl: {
		minWidth: 300,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const FormsDinamics = ()  =>{

	/*const [selectedDate, setSelectedDate] = React.useState(
		new Date("2014-08-18T21:11:54")
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};*/

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{renderDinamicList(json.estructura, classes)}
			</Grid>
		</div>
	);
}
export default (FormsDinamics);