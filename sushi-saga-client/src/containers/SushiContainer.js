import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const displayedSushi = props.sushis.slice(props.progress, props.progress + 4)
  // console.log(displayedSushi)

  return (
    <Fragment>
      <div className="belt">
        {
          displayedSushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi}/>)
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer