import React from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { warning, error } from "toastr";
import { ClipLoader } from 'react-spinners';
import 'toastr/build/toastr.css';
import ScrapeTable from "./ScrapeTable";
class ScrapeScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checkIn: '',
      checkOut: '',
      loading: false,
      scrapedData: []
    };
  }

  getRoomsByCheckInCheckout = (obj) => {

    return axios({
      method: 'post',
      url: 'http://localhost:3002/scrape',
      data: obj,
    })
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
        this.setState({loading: false, scrapedData: result.data});
        }).catch((err) => {
        this.setState({loading: false});
        error(err.response.data.error);
      })
    } else {
      warning("Info. Please fill both the fields first");
      this.setState({loading: false});
    }
    event.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {checkIn, checkOut, scrapedData} = this.state;

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
            <button className="btn btn-outline-secondary mt-3" value="Submit" type="submit">Scrape!</button>
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
            {!isEmpty(scrapedData) && <ScrapeTable scrapedItens={scrapedData}/>}
          </div>
        </div>
      </div>
    );
  }
}

export default ScrapeScreen;