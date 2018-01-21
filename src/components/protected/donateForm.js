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
            blood: 'A+'
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
    handleBlood = (e)=>{
        // this.setState({blood: "A+"})
        this.setState({blood:e.target.value})
    }

    submit(e){
        e.preventDefault();

        // console.log(this.state.fullname);
        // console.log(this.state.email);
        // console.log(this.state.age);
        // console.log(this.state.address);
        console.log(this.state.blood);

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
        // document.getElementById("submitted").innerHTML = "Thank You For Donation";
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
                                <select className="form-control" id="sel1" onChange={e => this.handleBlood(e)} required>
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
                    <div>
                    <center>
                    <h1 className="alert" role="alert" id="submitted">
                    </h1>
                    </center>
                    </div>
                  </div>
        )
    }
}

export default Donateform;