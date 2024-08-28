import { Dialog } from "@mui/material";
import { ReactNode } from "react";

export const DEFAULT_MODAL_Z_INDEX = 3;
interface ModalLayoutProps {
  children: ReactNode;
  visible: boolean;
  showCloseIcon?: boolean;
  onClose: () => void;
  zIndex?: number;
}

const ModalLayout = ({
  children,
  visible,
  onClose,
  showCloseIcon = true,
  zIndex = DEFAULT_MODAL_Z_INDEX,
}: ModalLayoutProps) => {
  return (
    <Dialog
      onClose={onClose}
      open={visible}
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: "fit-content",
          borderRadius: "20px",
        },
        "& .MuiBackdrop-root": {
          background: "transparent",
        },
        backgroundColor: `rgba(0, 0, 0, 0.1)`,
        backdropFilter: "blur(5px)",
        zIndex: zIndex,
      }}
    >
      <div className="relative">
        {showCloseIcon && (
          <div
            className="absolute right-[20px] top-[20px] cursor-pointer text-[18px] leading-[20px]"
            onClick={onClose}
          >
            {"✖"}
          </div>
        )}
        {children}
      </div>
    </Dialog>
  );
};

export default ModalLayout;
