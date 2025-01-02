import { useState, useEffect } from 'react';
import ImgSup from '../assets/logo_png.png'

function Ticket() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const aba = document.getElementById('aba');
        if (isOpen) {
            aba.style.display = 'block';
            setTimeout(() => {
                aba.style.opacity = 1;
            }, 1);
        } else {
            aba.style.opacity = 0;
            setTimeout(() => {
                aba.style.display = 'none';
            }, 300);
        }
    }, [isOpen]);

    const toggleAba = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="window">
                <button id="toggleButton" className="btn-sup" onClick={toggleAba}>
                    <i id="icon1" className="bi bi-chat-fill" style={{ display: isOpen ? 'none' : 'inline' }}></i>
                    <i id="icon2" className="bi bi-x-lg" style={{ display: isOpen ? 'inline' : 'none' }}></i>
                </button>
                <div id="aba" className="aba" style={{ opacity: 0, transition: 'opacity 300ms ease' }}>
                    <img className="sup_image" src={ImgSup} alt="Imagem Suporte" />
                    <h2>Olá<span>!</span> Como podemos te ajudar<span>?</span></h2>
                    <div className="global-content">
                        <div className="content-sup">
                            <a href="https://discord.gg/rcvXacwAh9" target="_blank">
                                <h3>Contato via Discord</h3>
                                <p>Normalmente respondemos em até 10 min.</p>
                                <i className="bi bi-discord"></i>
                            </a>
                        </div>
                        <div className="content-sup">
                            <a href="https://www.youtube.com/@CacheStore-Cheat" target="_blank">
                                <h3>Nosso Youtube</h3>
                                <p>Venha nos conhecer mais de perto.</p>
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <p>Caso necessite de assistência, sinta-se à vontade para interagir com uma das opções disponíveis acima. Estamos à sua disposição.</p>
                </div>
            </div>
        </>
    );
}

export default Ticket;