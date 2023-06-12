import Link from "next/link";

function Login() {
  return (
    <section>
      <div className="flex flex-col items-center  h-[calc(100vh-80px)] ">
        <h1 className="text-white font-extrabold text-5xl mb-6 text-center h-14">
          Giris Yap
        </h1>
        <div className="bg-secondary-button w-5/12 flex flex-col justify-center items-center rounded-lg shadow-lg shadow-[#17202A]">
          <form className="w-full gap-5 flex flex-col h-fit px-10 py-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email adresinizi girniz!"
                className="w-full pl-8 py-4 rounded-full border border-[#353C4A] bg-primary-button text-white"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-xl">
                Sifre
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Sifrenizi giriniz!"
                className="w-full pl-8 py-4 rounded-full border border-[#353C4A] bg-primary-button text-white"
              />
            </div>
            <input
              type="submit"
              value="Giris Yap"
              className="cursor-pointer hover:bg-hover-primary-button transition-all p-4 bg-primary-button rounded-full  border border-[#353C4A] text-white font-semibold mt-5"
            />
          </form>
          <hr className="h-[1px] bg-white w-9/12 mb-5" />
          <div className="mb-5">
            <p className="text-accent/50">
              Hesabiniz yok mu?{" "}
              <span className="text-text underline cursor-pointer">
                <Link href="/auth/register">Kayit Olun</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
