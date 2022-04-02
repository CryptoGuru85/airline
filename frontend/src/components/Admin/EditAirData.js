import React,{ Component } from "react";
import axios from 'axios'
class AddAirData extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id:props.reservation._id,
      flightNumber:props.reservation.flightNumber,
      departureTime:props.reservation.departureTime,
      departureDate:props.reservation.departureDate,
      arrivalTime:props.reservation.arrivalTime,
      arrivalDate:props.reservation.arrivalDate,
      seatsNumber:props.reservation.seatsNumber,
      passengerNumber:props.reservation.passengerNumber,
      economyClass:props.reservation.economyClass,
      businessClass:props.reservation.businessClass,
      firstClass:props.reservation.firstClass,
      departureAirport:props.reservation.departureAirport,
      arrivalAirport:props.reservation.arrivalAirport
    }
    this.reservationUpdate = this.reservationUpdate.bind(this)

  }
  handleFlightChange = (e) => {
    this.setState({flightNumber : e.target.value});
  }
  handleDepartureTime = (e) => {
    this.setState({departureTime : e.target.value});
  }
  handleDepartureDate = (e) => {
    this.setState({departureDate : e.target.value});
  }
  handleArrivalTime = (e) => {
    this.setState({arrivalTime : e.target.value});
  }
  handleArrivalDate = (e) => {
    this.setState({arrivalDate : e.target.value});
  }
  handleSeatTime = (e) => {
    this.setState({seatsNumber : e.target.value});
  }
  handlePassenger = (e) => {
    this.setState({passengerNumber: e.target.value})
  }
  handleEconomyClass = (e) => {
    this.setState({economyClass : e.target.value});
  }
  handleBusinessClass = (e) => {
    this.setState({businessClass : e.target.value})
  }
  handleFirstClass = (e) => {
    this.setState({firstClass : e.target.value});
  }
  handleDepartureAirport = (e) => {
    this.setState({departureAirport : e.target.value});
  }
  handleArrivalAirport = (e) => {
    this.setState({arrivalAirport : e.target.value});
  }
  reservationUpdate(id, flightNumber, departureTime, departureDate, arrivalTime, arrivalDate, seatsNumber, passengerNumber, economyClass,businessClass, firstClass,departureAirport,arrivalAirport) {
    axios.post('http://localhost:3080/api/reservation/update', {
      id: id,
      flightNumber: flightNumber,
      departureTime: departureTime,
      departureDate: departureDate,
      arrivalTime: arrivalTime,
      arrivalDate: arrivalDate,
      seatsNumber: seatsNumber,
      passengerNumber:passengerNumber,
      economyClass: economyClass,
      businessClass: businessClass,
      firstClass: firstClass,
      departureAirport: departureAirport,
      arrivalAirport: arrivalAirport
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render(){
    return(
      <div className="p-8">
        <div className="flex justify-between py-2">
          <div>Flight Number</div>
          <input type="text" value={this.state.flightNumber} onChange={this.handleFlightChange}></input>
        </div>
        <div className="flex justify-between py-2">
          <div>Departure Time</div>
          <div>
            <input type="time" className="mr-2" value={this.state.departureTime} onChange={this.handleDepartureTime}></input>
            <input type="date" value={this.state.departureDate} onChange={this.handleDepartureDate}></input>
          </div>
        </div>
        <div className="flex justify-between py-2">
          <div>Arrival Time</div>
          <div>
            <input type="time" className="mr-2" value={this.state.arrivalTime} onChange={this.handleArrivalTime}></input>
            <input type="date" value={this.state.arrivalDate} onChange={this.handleArrivalDate}></input>
          </div>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Number of seats</div>
          <input type="text" value={this.state.seatsNumber} onChange={this.handleSeatTime}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Number of passenger</div>
          <input type="text" value={this.state.passengerNumber} onChange={this.handlePassenger}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div> Economy business Class</div>
          <input type="text" value={this.state.economyClass} onChange={this.handleEconomyClass}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Business Class</div>
          <input type="text" value={this.state.businessClass} onChange={this.handleBusinessClass}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>First Class</div>
          <input type="text" value={this.state.firstClass} onChange={this.handleFirstClass}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Departure airport</div>
          <input type="text" value={this.state.departureAirport} onChange={this.handleDepartureAirport} ></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Arrival airport</div>
          <input type="text" value={this.state.arrivalAirport} onChange={this.handleArrivalAirport} ></input>
        </div>
        <div className="flex justify-end"><input type="button" value="Update" className="px-4 py-2 bg-red-500 rounded-lg" onClick={this.reservationUpdate(this.state.id,this.state.flightNumber,this.state.departureTime,this.state.departureDate,this.state.arrivalTime,this.state.arrivalDate,this.state.seatsNumber, this.state.passengerNumber, this.state.economyClass, this.state.businessClass, this.state.firstClass, this.state.departureAirport, this.state.arrivalAirport)}/></div>
      </div>
    )
  }
}
export default AddAirData