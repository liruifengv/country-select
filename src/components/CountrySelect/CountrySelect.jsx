import React, { useState, useEffect } from 'react'
import { Popup } from 'antd-mobile'
import { CloseOutline, SearchOutline } from 'antd-mobile-icons'
import PropTypes from 'prop-types'
import style from './CountrySelect.module.css'
import BaseInput from '../BaseInput/BaseInput'
import { useCountrys } from './hooks/useCountrys'
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import '/node_modules/flag-icons/css/flag-icons.min.css'

function CountrySelect(props) {
  const [visible, setVisible] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const { callbackResolve } = props
  const { countrys } = useCountrys(searchVal)

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleClose = () => {
    setVisible(false)
    callbackResolve('close')
  }

  const handleChange = value => {
    setSearchVal(value)
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
      <div className={style.list}>
        {countrys.map(item => (
          <div className={style['country-item']} key={item.country}>
            <i className={`${style['flag-icon']} fib fi-${item.abbreviation.toLowerCase()}`} />
            <div className={style['country-name']}>{item.country}</div>
          </div>
        ))}
      </div>
    </Popup>
  )
}

CountrySelect.propTypes = {
  callbackResolve: PropTypes.func.isRequired,
}

export default CountrySelect
