import React from 'react'

function Article({ heading , image}) {
  return (
    <article className="article">
        <div className="article__content">
            <h4>{heading ? heading : 'Heading text'}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex corrupti quia earum reiciendis error eum accusantium veritatis autem inventore officiis. Maiores nesciunt quidem sunt! Optio iste velit numquam dolore sed.
            Facilis eaque ut dolores soluta vel adipisci rem ipsum, praesentium distinctio, magni possimus aspernatur officia voluptatem. Suscipit veritatis ullam odit possimus quisquam doloribus provident! Saepe nemo eveniet distinctio aut porro.
            Eaque hic obcaecati sequi est magni rem soluta quo fugiat quia, tempora temporibus omnis distinctio, non ullam debitis sed? Similique laudantium eos possimus rerum nesciunt odit corporis laboriosam doloribus? Cum.
            Fugiat vitae quidem sunt expedita laborum ex, obcaecati non distinctio nemo architecto facere necessitatibus, delectus quasi alias ab. Unde ducimus culpa reiciendis minus reprehenderit vel, nulla ratione ad nisi animi?
            Ab, rem. Eos ipsum saepe dicta explicabo quas esse modi quis obcaecati laudantium iure, sapiente pariatur facere, ducimus mollitia? Repudiandae consectetur consequuntur sit magni quod corporis porro. Voluptatum, culpa sequi.
            Dolore eveniet sint corporis laudantium sit ab neque</p>
        </div>
        <div className="article__image">
            <img src={image} alt={heading ? heading : 'Some image'} />
        </div>
    </article>
  )
}

export default Article