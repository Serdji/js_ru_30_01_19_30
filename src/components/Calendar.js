import React, { Component } from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css"


function sunday(day) {
  return day.getDay() === 0;
}

let date = new Date()

let optionsTime = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

let optionsDate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'

};

class Calendar extends Component {

  state = {
    selectedDay: null,
  }

  handleDayClick = (e, day, { selected }) => {
    this.setState({
      selectedDay: selected ? null : day,
    });
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          selectedDays={ day => DateUtils.isSameDay(selectedDay, day) }
          onDayClick={ this.handleDayClick }
        />
        <p>
          { selectedDay ? `${selectedDay.toLocaleString('ru', optionsDate)} Время: ${date.toLocaleString('ru', optionsTime)}` : 'Please select a day 👻' }
        </p>
      </div>
    );
  }
}

export default Calendar