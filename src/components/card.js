import React from 'react'

export default function card() {
    return (
        <div className='card'>
			<div className='card-img'></div>
			{/* <img src="" alt="" className='card-img'/> Use the className*/} 
			<div className='card-body'>
				<h3 className='card-title subtitle-sm'>Project name</h3>
				<p className='card-date'>2020-2021</p>
				<p className='card-text'>
					A little description of the project and what I want to accomplish with
					this project. Purus semper eget duis at tellus at urna condimentum
					mattis.
				</p>
				<a href='/' className='btn-outline-secundary'>
					See more
				</a>
			</div>
		</div>
    )
}
