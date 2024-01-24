import Image from "next/image";

const Feedback = ({ data }: { data: FeedbacksProps }) => (
  <section id="feedback" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1">
        <h2 className="font-semibold text-[28px] lg:text-[48px]">
          What People Are Saying About Me
        </h2>
      </div>
      <div className="flex flex-1 lg:items-center pt-[30px] lg:pt-0">
        <p className="text-[18px] text-dimWhite z-10">
          Everything you need to build awesome design, mobile app, and web app,
          Rest API and more. I&apos;ll do my best for it!
        </p>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[30px] lg:mt-6 gap-6">
      {data.map(({ avatar, name, position, review }, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col items-start p-[40px] rounded-[20px] hover-gradient-card z-10"
          data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
          data-aos-duration="1000"
          data-aos-offset={200 - index * 50}
        >
          <Image
            className="w-[44px] h-[26px] object-contain"
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PGcgZmlsbD0iIzAwZjZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTAuNTA0NDMsMjkuMjkxNGg1My41MDk4YzQuMjU0MzEsMCA3LjczNDI5LDMuNDc5OTggNy43MzQyOSw3LjczNDI5djQyLjAwOTk5djAuMDE1NDV2MC4wNDU2OXYwLjA3NTkydjAuMTA1NDh2MC4xMzQwNHYwLjE2MjkzdjAuMTg5OHYwLjIxNzY5djAuMjQzODl2MC4yNjk3NnYwLjI5NTI5djAuMzIwMTV2MC4zNDUzNHYwLjM2ODE5djAuMzkyMDR2MC40MTM4N3YwLjQzNjM4djAuNDU4MjJ2MC40NzkzOHYwLjQ5OTU0djAuNTE5MzZ2MC41Mzg1MXYwLjU1Njk4djAuNTc1OHYwLjU5MjkzdjAuNjEwNHYwLjYyNjg2djAuNjQxOTh2MC42NTc3N3YwLjY3MzIydjAuMDM3Mjl2MjcuNjMxMmMwLDE3Ljk4NDc1IC0xMC4yNjgyNywyNC41NDA1NyAtMjUuMjA0MDUsMjQuNTQwNTdjLTYuNjMzMDksMCAtOC42MjE4NCwtNy4yOTU1NSAtOC42MjE4NCwtNy4yOTU1NWMwLDAgMCwtMTEuMjc1NzQgMCwtMjEuODg3MzRjMCwtMTAuNjExOTMgLTExLjkzODU1LC0xNS4yNTQ5MiAtMTEuOTM4NTUsLTE1LjI1NDkyaC0xNS40NzkzM2MtNC4yNTQzMSwwIC03LjczNDI5LC0zLjQ3OTY0IC03LjczNDI5LC03LjczMzk1di01My41MTAxNGMwLC00LjI1NDMxIDMuNDc5OTgsLTcuNzM0MjkgNy43MzQyOSwtNy43MzQyOXpNMTA3Ljk4NjQ0LDI5LjI5MTRoNTMuNTA5OGM0LjI1NDY1LDAgNy43MzQyOSwzLjQ3OTk4IDcuNzM0MjksNy43MzQyOXY0Mi4wMDk5OXYwLjAxNTQ1djAuMDQ1Njl2MC4wNzU5MnYwLjEwNTQ4djAuMTM0MDR2MC4xNjI5M3YwLjE4OTh2MC4yMTc2OXYwLjI0Mzg5djAuMjY5NzZ2MC4yOTUyOXYwLjMyMDE1djAuMzQ1MzR2MC4zNjgxOXYwLjM5MjA0djAuNDEzODd2MC40MzYzOHYwLjQ1ODIydjAuNDc5Mzh2MC40OTk1NHYwLjUxOTM2djAuNTM4NTF2MC41NTY5OHYwLjU3NTh2MC41OTI5M3YwLjYxMDR2MC42MjY4NnYwLjY0MTk4djAuNjU3Nzd2MC42NzMyMnYwLjAzNzI5djI3LjYzMTJjMCwxNy45ODQ3NSAtMTAuMjY4MjcsMjQuNTQwNTcgLTI1LjIwNDA1LDI0LjU0MDU3Yy02LjYzMzA5LDAgLTguNjIxNSwtNy4yOTU1NSAtOC42MjE1LC03LjI5NTU1YzAsMCAwLC0xMS4yNzU3NCAwLC0yMS44ODczNGMwLC0xMC42MTE5MyAtMTEuOTM4ODgsLTE1LjI1NDkyIC0xMS45Mzg4OCwtMTUuMjU0OTJoLTE1LjQ3OTMzYy00LjI1NDMxLDAgLTcuNzM0MjksLTMuNDc5NjQgLTcuNzM0MjksLTcuNzMzOTV2LTUzLjUxMDE0YzAsLTQuMjU0MzEgMy40Nzk5OCwtNy43MzQyOSA3LjczNDI5LC03LjczNDI5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
            alt="quote_mark"
            width={44}
            height={26}
          />
          <p className="py-10">{review}</p>
          <div className="flex flex-row items-center">
            <div className="avatar placeholder">
              <div className="w-[46px] h-[46px] rounded-full bg-neutral-focus text-neutral-content">
                <Image
                  className="object-cover rounded-full"
                  src={avatar}
                  alt="avatar"
                  width={46}
                  height={46}
                  quality={10}
                  loader={({ src }) => src}
                  unoptimized={true}
                />
              </div>
            </div>
            <div className="flex flex-col ml-3">
              <span className="text-[15px]">{name}</span>
              <p className="text-sm text-dimWhite">{position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Feedback;
