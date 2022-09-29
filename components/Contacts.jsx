import Image from "next/image";

const Contacts = ({ data }) => (
  <section id="contacts" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="flex flex-1 flex-col pt-[30px] lg:pt-0">
        <div className="lg:pr-12">
          {data.map(({ label, icon, description, url }, index) => (
            <div
              key={index}
              className="flex flex-row items-center hover:bg-gradient p-5 hover-gradient-card rounded-[20px]"
            >
              <div className="mr-[20px]">
                <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                  <Image
                    className="object-contain"
                    src={icon}
                    alt={`${label}_icon`}
                    width="42"
                    height="42"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <h3>{label}</h3>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 text-dimWhite hover:text-secondary"
                >
                  {description}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-semibold text-[28px] lg:text-[48px]">Contact Me</h2>
        <p className="text-[18px] text-dimWhite mt-[30px] lg:mt-6">
          While we&apos;re good with smoke signals, there are simpler ways for
          me to get in touch and answer your question.
        </p>
      </div>
    </div>
  </section>
);

export default Contacts;
