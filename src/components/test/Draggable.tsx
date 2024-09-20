import React, { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Position } from '@/types/util';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useKitContext } from '@/providers/KitProvider';

interface DragableProps {
  isDragging: boolean,
  offset: Position,
  children: ReactNode
}

const Dragable = (props: DragableProps) => {
  const { offset, isDragging, children } = props;
  const { closeInstruction } = useKitContext();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });

  // Within your component that receives `transform` from `useDraggable`:
  const style = {
    transform: CSS.Translate.toString({
      x: offset.x + (transform?.x || 0),
      y: offset.y + (transform?.y || 0),
      scaleX: transform?.scaleX || 1,
      scaleY: transform?.scaleY || 1
    }),
    zIndex: isDragging ? 4 : 3,  // Apply high z-index when dragging
  }

  const onClose = closeInstruction;

  return (
    <div ref={setNodeRef} style={style} className='absolute left-[10px] top-[20px] bg-white inline-block shadow shadow-my-gray overflow-hidden'>
      <div className='relative bg-white'>
        <div className='absolute z-[5] bg-white top-0 right-0'>
          <div className='pt-[10px] pr-[10px]'>
            <IconButton className='rotate-45 scale-75' {...listeners} {...attributes}>
              <ZoomOutMapIcon />
            </IconButton>

            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Dragable;