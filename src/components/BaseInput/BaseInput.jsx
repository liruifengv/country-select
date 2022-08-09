import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CloseCircleFill } from 'antd-mobile-icons'
import style from './BaseInput.module.css'

function BaseInput(props) {
  const { placeholder, allowClear, prefix, onChange } = props
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  const handleClear = () => {
    setValue('')
    onChange('')
  }

  return (
    <div className={style['base-input']}>
      {prefix && <div className={style.prefix}>{prefix}</div>}
      <input
        value={value}
        className={style['base-input-inner']}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {allowClear && <CloseCircleFill className={style.clear} onClick={handleClear} />}
    </div>
  )
}

BaseInput.propTypes = {
  placeholder: PropTypes.string,
  allowClear: PropTypes.bool,
  prefix: PropTypes.element,
  onChange: PropTypes.func,
}

BaseInput.defaultProps = {
  placeholder: '',
  allowClear: false,
  prefix: undefined,
  onChange: undefined,
}

export default BaseInput
