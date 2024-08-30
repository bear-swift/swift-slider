import { Box, Modal, styled } from "@mui/material";
import Image from "next/image";

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

interface ImagePopupProps {
  image: string,
  open: boolean,
  onClose: () => void
}

const ImagePopup = (props: ImagePopupProps) => {
  const { image, open, onClose } = props;

  return (
    <StyledModal
      open={open}
      onClose={onClose}
    >
      <div className="bg-white p-[16px] rounded-[8px] max-w-[1280px] w-[80%] h-[90%] flex items-center justify-center">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt="image"
          className="max-h-full max-w-full w-full object-contain"
        />
      </div>
    </StyledModal>
  )
}

export default ImagePopup