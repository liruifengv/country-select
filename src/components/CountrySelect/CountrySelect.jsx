import React, { useState, useEffect } from 'react'
import { Popup } from 'antd-mobile'
import { CloseOutline, SearchOutline } from 'antd-mobile-icons'
import PropTypes from 'prop-types'
import style from './CountrySelect.module.css'
import BaseInput from '../BaseInput/BaseInput'

function CountrySelect(props) {
  const [visible, setVisible] = useState(false)
  const { callbackResolve } = props

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleClose = () => {
    console.log('handleClose')
    setVisible(false)
    callbackResolve('close')
  }

  const handleChange = e => {
    console.log('handleChange', e)
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
    </Popup>
  )
}

CountrySelect.propTypes = {
  callbackResolve: PropTypes.func.isRequired,
}

export default CountrySelect
