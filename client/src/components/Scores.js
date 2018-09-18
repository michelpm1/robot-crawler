import React from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { warning, error } from "toastr";
import { ClipLoader } from 'react-spinners';
import 'toastr/build/toastr.css';
class Scores extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checkIn: '',
      checkOut: '',
      loading: false,
    };
  }

  getRoomsByCheckInCheckout = (obj) => {

    return axios({
      method: 'post',
      url: 'http://localhost:3001/scrape',
      data: obj,
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
    });
  };

  handleSubmit(event) {
    const {checkIn, checkOut} = this.state;
    this.setState({loading: true});

    const jsonObj = {
      checkIn,
      checkOut
    };

    if (checkIn && checkOut) {
      this.getRoomsByCheckInCheckout(jsonObj).then((result) => {
        console.log(result);
        this.setState({loading: false});
        }//this.setState({scores: result.data})
      ).catch((err) => {
        error(err);
      })

    } else {
      warning("Info. Please fill both the fields first");
      this.setState({loading: false});
    }
    event.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //this.setState({checkIn: event.target.value});
  }

  render() {

    const {checkIn, checkOut} = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mt-3">
            <input type="text" className="form-control" name="checkIn" onChange={this.handleChange} value={checkIn}
                    placeholder="Check-In"></input>
          </div>
          <div className="input-group mt-3">
            <input type="text" className="form-control" name="checkOut" onChange={this.handleChange} value={checkOut}
                    placeholder="Check-Out"></input>
          </div>
          <div className="col-xs-3 push-col">
            <button className="btn btn-outline-secondary mt-3" value="Submit" type="submit">Please add a check-out date</button>
          </div>
        </form>
        <div className="row">
          <div className='sweet-loading mt-3'>
            <ClipLoader
              sizeUnit={"px"}
              size={60}
              color={'#123abc'}
              loading={this.state.loading}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Scores;