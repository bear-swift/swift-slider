import React, { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
  children: ReactNode
}
const Droppable = (props: DroppableProps) => {
  const { children } = props;
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const style = {
    backgroundColor: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;