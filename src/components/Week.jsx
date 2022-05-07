import React from 'react'
import Card from "./Card/Card.jsx"

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&units=metric&APPID=c730f4e326f996062eceab65f7cd5945";

class Week extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(WEATHER_URL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
  return (
    <div className="">
      <h1 className="title">Прогноз погоды на 5 дней</h1>
      <h5 className="description">Минск, Беларусь</h5>
        <div className="row justify-content-center">
          {this.formatCards()}
        </div>
      </div>
    )
  }
}

export default Week
