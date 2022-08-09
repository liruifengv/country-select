import React, { useState, useEffect } from 'react'
import { Popup } from 'antd-mobile'
import PropTypes from 'prop-types'

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

  return (
    <Popup
      visible={visible}
      bodyStyle={{
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        minHeight: '40vh',
        maxWidth: '768px',
        margin: '0 auto',
        left: '0',
        right: '0',
      }}
      showCloseButton
      onClose={handleClose}
      destroyOnClose
    >
      CountrySelect
    </Popup>
  )
}

CountrySelect.propTypes = {
  callbackResolve: PropTypes.func.isRequired,
}

export default CountrySelect
