import React from "react";
import ReactDOM from "react-dom";
import {PageData, QueryString} from "./util";
import {Warning} from "../component/warning";
class Sign extends React.Component{
	constructor(){
		super();
		this.state = {
			score : 0
		};
		this.getScore = day => {
			return day > 10 ? 20 : day * 2;
		};
	}
	componentDidMount(){
		$.ajax({
			type : "post",
			url : "/api/sign",
			success : data => {
				this.setState({
					score : this.getScore(parseInt(data.message))
				});
				if(data.code === 300){
					ReactDOM.render(
						<Warning message="您今日已签到!" />,
						document.querySelector(".warning")
					);
				}
			}
		});
	}
	render(){
		return (
			<body>
				<div className="warning">
					<Warning />
				</div>
				<div className="sign">
					<b>
						{this.state.score}
					</b>
				</div>
			</body>
		);
	}
}
class Part1 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			vip : props.vip,
			name : props.name,
			score : props.score
		}
	}
	componentDidMount(){
		this.refs.btnSign.onclick = () => {
			if(!QueryString("sign")){
				window.history.pushState({}, this.state.title, `?sign=1`);
			}
			ReactDOM.render(
				<Sign />,
				document.body
			);
		};
	}
	render(){
		let state = this.state;
		return (
			<div className="part1">
				<p>
					{`${state.vip}${state.name}`}
				</p>
				<p>
					<span>我的积分:</span>
					<b>{state.score}</b>
				</p>
				<i className="btnSign" ref="btnSign"></i>
			</div>
		);
	}
}
Part1.defaultProps = {
	vip : "普通会员",
	name : "***",
	score : 0
};
class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			time : props.time,
			value : props.value,
			detail : props.detail
		};
	}
	render(){
		let state = this.state;
		return (
			<ul>
				<li>
					{state.time}
				</li>
				<li>
					{state.value}
				</li>
				<li>
					{state.detail}
				</li>
			</ul>
		);
	}
}
class Record extends React.Component{
	constructor(){
		super();
		this.state = {
			data : []
		};
	}
	render(){
		let lists = [],
			data = this.state.data;
		if(data.length){
			data.forEach(list => {
				lists.push(
					<List time={list.createDate} value={list.points} detail={list.remark} />
				);
			});
		}else{
			lists = (
				<i className="default"></i>
			);
		}
		return (
			<div className="record">
				<h1>积分纪录</h1>
				<ul>
					<li>发生时间</li>
					<li>变更值</li>
					<li>变更详情</li>
				</ul>
				{lists}
			</div>
		);
	}
}
class Page extends React.Component{
	componentDidMount(){
		if(QueryString("sign")){
			this.refs.part1.refs.btnSign.click();
		}else{
			let refs = this.refs;
			$.ajax({
				type : "post",
				url : "/api/getauth",
				success : data => {
					refs.part1.setState({
						vip : data.vip,
						name : data.name
					});
				}
			});
			$.ajax({
				url : "/api/getscore",
				success : data => {
					refs.part1.setState({
						score : JSON.parse(data.other).points
					});
					refs.record.setState({
						data : data.data || []
					});
				}
			});
		}
	}
	render(){
		return (
			<body>
				<Part1 ref="part1" />
				<a className="entrance" href="/activity/score"></a>
				<Record ref="record" />
			</body>
		);
	}
}
const init = () => {
	PageData.setData(null, () => {
		ReactDOM.render(
			<Page />,
			document.body
		);
	}).render(init);
};
export {
	init
}