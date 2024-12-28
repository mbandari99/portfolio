import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                <i className='devicon-html5-plain colored'></i>

                <div>
                    <h3 className="skills__name">HTML/CSS</h3>
                    <span className="skills__level">Expert</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='devicon-javascript-plain colored'></i>

                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Expert</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='devicon-react-original colored'></i>

                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Expert</span>
                </div>
                </div>

            </div>

            <div className="skills__group">

                <div className="skills__data">
                <i className='devicon-bootstrap-plain colored'></i>

                <div>
                    <h3 className="skills__name">BootStrap</h3>
                    <span className="skills__level">Expert</span>
                </div>
                </div>

                <div className="skills__data">
                <i className="devicon-typescript-plain colored"></i>

                <div>
                    <h3 className="skills__name">TypeScript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='devicon-angularjs-plain colored'></i>

                <div>
                    <h3 className="skills__name">Angular</h3>
                    <span className="skills__level">Expert</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>

  )
}

export default Frontend