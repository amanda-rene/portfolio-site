import React from 'react'



function Home(){
    return(<div>
        <div style={{textAlign: 'center'}}>
            <h3 >I'm Amanda and this is my portfolio site</h3>
                <p> I am a Full Stack developer with industry experience building websites and web applications. As a freelance developer I strive to build
                     immersive web applications through carefully crafted code and user-centric design.
                <br></br> <br></br> With experience in HTML5, CSS3, SASS, Responsive Design, Javascript, React, Redux, PostgreSQL, NodeJS, RESTful Routes/API/Axios,  ExpressJS, Git/Github I have 
                all the tools required to build immersive Full Stack Web Applications! </p>
        </div>
        <div className='container'>
        
        <div className='box1'><p>Responsive Design</p></div>
        <div className='box2'><p>Intuitive UI</p></div>
        <div className='box3'><p>Full Stack Web Apps</p></div>
        </div>
       
    </div>
    )
}

export default Home;