import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';


class App extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'linux08',
			userData:[],
			userRepos:[],
			perPage:5
		}
	}

	getUserData(){
		$.ajax({
			url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType:'json',
			cache:false,
			success:(data)=>{
				this.setState({userData: data});
			}.bind(this),
			error: (xhr,status,err)=>{
				this.setState({username: null});
				alert(err);
			}.bind(this)
		})
	}
	getUserRepos(){
		$.ajax({
			url:'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType:'json',
			cache:false,
			success:(data)=>{
				this.setState({userRepos: data});
			}.bind(this),
			error: (xhr,status,err)=>{
				this.setState({username: null});
				alert(err);
			}.bind(this)
		})
	}
	handleFormSubmit(username){
		//alert(username);
		this.setState({username: username},function(){
			this.getUserData();
			this.getUserRepos();
		});
	}
	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}
	render(){
		return(
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
				<Profile {...this.state} />
			</div>
		)
	}
}



App.propTypes= {
	clientId:React.PropTypes.string,
	clientSecret:React.PropTypes.string
}
App.defaultProps={
	clientId:'5d7be76825b86de2c22e',
	clientSecret:'21b9d81c1b7336edbed4ebf4be3cc51358f57aca'
}
export default App