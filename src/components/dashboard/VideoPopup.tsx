import React from 'react';
import { Modal, Box, IconButton, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

// Styled component for the modal box with better UI/UX
const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '1100px',
  bgcolor: '#fff',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  border: '10px solid #2C72FF',
  borderRadius: '16px',
  overflow: 'hidden',
  outline: 'none',
  transition: 'all 0.3s ease-in-out',
  [theme.breakpoints.up('sm')]: {
    borderRadius: '12px',
  },
}));

const HeaderBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 24px',
  backgroundColor: '#F4961D',
  color: '#fff',
});

const CloseButton = styled(IconButton)({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const VideoBox = styled(Box)({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  backgroundColor: '#000',
  '& iframe': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

// Props for VideoPopup
interface VideoPopupProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ open, onClose, videoUrl }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
    >
      <ModalBox>
        {/* Header */}
        <HeaderBox>
          <span className='text-white text-[28px] font-cathy-melody font-bold'>
            Watch Our Video
          </span>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </HeaderBox>

        {/* Video Container */}
        <VideoBox>
          <iframe
            src={videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoBox>
      </ModalBox>
    </Modal>
  );
};

export default VideoPopup;
