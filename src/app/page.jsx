"use client";

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const res = await fetch("http://localhost:3000/api/shorty", {
      method: "POST",

      body: JSON.stringify({ url: e.target[0].value }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <main className="flex justify-center items-center">
      <section className="flex flex-1 flex-col justify-center items-center p-32">
        <section className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="textGradient font-extrabold text-5xl text-center h-fit py-3">
              Shorten Your Loooong Links
            </h1>
            <p className="w-10/12 text-center">
              Linkly is an efficient and easy-to-use URL shortening service that
              streamlines your online experience.
            </p>
          </div>

          <form
            className="flex justify-end items-center w-full"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex justify-start items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute ml-5 rotate-[25deg]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              <input
                type="text"
                name="url"
                className="bg-[#181E29] px-14 w-full py-5 rounded-full border border-[#353C4A] "
                placeholder="Enter link here"
              />
            </div>

            <input
              type="submit"
              value="Shorten Now"
              className="bg-[#144EE3] mr-5 px-5 py-3 rounded-full border border-[#144EE3] font-semibold text-white absolute boxShadow "
            />
          </form>
        </section>
        <section></section>
      </section>
      <section>
        <div className=" rotate-90 ">
          <p>DARK - LIGHT MODE</p>
        </div>
      </section>
    </main>
  );
}
