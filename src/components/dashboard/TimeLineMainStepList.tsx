import { KitContext } from '@/providers/KitProvider';
import DoneIcon from '@mui/icons-material/Done';
import { useContext } from 'react';

interface MainStepperProps {
  titles: string[];
  currentStep: number;
}
type TStatus = 'completed' | 'inprogress' | 'todo';
interface DotsProps {
  title: string;
  status: TStatus
}

const Dots = (props: DotsProps) => {
  const { status, title } = props;
  const currentColor = status !== 'todo' ? "#F4961D" : "#DDDDDD";

  return (
    <div className="flex items-center gap-[8px]">
      {/* circle */}
      <div
        className={`rounded-full min-w-[18px] min-h-[18px] w-[18px] h-[18px] flex items-center justify-center border bg-white z-[2]`}
        style={{ borderColor: currentColor, backgroundColor: status === 'completed' ? '#F4961D' : 'white' }}
      >
        {
          status === 'completed' ?
            <DoneIcon className='text-[14px] text-white font-semibold' /> :
            <div
              className={`rounded-full w-[10px] h-[10px]`}
              style={{ backgroundColor: currentColor }}
            ></div>
        }
      </div>

      <div
        className={`text-[12px]`}
        style={{ color: status !== 'todo' ? "#F4961D" : "black" }}
      >
        {title}
      </div>
    </div>
  );
};

const TimeLineMainStepList = (props: MainStepperProps) => {
  const { titles, currentStep } = props;
  const { moveToStep } = useContext(KitContext);

  return (
    <div className="relative">
      <div className="flex flex-col z-[2] relative">
        {titles.map((title, index) => {
          let status: TStatus = 'todo';

          if (index < currentStep) {
            status = 'completed';
          } else if (index === currentStep) {
            status = 'inprogress';
          }

          return (
            <div className="relative overflow-hidden py-[3px]" key={index}>
              <div className="z-[2] relativ cursor-pointer" onClick={() => moveToStep(index)}>
                <Dots
                  title={title}
                  status={status}
                />
              </div>

              {index < currentStep && (
                <>
                  {index !== 0 && (
                    <div
                      className={`absolute top-[50%] left-[8px] w-[1px] h-full border z-[1] border-my-orange translate-y-[-100%]`}
                    ></div>
                  )}
                  <div
                    className={`absolute top-[50%] left-[8px] w-[1px] h-full border z-[1] border-my-orange`}
                  ></div>
                </>
              )}

              {currentStep === index && titles.length !== 1 && (
                <>
                  {index !== 0 && (
                    <div
                      className={`absolute top-[50%] left-[8px] w-[1px] h-full border z-[1] border-my-orange translate-y-[-100%]`}
                    ></div>
                  )}
                  {index !== titles.length - 1 && (
                    <div
                      className={`absolute top-[50%] left-[8px] w-[1px] h-full border border-dashed z-[1] border-[#DDDDDD]`}
                    ></div>
                  )}
                </>
              )}

              {index > currentStep && (
                <>
                  <div
                    className={`absolute top-[50%] left-[8px] w-[1px] h-full border z-[1] border-[#DDDDDD] translate-y-[-100%]`}
                  ></div>
                  {index !== titles.length - 1 && (
                    <div
                      className={`absolute top-[50%] left-[8px] w-[1px] h-full border border-dashed z-[1] border-[#DDDDDD]`}
                    ></div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLineMainStepList;
