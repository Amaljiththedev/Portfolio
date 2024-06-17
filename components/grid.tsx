import { BentoGrid, BentoGridItem } from '@/ui/BentoGrid';
import React from 'react';

const Grid = () => {
  const items = [{ title: 'Title1', description: 'Desc1', id: '1' }];

  return (
    <section id="about">
      <BentoGrid>
        {items.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
