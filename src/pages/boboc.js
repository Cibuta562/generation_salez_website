import "./boboc.css"
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Links() {
    return(
        <div className="div-bg" style={{display: "grid", placeItems: "center", textAlign: "center"}}>
            <div className="img-bg">

            </div>
            {/*<div className="curve-dec">*/}

            {/*</div>*/}
            <div className="picture-circle">
                <div className="picture-frame">

                </div>
            </div>
            <div className="content-links">
                <p className="title-name">Boboc Robert</p>
                <p className="function-name">web developer</p>
                <div className="links-list">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/boboc-robert-andrei-a2b21a175/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: 'black', fontSize: '30px' }} /></a>
                        <a href="https://api.whatsapp.com/send?phone=40723344599" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={{ color: 'black', fontSize: '30px' }} /></a>
                        <a href="mailto:andreiboboccibo@gmail.com"><FaEnvelope style={{ color: 'black', fontSize: '30px' }} /></a>
                    </div>
                    <a href="https://generationsalez.com" target="_blank" className="links-p">
                        <div className="links-padding">
                            Generation Salez
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/boboc-robert-andrei-a2b21a175/" target="_blank"
                       className="links-p">
                        <div className="links-padding">
                            Portfolio
                        </div>
                    </a>
                    <a href="mailto:andreiboboccibo@gmail.com" target="_blank" className="links-p">
                        <div className="links-padding">Contact</div>
                    </a>
                    <a href="https://github.com/Cibuta562" target="_blank" className="links-p">
                        <div className="links-padding">
                            Github
                        </div>
                    </a>
                    <a href="https://linktr.ee/puzzle_studio" target="_blank" className="links-p">
                        <div className="links-padding">
                            Puzzle Studios
                        </div>
                    </a>
                    <a href="https://generationsalez.com" className="links-down">
                        <div className="credits">
                            © generation salez 2025
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Links