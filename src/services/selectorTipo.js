import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

	const renderDinamicList = (data, styles) =>{
		const listComplete = data.map( (element, index) => {
			const key = index.toString();
			switch (element.tipo) {
				case "inputText" :
					return (
						<Grid item xs={element.dimensions} key={index.toString()}>
							<TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
						</Grid>
					)
					break;
				case "calendar" :
					return (
						<Grid item xs={element.dimensions} key={index.toString()}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<DateTimePicker
									label="DateTimePicker"
									inputVariant="outlined"
									//value={selectedDate}
									//onChange={handleDateChange}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
					)
					break;
				case "select" :
					return (
						<Grid item xs={element.dimensions} key={index.toString()}>
							<FormControl variant="outlined" className={styles.formControl} >
								<InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									fullWidth
									//value={age}
									//onChange={handleChange}
									label="Age"
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					)
					break;
			}

		})
		return listComplete;
	}

export {
	renderDinamicList,
};