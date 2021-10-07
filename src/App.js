import React from 'react'
import {Cards, Chart, CountryPicker} from './components'
import coronaImage from './images/image.png'

import styles from './App.module.css'
import {fetchData} from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData()

    this.setState({data})
  }

  handleCountrySelect = async (country) => {
    const data = await fetchData(country)
    this.setState({data, country})
  }

  render() {
    const {data, country} = this.state
    return (
      <div className={styles.container}>
        <img src={coronaImage} alt="coronaImage" className={styles.image}/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountrySelect}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App
