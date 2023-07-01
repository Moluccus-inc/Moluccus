import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div>
      <div className="container">
        <div className="space-y-3 flex flex-col !mb-4 items-center !text-center">
          <span
            className="rainbow-text relative font-medium text-primary before:absolute before:inset-y-xs before:-left-[16px] before:w-px before:bg-orange-500 initial:text-base sm:before:-left-[25px] w-fit"
            style={{
              color: "currentcolor",
              fontWeight: "800",
              fontSize: "clamp(45px, 3.125vw, 70px)",
              whiteSpace: "pre-wrap",
              transitionTimingFunction: "ease",
              transitionDuration: "0.6s",
              transitionDelay: "0.117391s",
              lineHeight: "1.2em",
              letterSpacing: "-.5px",
              textTransform: "none",
            }}
          >
            Pricing
          </span>
          <h1 className="text-2xl font-semibold leading-none tracking-tight text-primary md:text-5xl">
            Transparent pricing you can understand
          </h1>
        </div>
      </div>

      <div className="relative px-3">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div
            id="hobby"
            className="card group relative rounded-lg shadow-legacy-selected"
          >
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="border-b px-2 py-3 text-center border-secondary">
                <span className="block text-[20px] font-semibold text-light">
                  Hobby
                </span>
                <span className="mt-sm mb-2 block text-xs leading-tight">
                  One database
                  <br className="hidden md:block xl:hidden" /> per organization
                </span>
                <span className="block text-[36px] leading-none text-primary">
                  <span className="mb-[6px] block text-[16px]">&nbsp;</span>
                  <span className="font-semibold">Free</span>
                </span>
              </div>

              <div className="flex-1 p-2">
                <ul>
                  <li className=" mb-1 flex text-sm lg:text-sm xl:text-base">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="24"
                      aria-hidden="true"
                      className="flex-shrink-0 text-green-500 mr-1"
                    >
                      <path
                        d="m2.5 9 3 3 8.028-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-primary">5 GB storage</span>
                  </li>
                </ul>
              </div>

              <div className="m-auto w-full px-3 pb-3 text-center text-primary">
                <a
                  className="group inline-flex gap-sm whitespace-nowrap rounded-full border font-semibold transition flex-center focus:outline-none focus:ring focus:ring-orange-300 disabled:pointer-events-none disabled:!border-primary disabled:!bg-secondary disabled:!text-secondary dark:focus:ring-orange-500/40 text-light !border-orange-500 bg-orange-500 !h-auto !p-0 !border-none !bg-transparent !text-inherit !focus:ring-orange-500 pr-2 pl-2.5 text-sm"
                  href="https://auth.planetscale.com/sign-up"
                >
                  Start building
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-orange"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      className="origin-center scale-x-0 transition-transform group-hover:scale-x-100"
                      d="M12 8H4"
                    ></path>
                    <path
                      className="transition-transform group-hover:translate-x-xs"
                      d="M6.5 11.5L9.64645 8.35355C9.84171 8.15829 9.84171 7.84171 9.64645 7.64645L6.5 4.5"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            id="scaler"
            className="card group relative rounded-lg shadow-legacy-selected "
          >
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="border-b px-2 py-3 text-center border-secondary">
                <span className="block text-[20px] font-semibold text-primary">
                  Scaler
                </span>
                <span className="mt-sm mb-2 block text-xs leading-tight">
                  Serverless applications
                  <br className="hidden md:block xl:hidden" /> with low traffic
                </span>
                <span className="block text-[36px] leading-none text-primary">
                  <span className="block text-sm">Starts at</span>
                  <sup className="relative top-[-10px] text-[20px] font-semibold">
                    $
                  </sup>
                  <span className="font-semibold">29</span>
                  <span className="text-[24px] font-semibold">/mo</span>
                </span>
              </div>

              <div className="flex-1 p-2">
                <ul>
                  <li className=" mb-1 flex text-sm lg:text-sm xl:text-base">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="24"
                      aria-hidden="true"
                      className="flex-shrink-0 text-green-500 mr-1"
                    >
                      <path
                        d="m2.5 9 3 3 8.028-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-primary">
                      10 GB storage included <br className="hidden sm:block" />
                      <span className="text-secondary sm:text-xs xl:text-sm">
                        + <sup className="relative top-[-2px]">$</sup>2.50 per
                        additional GB
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="m-auto w-full px-3 pb-3 text-center text-primary">
                <a
                  className="group inline-flex gap-sm whitespace-nowrap rounded-full border font-semibold transition flex-center focus:outline-none focus:ring focus:ring-orange-300 disabled:pointer-events-none disabled:!border-primary disabled:!bg-secondary disabled:!text-secondary dark:focus:ring-orange-500/40 text-light !border-orange-500 bg-orange-500 !h-auto !p-0 !border-none !bg-transparent !text-inherit !focus:ring-orange-500 pr-2 pl-2.5 text-sm"
                  href="https://auth.planetscale.com/sign-up"
                >
                  Get started
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-orange"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      className="origin-center scale-x-0 transition-transform group-hover:scale-x-100"
                      d="M12 8H4"
                    ></path>
                    <path
                      className="transition-transform group-hover:translate-x-xs"
                      d="M6.5 11.5L9.64645 8.35355C9.84171 8.15829 9.84171 7.84171 9.64645 7.64645L6.5 4.5"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            id="team"
            className="card group relative rounded-lg shadow-legacy-selected "
          >
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="border-b px-2 py-3 text-center border-secondary">
                <span className="block text-[20px] font-semibold text-orange-500">
                  Team
                </span>
                <span className="mt-sm mb-2 block text-xs leading-tight">
                  Teams needing
                  <br className="hidden md:block xl:hidden" /> higher
                  performance
                </span>
                <span className="block text-[36px] leading-none text-primary">
                  <span className="block text-sm">Starts at</span>
                  <sup className="relative top-[-10px] text-[20px] font-semibold">
                    $
                  </sup>
                  <span className="font-semibold">599</span>
                  <span className="text-[24px] font-semibold">/mo</span>
                </span>
              </div>

              <div className="flex-1 p-2">
                <ul>
                  <li className=" mb-1 flex text-sm lg:text-sm xl:text-base">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="24"
                      aria-hidden="true"
                      className="flex-shrink-0 text-green-500 mr-1"
                    >
                      <path
                        d="m2.5 9 3 3 8.028-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-primary">
                      100 GB storage included <br className="hidden sm:block" />
                      <span className="text-secondary sm:text-xs xl:text-sm">
                        + <sup className="relative top-[-2px]">$</sup>2.50 per
                        additional GB
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="m-auto w-full px-3 pb-3 text-center text-primary">
                <a
                  className="group p-4 justify-items-center justify-center items-center inline-flex h-5 gap-sm whitespace-nowrap rounded-xl border font-semibold transition flex-center focus:outline-none focus:ring focus:ring-orange-300 disabled:pointer-events-none disabled:!border-primary disabled:!bg-secondary disabled:!text-secondary dark:focus:ring-orange-500/40 text-light !border-orange-500 bg-orange-500 !text-primary hover:!border-orange !bg-transparent pr-2 pl-2.5 text-sm"
                  href="https://auth.planetscale.com/sign-up"
                >
                  Get started
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-orange"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      className="origin-center scale-x-0 transition-transform group-hover:scale-x-100"
                      d="M12 8H4"
                    ></path>
                    <path
                      className="transition-transform group-hover:translate-x-xs"
                      d="M6.5 11.5L9.64645 8.35355C9.84171 8.15829 9.84171 7.84171 9.64645 7.64645L6.5 4.5"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            id="enterprise"
            className="card group relative rounded-lg shadow-legacy-selected "
          >
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="border-b px-2 py-3 text-center border-secondary">
                <span className="block text-[20px] font-semibold text-purple">
                  Enterprise
                </span>
                <span className="mt-sm mb-2 block text-xs leading-tight">
                  {" "}
                  Built for scale
                  <br className="hidden md:block xl:hidden" />
                  &nbsp;
                </span>
                <span className="block text-[36px] leading-none text-primary">
                  <span className="mb-[6px] block text-[16px]">&nbsp;</span>
                  <span className="font-semibold">Custom</span>
                </span>
              </div>

              <div className="flex-1 p-2">
                <ul>
                  <li className=" mb-1 flex text-sm lg:text-sm xl:text-base">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="24"
                      aria-hidden="true"
                      className="flex-shrink-0 text-green-500 mr-1"
                    >
                      <path
                        d="m2.5 9 3 3 8.028-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-primary">
                      Custom usage-based or resource-based pricing
                    </span>
                  </li>
                </ul>
              </div>

              <div className="m-auto w-full px-3 pb-3 text-center text-primary">
                <a
                  className="group p-4 justify-items-center justify-center items-center inline-flex h-5 gap-sm whitespace-nowrap rounded-xl border font-semibold transition flex-center focus:outline-none focus:ring focus:ring-orange-300 disabled:pointer-events-none disabled:!border-primary disabled:!bg-secondary disabled:!text-secondary dark:focus:ring-orange-500/40 text-light !border-orange-500 bg-orange-500 !text-primary hover:!border-orange !bg-transparent pr-2 pl-2.5 text-sm"
                  href="/contact"
                >
                  Talk to us
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-orange"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      className="origin-center scale-x-0 transition-transform group-hover:scale-x-100"
                      d="M12 8H4"
                    ></path>
                    <path
                      className="transition-transform group-hover:translate-x-xs"
                      d="M6.5 11.5L9.64645 8.35355C9.84171 8.15829 9.84171 7.84171 9.64645 7.64645L6.5 4.5"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
