import React, { Fragment } from "react";

const Tabla = ({ urls }) => {
    const pulsar = (e)=>{
        
    }
    if (urls.length === 0) return null
    return (
        <Fragment>
            <div className="container shadow p-3 rounded mb-5 border table-responsive">
                    <table
                        className="table table-responsive table-striped table-hover table-bordered 
					"
                    >
                        <thead className="text-center bg-primary text-light">
                            <tr>
                                <th className="align-middle">Full URL</th>
                                <th className="align-middle">Short URL</th>
                                <th className="align-middle">Number Times Shortened</th>
                                <th className="align-middle">Last Time Shortened</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urls.slice().reverse().map(url => (

                                <tr className="text-center">
                                    <td className="align-middle">
                                        <a className="" href={url.url}>{url.url}</a>
                                    </td>
                                    <td className="align-middle">
                                        <a
                                            className="text-success"
                                            //target="_blank"
                                            href={url.url}
                                            onClick = {(e) => {pulsar(e)}}
                                        >{url.shortened}
                                        </a>
                                    </td>
                                    <td className="align-middle">{url.numberTimesShortened}</td>
                                    <td className="align-middle">{url.lastTimeShortened}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </Fragment>
    );
}

export default Tabla;