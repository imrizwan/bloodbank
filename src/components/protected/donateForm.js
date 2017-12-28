import React, {Component} from 'react';
import { ref } from '../../config/constants'
import 'bootstrap/dist/css/bootstrap.css';

class Donateform extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: 1,
            fullname: '',
            email: '',
            age: '',
            address: '',
            blood: ''
        };
    }

    handleFullName(e){
        this.setState({
            fullname: e.target.value
        })
    }
    handleEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    handleAge(e){
        this.setState({
            age: e.target.value
        })
    }
    handleAddress(e){
        this.setState({
            address: e.target.value
        })
    }
    handleChange = (event, index, value)=>{
        this.setState({ value })
        this.setState({blood:value})
    }

    submit(e){
        e.preventDefault();

        // console.log(this.state.fullname);
        // console.log(this.state.email);
        // console.log(this.state.age);
        // console.log(this.state.address);
        // console.log(this.state.blood);

        const newDonor = {
            fullname: this.state.fullname,
            email: this.state.email,
            age: this.state.age,
            address: this.state.address,
            blood: this.state.blood
        }
        // let currentUser = firebaseAuth().currentUser;
        console.log(newDonor);
        ref.child('bg/' + this.state.blood + '/'  ).push({newDonor});
        document.getElementById("submitted").innerHTML = <div class="alert alert- success" role="alert">< a href= "#" class="alert-link" >Thank You for Donation</a ></div>   
    }

    render(){
        return(
                <div className="container">
                    <h1>Donate Form</h1>
                    <form onSubmit={this.submit.bind(this)} style={{ textAlign: "center" }}>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">Full Name&nbsp;</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={e => this.handleFullName(e)} required />
                            </div>
                            <br />
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={e => this.handleEmail(e)} required />
                            </div>
                            <br />
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={e => this.handleAge(e)} required />
                            </div>
                            <br />
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">Address&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={e => this.handleAddress(e)} required />
                            </div>
                        <br/>
                    <div>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">Blood Group</span>
                            <select className="form-control" id="sel1">
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>
                            </div>
                   </div>
                        <br />
                        <button className="btn btn-primary btn-lg">Submit</button>
                    </form>
                    <br/>
                    <br/>
                    <div id="submitted">
                        {/* message */}
                    </div>
                </div>
        )
    }
}

export default Donateform;