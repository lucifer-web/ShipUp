import React,{useState} from 'react'
import './Home.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Span, Span1, P, BlueButton, Img, BlueText1, Div} from '../../Component/Style/Styled'
import Img1 from '../../Assets/img1.png'
import {Modal} from 'react-bootstrap'
import Camera from '../../Assets/Video.png'
import TextField from '@mui/material/TextField';
export default function Home(){
    const [show, setShow]=useState(false)
    const handleShow = ()=>{setShow(true)}
    const handleClose = ()=>{setShow(false)}

    const formik = useFormik({
        initialValues: {origin: '', destination: '', weight: ''},
        validationSchema: Yup.object().shape({
            origin: Yup.string().required("Origin is Required"),
            destination: Yup.string().required("Destination is Required"), 
            weight: Yup.string().required("Weight is Required")
        }),
        onSubmit: (values)=>{
            console.log(values)
        }
    })
    return (
        <div className='container'>
            <div className='row m-0 mt-2'>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                    <p><Span>Quick & reliable</Span> <Span1>Warehousing and Logistics</Span1> <Span>Solution.</Span></p>
                    <P>ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</P>
                    <div className='mt-4 d-flex align-items-center'>
                        <BlueButton>Join Now</BlueButton>
                        <div className='mx-4' onClick={handleShow} role='button'>
                            <Img src={Camera} alt='o<;'/>
                            <BlueText1>Play Demo</BlueText1>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={Img1} alt='No Image Found' width='90%'/>
                </div>
            </div>
            <div className='row m-0 my-5 d-flex justify-content-center align-items-center'>
                <Div className='card col-md-9 '>
                    <form className='d-flex flex-wrap gap-4 justify-content-between' onSubmit={formik.handleSubmit}>
                        <TextField
                            className='input-field'
                            id="outlined-required"
                            name='origin'
                            label="Origin"
                            value={formik.values.origin}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField
                            className='input-field'
                            id="outlined-required"
                            label="Destination"
                            name="destination"
                            value={formik.values.destination}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField
                            className='input-field'
                            id="outlined-required"
                            label="Wieght"
                            name="wieght"
                            value={formik.values.wieght}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <BlueButton type='submit'>Check Price</BlueButton>
                    </form>
                </Div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>Demo Vedio</Modal.Header>
                <Modal.Body>
                    <iframe src='https://youtu.be/MMyZ9Pu01RI?feature=shared' />
                </Modal.Body>
            </Modal>
        </div>
    );
}