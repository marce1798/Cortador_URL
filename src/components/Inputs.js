import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import urlAxios from '../config/axios'

const Inputs = ({
	textName, handleChange, handleCortar
}) => {



	return (
		<Fragment>
			<div className="container">
				<h1 className="mt-5 text-center text-primary font-weight-bold">
					URL Shrinker
				</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						handleCortar(textName)
					}}
					action="/api/url"
					method="POST"
					className="my-5 shadow p-3 rounded border bg-white"
				>
					<div className="row p-2 d-flex justify-content-around align-items-center">
						{/* <label for="url" className="sr-only">Url</label> */}
						<input
							required
							value={textName}
							onChange={(e) => {
								handleChange(e)
							}}
							placeholder="Url"
							type="url"
							name="url"
							id="url"
							className="form-control col mx-2"
						/>
						<button className="btn btn-primary col-2 mx-2" type="submit">Shrink</button>
					</div>
					<div className="row d-flex justify-content-center">
						<input
							required
							readOnly
							placeholder="Result"
							type="url"
							name="urlResult"
							id="urlResult"
							className="form-control w-25 mx-3 text-center"
						/>
					</div>
				</form>
			</div>
		</Fragment>);
}

export default Inputs