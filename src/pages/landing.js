import React, { Fragment } from "react";
import Navegation from "../components/navegation";
import Footer from "../components/footer";
import Image from "../img/frayni.png";
import Card from "../components/card.js";

export default function practica() {
	return (
		<Fragment>
			<Navegation />

			{/* Hero section */}
			<div className='container hero'>
				<div className='row'>
					<div className='col-md'>
						<div className='avatar hero-img'>
							<img src={Image} alt='Frayni' />
						</div>
					</div>
					<div className='col-md hero-cta'>
						<h1 className='title-b'>Hi, I am Frayni</h1>
						<h2 className='subtitle-sm_sb'>With knowledge in UI/UX design</h2>
						<p className='body-lg'>
							I love to design beautiful interfaces and good experience for
							users.
						</p>
						<a href='/' className='mr btn-primary mr-3'>
							Contact me
						</a>
						<a href='/' className='btn-outline-primary'>
							My projects
						</a>
					</div>
				</div>
			</div>

			{/* Values section */}
			<div className='container values'>
				<div className=' row values-message'>
					<div className='col-md-8'>
						<h2 className='title-sb'>My values</h2>
					</div>
				</div>
				<div className='row values-list'>
					<div className='col-md-4 pb'>
						<h3 className='subtitle'>1 Understand</h3>
						<p className='body-lg'>
							What is the goal you want to achieve and figure out how to design
							it.
						</p>
					</div>
					<div className='col-md-4 pb'>
						<h3 className='subtitle'>2 Simple</h3>
						<p className='body-lg'>
							To make a good functionality that user can understand what are
							they doing.
						</p>
					</div>
					<div className='col-md-4 pb'>
						<h3 className='subtitle'>3 Experience</h3>
						<p className='body-lg'>
							So that the user experienced the best you offer with a clear
							objective and functionality.
						</p>
					</div>
				</div>
			</div>

			{/* Recent projects section */}
			<div className='container-fluid projects'>
				<div className='container projects'>
					<div className='row projects-message'>
						<div className='col-md-9'>
							<h2 className='title-sb'>My recents projects</h2>
							<p className='body-lg'>
								I have developed the following projects to be able to provide my
								services as a UX/UI designer for your business or project.
								Offering you my knowledge and experience on the subject.
							</p>
						</div>
					</div>
					<div className='row projects-list'>
						<div className='col-sm-4 pb'>
							<Card />
						</div>
						<div className='col-sm-4 pb'>
							<Card />
						</div>
						<div className='col-sm-4 pb'>
							<Card />
						</div>
					</div>
				</div>
			</div>

			{/* Contact CTA section */}
			<div className='container cta-contact'>
				<h2 className='title'>Contact me</h2>
				<p className='body-lg'>
					If you are interested in my works and have some questions, or want to
					hire me to get a project with clear objectives and a very good
					experience for your users to visit your website again.
				</p>
				<a href='/' className='btn-outline-secundary'>
					My gmail
				</a>
			</div>
			<Footer />
		</Fragment>
	);
}