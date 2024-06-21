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

<<<<<<< HEAD
export default Grid;
=======
export default Grid
>>>>>>> 9fd48fb729e8541e8cd9a92c11744d5479abc5e0
