import React ,{Component} from 'react';
import Repolist from './Repolist.jsx';


class Profile extends Component{

	render(){
		return(
			<div>
				

				<div className="panels">
						<div className="panel-heading">
						    <h3 className="panel-title"> {this.props.userData.name}</h3>
						</div>
						<div className="panel-body">
						    <div className="row">
						    	<div className="col-md-4"> 
						    		<img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}} />
						    	</div>
						    	<div className="col-md-8"> 
						    		<div className="row">
						    			<div className ="col-md-12">
						    				<span className="label label-primary" style={{color:"blue"}}>{this.props.userData.public_repos} REPOS </span>
						    				<span className="label label-success"style={{color:"red"}}>{this.props.userData.public_gists} PUBLIC GISTS </span>
						    				<span className="label label-info" style={{color:"pink"}}>{this.props.userData.followers} FOLLOWERS </span>
						    				<span className="label label-danger" style={{color:"b"}}>{this.props.userData.following} FOLLOWING</span>
						    			</div>
						    		</div>
						    		<hr />
						    		<div className="row">
						    			<div className="col-md-12">
						    				<ul className="list-group">
						    					<li className="list-group-item"><strong>Username :{this.props.userData.login} </strong></li>
						    					<li className="list-group-item"><strong>Location :{this.props.userData.location} </strong></li>
						    					<li className="list-group-item"><strong>Email Address :{this.props.userData.email} </strong></li>
						    				</ul>
						    			</div>
						    		</div>
						    		<br />
						    		<a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile </a>
						    	</div>
						    </div>
					  </div>

					 <hr />
					 <h3> User Repositories </h3>
					 <Repolist userRepos={this.props.userRepos} />
				</div>
			</div>
			
		)
	}

}
export default Profile