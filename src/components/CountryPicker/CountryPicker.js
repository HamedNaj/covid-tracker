import React, {useEffect, useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import {fetchCountries} from "../../api";

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetch= async () => {
      await setCountries(await fetchCountries())
    }
    fetch()
  },[])
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue={''} onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country,i) => (
          <option value={country} key={i}>{country}</option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
