import React, { Fragment,useState,useEffect } from "react";
import urlAxios from '../config/axios'

const RedUrl = (props) => {
	console.log(props.match.params.url)
	useEffect(() => {
		urlAxios.get(`/${props.match.params.url}`)
		.then(respuesta => {
			console.log(respuesta)
		})
		.catch( respuesta => {
			console.log(respuesta);
		})
	}, []);
	return(
		<h1>Hola</h1>
	)
}

export default RedUrl