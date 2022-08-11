import React from 'react'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import withFixedColumns from 'react-table-hoc-fixed-columns'
import 'react-table-hoc-fixed-columns/lib/styles.css'
import dollarPriceFormatter from '../../formatters/dollar_price_formatter'

const ReactTableFixedColumns = withFixedColumns(ReactTable)

const TotalsGrid = ({ actualsData, year }) => {
  const data = actualsData.map((unit) => {
    return {
      element1: unit.element1,
      element2: unit.element2,
      element3: unit.element3,
      element4: unit.element4,
      data: unit.values
    }
  })

  const columns = [
    {
      Header: 'Business',
      accessor: 'element1',
      width: 100,
      Cell: (row) => <div className="row-data fixed-col">{row.value}</div>
    }
  ]

  if (actualsData[0].element2) {
    columns.push({
      Header: 'Department',
      accessor: 'element2',
      width: 100,
      Cell: (row) => <div className="row-data fixed-col">{row.value}</div>
    })
  }

  if (actualsData[0].element3) {
    columns.push({
      Header: 'Portfolio',
      accessor: 'element3',
      width: 100,
      Cell: (row) => <div className="row-data fixed-col">{row.value}</div>
    })
  }

  if (actualsData[0].element4) {
    columns.push({
      Header: 'Product',
      accessor: 'element4',
      width: 100,
      Cell: (row) => <div className="row-data fixed-col">{row.value}</div>
    })
  }

  return (
    <ReactTableFixedColumns
      data={data}
      columns={[
        {
          fixed: 'left',
          columns
        },
        {
          columns: [
            {
              Header: 'Jan',
              ClassName: 'testing',
              accessor: 'data._0',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 0)
            },
            {
              Header: 'Feb',
              accessor: 'data._1',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 1)
            },
            {
              Header: 'Mar',
              accessor: 'data._2',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 2)
            },
            {
              Header: 'Apr',
              accessor: 'data._3',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 3)
            },
            {
              Header: 'May',
              accessor: 'data._4',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 4)
            },
            {
              Header: 'Jun',
              accessor: 'data._5',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 5)
            },
            {
              Header: 'Jul',
              accessor: 'data._6',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 6)
            },
            {
              Header: 'Aug',
              accessor: 'data._7',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 7)
            },
            {
              Header: 'Sep',
              accessor: 'data._8',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 8)
            },
            {
              Header: 'Oct',
              accessor: 'data._9',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 9)
            },
            {
              Header: 'Nov',
              accessor: 'data._10',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 10)
            },
            {
              Header: 'Dec',
              accessor: 'data._11',
              width: 100,
              Cell: (props) => getActualsUsage(props, year, 11)
            }
          ]
        }
      ]}
      className="-striped"
      defaultPageSize={data.length}
      showPagination={false}
    />
  )
}

export default TotalsGrid

const getActualsUsage = (row, year, month) => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  const isCurrentYear = currentYear === year
  const isCurrentMonth = currentMonth === month
  const isFutureYear = year > currentYear
  let isFutureMonth = false

  if (isFutureYear) {
    isFutureMonth = true
  }

  if (isCurrentYear && month > currentMonth) {
    isFutureMonth = true
  }

  let data = dollarPriceFormatter(row.value)
  let className = 'row-data month'

  if (isFutureMonth) {
    data = ''
    className = `${className} future-month`
  }

  if ((isCurrentYear || isFutureYear) && isCurrentMonth) {
    className = `${className} current-month`
  }

  return <div className={className}> {data} </div>
}
