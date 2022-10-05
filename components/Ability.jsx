import Image from "next/image";
import ModalBox from "./ModalBox";
import ModalToggler from "./ModalToggler";

const Ability = ({ data }) => (
  <section id="ability" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col flex-1">
        <h2 className="font-semibold text-[28px] lg:text-[48px]">
          The Abilities I have and The Most Often Tools I Use
        </h2>
        <p className="text-[18px] text-dimWhite mt-6">
          With my abilities that I have. I believe that I can give my best for
          what I can do
        </p>
        <div className="hidden lg:block">
          <ModalToggler id="abilitiesModal" title="Show More" />
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-[30px] lg:pt-0 lg:pl-[60px]">
        <div>
          {data.slice(0, 3).map(({ name, icon, description }, index) => (
            <div
              key={index}
              className="flex flex-row items-center hover:bg-gradient p-5 hover-gradient-card rounded-[20px]"
            >
              <div className="mr-[20px]">
                <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                  <div className="w-[42px] h-[42px] object-contain">
                    <Image
                      src={icon}
                      alt={`${name}_icon`}
                      width={42}
                      height={42}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-[15px] lg:text-[18px]">{name}</h3>
                <p className="text-[13px] lg:text-[16px] text-dimWhite mt-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
          <div className="block lg:hidden">
            <ModalToggler id="abilitiesModal" title="Show More" />
          </div>
        </div>
      </div>
    </div>

    <ModalBox
      id="abilitiesModal"
      width="w-11/12"
      styles="overflow-x-hidden md:scrollbar"
    >
      <h3 className="text-2xl font-bold text-center md:text-4xl">
        Language & Tools
      </h3>
      <p className="mt-2 text-center ss:mt-3 md:5 lg:mt-6">
        My Abilities Including The Most Often Language and Tools I Use
      </p>
      <div className="mt-4 text-center ss:mt-6 md:8 lg:mt-10">
        <div className="grid grid-flow-row grid-cols-2 gap-2 ss:grid-cols-3 md:grid-cols-4 md:gap-3 lg:md:gap-4">
          {data.map(({ name, icon, description, inverted }, index) => (
            <div
              key={index}
              className="grid col-span-1 hover-gradient-card p-3 md:p-4 lg:p-5 rounded-[20px]"
              title={description}
            >
              <div className="flex flex-col items-center justify-start">
                <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                  <Image
                    className={`object-contain ${
                      inverted ? `invert` : "invert-0"
                    } `}
                    src={icon}
                    alt={`${name}_icon`}
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalBox>
  </section>
);

export default Ability;
