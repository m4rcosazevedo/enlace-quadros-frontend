import { useState } from 'react'

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues)

  const resetFields = () => {
    setValues({})
  }

  const setFieldValue = (event) => {
    const { name, value } = event.target

    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    values,
    setFieldValue,
    resetFields
  }
}
