import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from '@/ui/BentoGrid'
import React from 'react'

const Grid = () => {
  return (
    <BentoGrid >
        {gridItems.map
        ((item)=>(
            <BentoGridItem 
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            />
        ))}
    </BentoGrid>
  )
}

export default Grid
