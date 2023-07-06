import React from 'react'

export const Skills = () => {
    const data = [
        { id: 1,
            imgscr: "https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg",
            title: "CSS"
        },
        { id: 2,
            imgscr: "https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg",
            title: "HTML"
        },
        { id: 3,
            imgscr: "https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg",
            title: "React JS"
        },
        { id: 4,
            imgscr: "https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg",
            title: "Javascript"
        },
    ]
  return (
    <div className='Skills' id="skills">
        <div className='container'>
        <div className='commn'>
                    <h1 className='main_header'> Skills </h1>
                  
                    <div className='border'></div>
                </div>

                <div className='skillcontainer'>
                {data.map(eve =>(
                    <div className='skill-box' key={eve.id}>
                        <img src={eve.imgscr} alt={eve.imgscr}/>
                        <h2>{eve.title}</h2>
                    </div>
                ))}
                   

                </div>
        </div>
    </div>
  )
}
