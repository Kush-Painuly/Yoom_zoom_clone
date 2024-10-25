import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[200px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-9">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming meetings at: 12:00PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-extrabold lg:text-4xl">{time}</h1>
            <p className="font-medium text-sky-1 text-md lg:text-xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList/>

      {/* other content */}
    </section>
  );
};

export default Home;
