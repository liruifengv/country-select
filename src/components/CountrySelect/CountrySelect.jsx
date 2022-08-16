import React, { useState } from 'react'
import { Popup } from 'antd-mobile'
import { CloseOutline, SearchOutline } from 'antd-mobile-icons'
import PropTypes from 'prop-types'
import style from './CountrySelect.module.css'
import BaseInput from '../BaseInput/BaseInput'
import CountryList from '../CountryList/CountryList'
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import countries from './countries.json'

/**
 * filter countries
 * @param {string} keyword
 * @returns {Array<{country: String, abbreviation: String}>}
 */
function filterCountries(keyword) {
  return countries.filter(it => it.country.toLowerCase().includes(keyword.trim().toLowerCase()))
}

function CountrySelect({ visible, onClose, onSelect }) {
  const [searchVal, setSearchVal] = useState('')

  const handleChange = value => {
    setSearchVal(value)
  }

  const handleSelect = value => {
    setSearchVal('')
    onSelect(value)
  }

  const handleClose = () => {
    setSearchVal('')
    onClose()
  }

  return (
    <Popup visible={visible} bodyClassName={style.contaniner} destroyOnClose>
      <div className={style.header}>
        <div className={style.title}>Choose a country or region</div>
        <CloseOutline className={style.close} onClick={handleClose} />
      </div>
      <BaseInput
        placeholder="Search a country"
        allowClear
        prefix={<SearchOutline />}
        onChange={handleChange}
      />
      <CountryList data={filterCountries(searchVal)} height={500} onSelect={handleSelect} />
    </Popup>
  )
}

CountrySelect.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default CountrySelect
