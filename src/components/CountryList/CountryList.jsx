import React from 'react'
import PropTypes from 'prop-types'
import List from 'rc-virtual-list'
import style from './CountryList.module.css'
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import '/node_modules/flag-icons/css/flag-icons.min.css'

function CountryList(props) {
  const { data, height, onSelect } = props

  const handleSelect = item => {
    onSelect({
      name: item.country,
      code: item.abbreviation,
    })
  }

  return data.length > 0 ? (
    <List data={data} height={height} itemHeight={50} itemKey="country" className={style.list}>
      {item => (
        <div
          className={style['country-item']}
          key={item.country}
          aria-hidden="true"
          onClick={() => handleSelect(item)}
        >
          <i className={`${style['flag-icon']} fib fi-${item.abbreviation.toLowerCase()}`} />
          <div className={style['country-name']}>{item.country}</div>
        </div>
      )}
    </List>
  ) : (
    <div className={style.empty}>No result</div>
  )
}

CountryList.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number.isRequired,
  onSelect: PropTypes.func,
}

CountryList.defaultProps = {
  data: [],
  onSelect: undefined,
}

export default CountryList
