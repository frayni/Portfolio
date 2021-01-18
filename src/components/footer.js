import React from "react";

export default function footer() {
	return (
		<div className='footer'>
			<div className='row footer-content'>
				<div className='col-sm-4 footer-menu'>
					<a href='/' className='body-lg'>
						Home
					</a>
				</div>
				<div className='col-sm-4 sm-d'>
					<p className='body-lg'>© All right reserved</p>
				</div>
				<div className='col-sm-4 footer-links'>
					<a href='/' className='btn-email mr-3'>
						<i className='fas fa-envelope'></i>
					</a>
					<a href='/' className='btn-linkedin'>
						<i className='fab fa-linkedin-in'></i>
					</a>
				</div>
			</div>
		</div>
	);
}
