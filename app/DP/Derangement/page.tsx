
import React from 'react'
import DP_Derangement from '../../components/DP_Derangement_Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <div>
      <h1 className="text-center">
        Derangement Calculator
      </h1>
      <DP_Derangement />
    </div>
    </main>
  )
}
