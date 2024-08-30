import { ICategoryItem } from "@/types";
import DotShadowRoundedContainer from "../DotShadow";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryCard = ({
  item,
  selected,
}: {
  item: ICategoryItem;
  selected: boolean;
}) => {
  const router = useRouter();

  const onDetailsClicked = () => {
    router.push(`/dashboard/${item.title.replaceAll(" ", "-")}`);
  };

  return (
    <DotShadowRoundedContainer activeColor={`#F4961D`} animate={!selected}>
      <div className="max-w-[380px] p-[16px] flex flex-col gap-[16px] w-full">
        {/* description */}
        <div className="bg-[#365CA7] bg-opacity-[5%] h-[130px] rounded-[12px] flex px-[8px] py-[10px]">
          {/* header */}
          <div className="flex-grow flex flex-col gap-[10px]">
            <div className="flex">
              <div className="relative bg-[#FDEAD2] text-my-orange font-cathy-melody text-[20px] rounded-full px-[16px] h-[40px] flex items-center justify-center">
                {item.title}
                <Image
                  src={`/images/pin.png`}
                  alt="category-logo"
                  width={12}
                  height={12}
                  sizes="100vw"
                  className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>

            <div className="text-[#242424] px-[8px]">{item.description}</div>
          </div>
          {/* image */}
          <div>
            <Image
              src={item.icon}
              alt="category-logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto min-w-[108px] max-h-full"
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="h-[17px] border border-my-orange rounded-full text-[10px] text-my-orange px-[10px]">
            {`${item.kitCount} kit available`}
          </div>

          <Button
            variant="contained"
            className="!h-[40px] !bg-my-blue !text-white !rounded-full !font-cathy-melody !text-base"
            onClick={onDetailsClicked}
          >
            {`See Details`}
          </Button>
        </div>
      </div>
    </DotShadowRoundedContainer>
  );
};

export default CategoryCard;
