import React, { Component } from 'react'
import CreateProject from '../components/CreateProject'

export class Home extends Component {
	render() {
		return (

			<><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									Dashboards
								</button>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									Apps
								</button>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									Pages
								</button>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									Components
								</button>
								<ul className="dropdown-menu dropdown-menu-dark">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>

						</ul>
					</div>
				</div>
			</nav>
			<aside>

			</aside>
			<main>
				<CreateProject></CreateProject>

			</main></>


		)
	}
}

export default Home
