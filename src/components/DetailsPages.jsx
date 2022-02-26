import React, { Fragment } from 'react';
import images from '../assets/img/image';
function DetailsPages() {
	return (
		<Fragment>
			<div>
				<div className="row container-1">
					<img
						className=" col-1 size-icon hover"
						src={images.iconArrow}
						alt="play"
					/>
					<h2 className=" col-11 title-1-light-text text-center">Sleep Time</h2>
				</div>
				<div className="row cards container-1 sleep-time-image">
					<div className="col-12">
						<div
							className="card"
							style={{ '--imgCard': 'url("' + images.sleeping + '")' }}
						>
							<div>
								<div>
									<p className="card-title-text text-white">Sleep</p>
									<span className="card-min-text text-white">15 mint</span>
								</div>
								<img
									className="size-icon hover"
									src={images.iconPlayCircleWhite}
									alt="play"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* titulo */}
			<div className="col d-flex justify-content-between container-1">
				<p className="row-text pt-1 pb-1">Popular</p>
				<p className="row-text pt-1 pb-1">See All</p>
			</div>
			{/* targetas people likes */}
			<div className="row cards targes-peoplelikes container-1 ">
					<div className="card p-4 gb-blue d-flex flex-column justify-content-between">
						<div className='p-4 d-flex flex-column justify-content-center align-items-center' style={{gap:'1rem'}}>
							<h2 className="card-title-text text-white">Motivation</h2>
							<img className='size-icon hover' src={images.iconMediation} alt="" />
						</div>
						<img className='size-1-icon align-self-end' src={images.rainbow} alt="" />
					</div>
					<div className="card p-4 gb-pinking d-flex flex-column justify-content-between" style={{'background-imagen':'var(--linear-gradient-rosa)'}}>
						<div className='p-4 d-flex flex-column justify-content-center align-items-center' style={{gap:'1rem'}}>
							<h2 className="card-title-text text-white">Relax</h2>
							<img className='size-icon hover' src={images.iconMediation} alt="" />
						</div>
						<img className='size-1-icon align-self-end' src={images.phone} alt="" />
					</div>
					<div className="card p-4 gb-pinking d-flex flex-column justify-content-between" style={{'background-imagen':'var(--linear-gradient-rosa)'}}>
						<div className='p-4 d-flex flex-column justify-content-center align-items-center' style={{gap:'1rem'}}>
							<h2 className="card-title-text text-white">Relax</h2>
							<img className='size-icon hover' src={images.iconMediation} alt="" />
						</div>
						<img className='size-1-icon align-self-end' src={images.battle} alt="" />
					</div>
					<div className="card p-4 gb-pinking d-flex flex-column justify-content-between" style={{'background-imagen':'var(--linear-gradient-rosa)'}}>
						<div className='p-4 d-flex flex-column justify-content-center align-items-center' style={{gap:'1rem'}}>
							<h2 className="card-title-text text-white">Relax</h2>
							<img className='size-icon hover' src={images.iconMediation} alt="" />
						</div>
						<img className='size-1-icon align-self-end' src={images.battle} alt="" />
					</div>
					<div className="card p-4 gb-pinking d-flex flex-column justify-content-between" style={{'background-imagen':'var(--linear-gradient-rosa)'}}>
						<div className='p-4 d-flex flex-column justify-content-center align-items-center' style={{gap:'1rem'}}>
							<h2 className="card-title-text text-white">Relax</h2>
							<img className='size-icon hover' src={images.iconMediation} alt="" />
						</div>
						<img className='size-1-icon align-self-end' src={images.battle} alt="" />
					</div>
					<div className="card p-4 gb-pinking d-flex flex-column justify-content-between" style={{'background-imagen':'var(--linear-gradient-rosa)'}}>
						<div className='p-4 d-flex flex-column justify-content-center align-items-center' style={{gap:'1rem'}}>
							<h2 className="card-title-text text-white">Relax</h2>
							<img className='size-icon hover' src={images.iconMediation} alt="" />
						</div>
						<img className='size-1-icon align-self-end' src={images.battle} alt="" />
					</div>
					
			
			</div>
		</Fragment>
	);
}

export default DetailsPages;
