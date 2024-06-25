import React from 'react'
import { useParams } from 'react-router-dom'

export default function ReactHook() {

  const d = useParams('id');

  console.log(d);
  return (
    <div>ReactHook</div>
  )
}
