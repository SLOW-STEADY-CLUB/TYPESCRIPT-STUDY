import React from 'react'

import { Header, Calendar, Lists } from 'components/main'

const Main : React.FC = () => {
  return (
    <div className='layout'>
        <Header />
        <Calendar />
        <Lists />
    </div>
  )
}

export default Main