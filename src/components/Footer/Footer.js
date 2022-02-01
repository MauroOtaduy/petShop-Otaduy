import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Footer = () => {
    return (
        <footer>
            <div className='footer-cotain'>
                <div id="time">
                    <div className='footer-subTitles'>
                        <AccessTimeIcon className='icons-footer' />
                        <p><strong> Nuestros horarios</strong></p>
                    </div>
                    <div className='footer-time-info'>
                        <p>Lunes a viernes: 09:00 a 18:00 hs</p>
                        <p>Sábados: 09:00 a 13:00 hs</p>

                    </div>
                </div>
                <div className='footer-networks'>
                    <p><strong> Seguinos en redes!</strong></p>
                    <div className='footer-icons'>
                        <FacebookIcon className='icons-footer' />
                        <InstagramIcon className='icons-footer' />
                        <EmailIcon className='icons-footer' />

                    </div>
                </div>

                <div className='footer-subContainers'>
                    <div className='footer-subTitles'>
                        <FmdGoodIcon className='icons-footer' />
                        <p><strong> Dónde encontrarnos</strong></p>
                    </div>
                    <div className='footer-time-info'>
                        <p>Dir.: Calle falsa 123</p>
                        <p>Tel.: (0341) 4111232</p>

                    </div>
                </div>

            </div>
            <div className='contact-footer'>
                <p className='icons-footer'>Created by Mauro Otaduy - otaduymauro6@gmailcom</p>
            </div >
        </footer>
    )
}

export default Footer

