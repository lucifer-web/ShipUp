import React from 'react'
import Twitter from '../../Assets/twitter.png'
import Facebook from '../../Assets/facebook.png'
import WhatsApp from '../../Assets/whatsapp.png'
import Insta from '../../Assets/insta.png'
import { BlueText, RedText, Fdiv, HR} from '../Style/Styled';
export default function Index(){
    return(
        <Fdiv className='container-fluid p-5'>
            <div className='row m-0 d-flex justify-content-center'>
                <div className='col-md-3 px-1'>
                    <p className='fs-6'><RedText>Ship</RedText><RedText className='text-light'>Up</RedText></p>
                    <small className='text-light'>ShipUp dilivers an unparallel <br/> customer service through dedicated <br/> customer teams, and engaged people <br/>working in an agile culture, and a <br/>global footprint.</small>
                </div>
                <div className='col-md-2 d-flex flex-column'>
                    <p className='text-light fw-bold'>Explore</p>
                    <small className='text-light'>About Us</small>
                    <small className='text-light'>Our Warehouse</small>
                    <small className='text-light'>Blog</small>
                    <small className='text-light'>News and Media</small>
                </div>
                <div className='col-md-2 d-flex flex-column'>
                    <p className='text-light fw-bold'>Legal</p>
                    <small className='text-light'>Terms</small>
                    <small className='text-light'>Privacy</small>
                </div>
                <div className='col-md-4'>
                    <p className='text-light fw-bold'>Social Media</p>
                    <div className='d-flex gap-3'>
                        <img src={Facebook} alt='not found'/>
                        <img src={Twitter} alt='not found'/>
                        <img src={WhatsApp} alt='not found'/>
                        <img src={Insta} alt='not found'/>
                    </div>
                </div>
            </div>
            <HR/>
            <p className='text-light fs-5 text-center'>Ship<RedText>Up</RedText><RedText className='text-light'>.ng</RedText></p>
        </Fdiv>
    );
}