import React, { useEffect, useState } from 'react';
import urlAxios from '../config/axios'
import Inputs from './Inputs'
import Tabla from './Tabla'


const Home = () => {
    const [textName, setTextName] = useState('')
    const [urls, urlSave] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const consultarAPI = () => {
            urlAxios.get('/')
                .then(respuesta => {
                    console.log(respuesta.data);
                    urlSave(respuesta.data)
                })
                .catch(error => {
                    console.log(error);
                })
        }
        consultarAPI()
    }, [isLoading])




    const handleCortar = url => {
        
        urlAxios.post('/url', {
            url
        })
            .then(respuesta => {
                console.log('ok');
                setIsLoading(!isLoading)
                setTextName('')
            })
            .catch(respuesta => {
                console.log(respuesta.status);
            })
    }

    const handleChange = e => {
        console.log(e.target.value)
        setTextName(e.target.value)
    }

    return (
        <div>
            <Inputs textName={textName} handleChange={handleChange} handleCortar={handleCortar} />
            <Tabla urls={urls} />
        </div>
    )
}

export default Home