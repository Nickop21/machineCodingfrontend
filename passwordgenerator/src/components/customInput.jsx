import React from 'react'

function CustomInput({ type, label,name,onChange}) {
  return (
    <div className="flex w-50 flex-start gap-10 mb-10">
            <input
              type={type}
              name={name}
              onChange={onChange}
            />
            <span>{label}</span>
          </div>
  )
}

export default CustomInput
