import React from 'react'

const Progress = ({skillName, skillValue}) => {
  return (
    <div>
    <div className='d-flex justify-content-between'>
            <h6 className='mt-3'>{skillName}</h6>
            <h6 className='mt-3'>{skillValue}%</h6>
          </div>
          <div class="progress mt-2 h-100" role="progressbar" aria-label="Warning example" aria-valuenow={skillValue} aria-valuemin="0" aria-valuemax={skillValue}>
            <div class="progress-bar h-100 " style={{width: `${skillValue}%`, backgroundColor:'#34b7a7'}}>{skillValue}%</div>
          </div>
    </div>
  )
}

export default Progress