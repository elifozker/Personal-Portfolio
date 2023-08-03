import React from 'react'
import styles from "./styles.module.css"



const Techs = () => {

  const technologies = [
    { id: 1, title: 'React.js', link: '/' },
    { id: 2, title: 'Next.js', link: '/' },
    { id: 3, title: 'HTML5', link: '/' },
    { id: 4, title: 'CSS/SCSS', link: '/' },
    { id: 5, title: 'Tailwind-Bootstrap', link: '/' },
    { id: 6, title: 'Node.js', link: '/' },
    { id: 6, title: 'JS(ES6)', link: '/' },
  ];


  return (
    <div className='h-screen w-full'>
      <section className='container mt-5'>
        <h1 className={styles.techs}>techs that i use</h1>
        <div id={styles.techsContainer} className="row">
          {technologies.map((technology) => (
            <div  className="col-md-4" key={technology.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title t">{technology.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>

  )
}

export default Techs