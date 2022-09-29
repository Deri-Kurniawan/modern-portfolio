const Stats = ({ data }) => (
  <section id="stats" className="py-[50px] lg:py-[140px]">
    <div className="flex flex-row flex-wrap items-center justify-between">
      {data.map(({ label, value }, index) => (
        <div
          key={index}
          className="flex flex-row flex-wrap items-center justify-start sm:justify-center"
        >
          <div className="flex flex-row items-center justify-between">
            <span className="font-semibold text-[20px] ss:text-[25px] lg:text-[40px]">
              {value}
            </span>
            <h2
              className={`font-normal text-[15px] ss:[17px] lg:text-[20px] text-gradient px-[25px] lg:pl-[50px] ${
                index !== data.length - 1 && "md:pr-[100px]"
              } uppercase`}
            >
              {label}
            </h2>
            {index !== data.length - 1 && (
              <div className="hidden text-dimWhite md:block">|</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
