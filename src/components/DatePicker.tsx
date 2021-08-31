import Dayzed from 'dayzed'
import { CaretRight, CaretLeft } from 'phosphor-react'
import { useState } from 'react'

import Input from './Input'

const monthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function Calendar({ calendars, getBackProps, getForwardProps, getDateProps, visible }) {
  const navButtonClasses = 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full text-gray'
  if (calendars.length) {
    return (
      <div className="absolute w-72 -mt-4" hidden={!visible}>
        {calendars.map(calendar => (
          <div className="bg-white mt-2 rounded-lg shadow p-4 absolute top-0 left-0" key={`${calendar.month}${calendar.year}`}>
            <div className="flex justify-between items-center mb-2" >
              <div>
                <span className="text-lg font-bold text-gray-800" >{monthNamesShort[calendar.month]}</span>
                <span className="ml-1 text-lg text-gray-600 font-normal">{calendar.year}</span>
              </div>
              <div>
                <button className={navButtonClasses} {...getBackProps({ calendars })}>
                  <CaretLeft size={24} />
                </button>
                <button className={navButtonClasses} {...getForwardProps({ calendars })}>
                  <CaretRight size={24} />							  
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-3 -mx-1">
              {weekdayNamesShort.map(day => (
                <div className="px-1" key={day}>
                  <div className="text-gray-800 font-medium text-center text-xs">{day}</div>
                </div>
                ))}
              {calendar.weeks.map((week, weekIndex) =>
                week.map((dateObj, index) => {
                  let key = `${calendar.month}${calendar.year}${weekIndex}${index}`
                  if (!dateObj) {
                    return (<div className="text-center border p-1 border-transparent text-sm" key={key}></div>)
                  }
                  let { date, selected, today } = dateObj
                  let dayClasses = today ? 'font-bold ' : ''
                  dayClasses += selected ? 'text-white bg-primary-dark ' : ''
                  dayClasses += 'cursor-pointer text-center text-sm leading-none rounded leading-loose transition ease-in-out duration-100  hover:bg-blue-200'
                  return (
                    <div key="key" {...getDateProps({ dateObj })}>
                      <div className={dayClasses}>{date.getDate()}</div>
                    </div>
                  )
                }))
              }
            </div>
          </div>
        ))}
      </div>
    )
  }
  return null
}

/*----------- Render Prop -----------*/

interface DatePickerProps {
  value?: Date
  onChange: (date: Date) => void
  label?: string
}

export default function DatePicker({ value, onChange, label }: DatePickerProps) {
  
  let [visible, setVisible] = useState(false)

  return (
    <div>
      <Input 
        type="text" 
        label={label}
        onClick={() => setVisible(!visible)}
        value={value?.toDateString()}
        placeholder="Select date"></Input>
      <Dayzed
        date={value}
        onDateSelected={({date}) => { onChange(date); setVisible(false) }}
        selected={value}
        render={dayzedData => <Calendar {...dayzedData} visible={visible} />}
      />
    </div>
  )
}
