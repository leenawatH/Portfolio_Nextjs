
import React from 'react'
import DP_Weighted_Interval_Scheduling_Form from './components/Input-field'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <div>
      <h1 className="text-center">
        Weighted Interval Scheduling Problem
      </h1>
      <DP_Weighted_Interval_Scheduling_Form />
    </div>
    </main>
  )
}
