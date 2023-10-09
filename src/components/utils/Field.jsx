import React, { useState } from 'react';
import '../utils/css/config.css';

  /**validations */
const validator = (props,value) => {

  if (props.validateType === 'somaiya-mail-id') {

    const regex = /@somaiya\.edu$/
    const validatePair = []

    validatePair.push(!regex.test(value))
    validatePair.push("Please enter valid somaiya mail ID")

    return validatePair
  }

  if (props.validateType === 'email-id') {

    const regex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    const validatePair = []

    validatePair.push(!regex.test(value))
    validatePair.push("Please enter valid mail ID")

    return validatePair
  }

  if (props.validateType === 'year') {

    const regex = /^(19|20)\d{2}$/;
    const validatePair = []

    validatePair.push(!regex.test(value))
    validatePair.push("Year is Invalid")

    return validatePair
  }

  if (props.validateType === 'contact-no') {

    const regex = /^\d{10}$/;
    const validatePair = []

    validatePair.push(!regex.test(value))
    validatePair.push("Invalid contact Number")

    return validatePair
  }
  
  if (props.validateType === 'date') {
    const date1 = new Date(value || new Date());
    const date2 = new Date(); 

    const validatePair = [];
  
    if (date1 >= date2) {

      validatePair.push(true);
      validatePair.push('Invalid Date');

    } else {
   
      validatePair.push(false);
      validatePair.push("Valid Date")

    }
  
    return validatePair;
  }
}


const Field = (props) => {

  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false)

  /**
   * Handlers
   */

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event); // Pass the event to the parent component's onChange handler
  };

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }


  const { fieldsPerLine } = props;

  return (
    <div className={`my-3 p-3 inline-block ${fieldsPerLine === 2 ? 'w-1/2' : 'w-full'}`}>
      <div className="mb-3">
        <label className="font-Poppins">
          {props.title}
          <span className="px-2 text-red-600">{props.required ? '*' : null}</span>
        </label>
        {props.link !== undefined ? (
          <p>
            <a href={props.link} rel="noreferrer" target="_blank" className="font-Poppins font-semibold text-red-700">
              Click here
            </a>
          </p>
        ) : null}

        {props.validate !== undefined && validator(props,value)[0]  &&
          <p className='font-Poppins text-red-700'>
            {validator(props,value)[1]}
          </p>
        }

      </div>
      <div>
        {props.type === 'radio' ? (
          props.options.map((item, index) => (
            <div key={index}>
              <label>
                <input
                  type={props.type}
                  name={props.name}
                  required={props.required}
                  value={item}
                  checked={props.value==item ? true : false}
                  className=""
                  onChange={handleChange}
                />{' '}
                {item}
              </label>
            </div>
          ))
        ) : props.type === 'dropdown' ? (
          <select
            name={props.name}
            required={props.requiredStatus}
            onChange={handleChange}
            value={props.value}
            className="w-72 p-2 rounded-md shadow-lg active:shadow-2xl hover:w-full transition-all duration-500 outline-none"
          >
            <option hidden> {props.dropdownHiddenItem} </option>
            {props.options.map((item) => {
              return <option name={props.name} value={item}>{item}</option>;
            })}
          </select>
        ) : props.type === 'textarea' ? (
          <textarea
            className="border-black p-3 border-2 rounded-lg w-full h-48"
            name={props.name}
            value={props.value}
            onChange={handleChange}
          ></textarea>
        ) : props.type === 'file' ? (
          <>
          {console.log(props.value)}
          <input
            autoComplete='off'
            type={props.type}
            name={props.name}
            required={props.required}
            className={`focus:outline-none color-red-400 }`}
            // value={props.value}
            onChange={handleChange}
          />
          <p className='p-2 '> <span className='text-red-700 font-semibold font-Poppins'> selected File : </span> {props.value['name']}</p>
          </>
        ) : props.type === 'number' ? (
          <input
            autoComplete='off'
            type={props.type}
            name={props.name}
            required={props.required}
            className={`focus:outline-none  w-64 shadow-lg p-2 border-gray-600 border-b-2 focus:border-red-700'`}
            value={props.value}
            onChange={handleChange}
          />
        ) : (
          <input
            autoComplete='off'
            type={props.type}
            placeholder={props.placeholder === undefined ? null : props.placeholder}
            name={props.name}
            required={props.required}
            className={`focus:outline-none border-b-2 font-Poppins border-gray-700 focus:border-red-700 w-64 focus:w-full transition-all  duration-500 `}
            value={props.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default Field;
export {validator}