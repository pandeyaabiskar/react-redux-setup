import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, getProductData } from '../store/slices/counterSlice'
import { useEffect } from 'react';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const products = useSelector((state) => state.counter.products);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductData('1'))
  }, [])

  console.log(products)


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}