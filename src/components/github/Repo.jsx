import React ,{Component} from 'react';



class  Repo extends Component{

	render(){
		const {repo} = this.props;
		return(
			
			<div>
				<li className="list-group-item">
					<a href={repo.html_url}>
						{repo.name}
					</a>
				</li>
			</div>
			
		)
	}

}
export default Repo