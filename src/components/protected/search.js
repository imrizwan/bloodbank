import React, {Component} from 'react'
import { ref } from '../../config/constants'

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blood: '',
            value: 1,
            donors: []
        };

    }

    handleBlood(e) {
        this.setState({
            blood: e.target.value
        })
    }

    submit(e){
        e.preventDefault();
        var don = [];

        var b = this.state.blood;
        var a = [];

        switch (b) {
            case "A+":
                a.push(['A+', 'O+', 'A-', 'O-']);
                break;
            case "A-":
                a.push(['A-', 'O-']);
                break;
            case "B+":
                a.push(['B+', 'O+', 'B-', 'O-']);
                break;
            case "B-":
                a.push(['B-', 'O-']);
                break;
            case "AB+":
                a.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
                break;
            case "AB-":
                a.push(['AB-', 'O-', 'A-', 'B-']);
                break;
            case "O+":
                a.push(['O+', 'O-']);
                break;
            case "O-":
                a.push(['O-']);
                break;
        }
        a.map((v,i)=>{
            return v.map((value,index)=>{
                ref.child('/bg/'+value+ '/').on('value',(data)=>{
                    let obj = data.val();
                    for(var prop in obj){
                        don.push(obj[prop].newDonor);
                        this.setState({
                            donors: don
                        })
                    }
                })
            })
        })
    }

    

render(){
    return(
        <div className="container">
            <div>
                <form onSubmit={this.submit.bind(this)} style={{ textAlign: "center" }}>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon3">Search Donors</span>
                    <select className="form-control" id="sel1" onChange={e => this.handleBlood(e)}>
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
                <br/>
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
            </div>
            <br/>

            <center><h1>Available Donors: </h1></center>

            {
                this.state.donors.map((m,i)=>
                    <div key={i} className="panel panel-default">
                        <div className="panel-heading"><b>Full Name :</b> {m.fullname}</div>
                        <ul className="list-group">
                        <li className="list-group-item"><b>Email :</b> {m.email}</li>
                        <li className="list-group-item"><b>Age :</b> {m.age}</li>
                        <li className="list-group-item"><b>Address :</b> {m.address}</li>
                        <li className="list-group-item"><b>Blood :</b> {m.blood}</li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

}

export default Search;