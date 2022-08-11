import React from 'react'
import ReactTable from 'react-table'
import dollarPriceFormatter from '../../formatters/dollar_price_formatter'

const UsageTree = ({ actualsData }) => {
  const pivotBy = ['element1', 'element2', 'element3', 'element4', 'accountId']
  const columns = [
    // we only require the accessor so TreeTable
    // can handle the pivot automatically
    {
      Header: 'Business Unit',
      accessor: 'element1'
    },
    {
      Header: 'Department',
      accessor: 'element2'
    },
    {
      Header: 'Portfolio',
      accessor: 'element3'
    },
    {
      Header: 'Product',
      accessor: 'element4'
    },
    {
      Header: 'Account ID',
      accessor: 'accountId'
    },
    {
      Header: 'Percentage',
      accessor: 'percentage'
    },
    {
      Header: 'Jan',
      accessor: 'values._0',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Feb',
      accessor: 'values._1',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Mar',
      accessor: 'values._2',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Apr',
      accessor: 'values._3',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'May',
      accessor: 'values._4',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Jun',
      accessor: 'values._5',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Jul',
      accessor: 'values._6',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Aug',
      accessor: 'values._7',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Sep',
      accessor: 'values._8',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Oct',
      accessor: 'values._9',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Nov',
      accessor: 'values._10',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    },
    {
      Header: 'Dec',
      accessor: 'values._11',
      Cell: (props) => dollarPriceFormatter(props.value),
      aggregate: (vals) => {
        // vals._0.reduce((sum, x) => sum + x)
        const total = vals.reduce((accumulator, object) => {
          return object ? accumulator + Number(object) : accumulator
        }, 0)
        return total
      }
    }
  ]

  return (
    <ReactTable
      filterable={false}
      showPagination={false}
      defaultFilterMethod={(filter, row, column) => {
        const id = filter.pivotId || filter.id
        return row[id] !== undefined ? String(row[id]).toLowerCase().includes(filter.value.toLowerCase()) : true
      }}
      data={actualsData}
      pivotBy={pivotBy}
      columns={columns}
      className="-striped"
      defaultPageSize={actualsData.length}
    />
  )
}

export default UsageTree
