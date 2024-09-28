// million-ignore

"use client";

import { Parallax } from "react-scroll-parallax";
import toast from "react-hot-toast";
import { ParallaxProvider } from "react-scroll-parallax";
import { Button } from "@cap/ui";
import Link from "next/link";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    const animateClouds = () => {
      const cloud1 = document.getElementById("cloud-1");
      const cloud2 = document.getElementById("cloud-2");
      const cloud3 = document.getElementById("cloud-3");
      const cloud4 = document.getElementById("cloud-4");
      const cloud5 = document.getElementById("cloud-5");

      if (cloud1 && cloud2 && cloud3 && cloud4 && cloud5) {
        cloud1.animate(
          [
            { transform: "translateX(200px)" },
            { transform: "translateX(-50px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 100000,
            iterations: Infinity,
          }
        );

        cloud2.animate(
          [
            { transform: "translateX(-200px)" },
            { transform: "translateX(50px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 120000,
            iterations: Infinity,
          }
        );

        cloud3.animate(
          [
            { transform: "translateY(100px)" },
            { transform: "translateY(-30px)" },
            { transform: "translateY(0)" },
          ],
          {
            duration: 150000,
            iterations: Infinity,
          }
        );

        cloud4.animate(
          [
            { transform: "translateX(100px)" },
            { transform: "translateX(-25px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 80000,
            iterations: Infinity,
          }
        );

        cloud5.animate(
          [
            { transform: "translateX(-100px)" },
            { transform: "translateX(25px)" },
            { transform: "translateX(0)" },
          ],
          {
            duration: 90000,
            iterations: Infinity,
          }
        );
      }
    };

    animateClouds();
  }, []);

  return (
    <ParallaxProvider>
      <div className="-mt-[80px] custom-bg min-h-screen md:min-h-[calc(100vh+20px)] relative flex items-center">
        <div className="w-full relative z-10 flex">
          <div className="wrapper wrapper-sm mx-auto">
            <div className="mb-auto text-center px-4 pt-40 pb-52 md:pb-64 -mt-40">
              {/* <Link
                href="/updates/cap-public-beta-launch"
                target="_blank"
                className="mx-auto mb-4 inline-flex justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-blue-400 hover:bg-blue-500 h-9 px-4 py-2 rounded-full space-x-2 items-center"
              >
                <span className="text-sm text-white">
                  NEW: Cap v0.3 is here!
                </span>
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M8.783 6.667H.667V5.333h8.116L5.05 1.6 6 .667 11.333 6 6 11.333l-.95-.933 3.733-3.733Z"
                  />
                </svg>
              </Link> */}

              <h1 className="fade-in-down text-[2rem] leading-[2.5rem] md:text-[3.75rem] md:leading-[4rem] relative z-10 text-white mb-4">
                Beautiful, shareable screen recordings.
              </h1>
              <p className="fade-in-down animate-delay-1 text-base sm:text-xl max-w-2xl mx-auto text-white mb-8">
                Cap is the open source alternative to Loom. Lightweight,
                powerful, and stunning. Record and share in seconds.
              </p>
              <div className="fade-in-up animate-delay-2">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-3">
                  <Button
                    variant="white"
                    href="/pricing"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="secondary"
                    href="/download"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Download App
                  </Button>
                </div>
                <p className="text-gray-200 text-sm">
                  No credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="cloud-1" className="absolute top-0 -right-20 opacity-70">
          <img
            className="max-w-[40vw] h-auto"
            src="/illustrations/cloud-1.png"
            alt="Homepage Cloud One"
          />
        </div>
        <div id="cloud-2" className="absolute top-0 left-0 opacity-70">
          <img
            className="max-w-[40vw] h-auto"
            src="/illustrations/cloud-2.png"
            alt="Homepage Cloud Two"
          />
        </div>
        <div id="cloud-3" className="absolute -bottom-10 -left-20 opacity-70">
          <img src="/illustrations/cloud-3.png" alt="Homepage Cloud Three" />
        </div>
      </div>
      <div
        id="scrolling-section"
        className="pb-32 md:pb-48 fade-in-up animate-delay-2 -mt-40"
      >
        <Parallax
          className="cursor-pointer"
          scale={[2.2, 1.25]}
          onClick={() =>
            toast("This was going to be something cool... it might be later 👀")
          }
        >
          <img
            src="/illustrations/landing-banner.png"
            className="w-full max-w-[600px] block mx-auto h-auto rounded-xl"
            alt="Landing Page Screenshot Banner"
          />
        </Parallax>
      </div>
      <div className="wrapper pb-32 md:pb-40">
        <div className="mb-4">
          <svg
            className="w-[190px] h-auto mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 191 23"
          >
            <path
              fill="#8991A3"
              d="M7.34 21.488a1.025 1.025 0 01-.32.64c-.193.214-.406.31-.64.288-.363-.021-.64-.16-.833-.416-.192-.256-.288-.47-.288-.64 0-.81-.021-1.653-.064-2.528-.042-.896-.096-1.813-.16-2.752a1.534 1.534 0 01-.768-.064.895.895 0 01-.448-.48c-.149-.362-.128-.682.064-.96.192-.277.502-.544.928-.8a640.19 640.19 0 00-.32-2.336 63.943 63.943 0 00-.288-2.24.646.646 0 01.032-.352c.043-.106.096-.202.16-.288.064-.106.182-.202.352-.288.278-.106.587-.021.928.256.363.278.608.63.736 1.056.064.406.128.875.192 1.408.086.512.16 1.078.224 1.696a10.95 10.95 0 001.248-.896c.406-.32.747-.661 1.024-1.024.299-.362.523-.736.672-1.12.15-.405.192-.821.128-1.248a1.594 1.594 0 00-.48-.96c-.277-.298-.714-.458-1.312-.48a6.754 6.754 0 00-1.6.128c-.512.107-1.024.246-1.536.416-.49.17-.981.374-1.472.608-.469.235-.928.47-1.376.704a1.56 1.56 0 01-.896.224C.95 8.998.77 8.89.683 8.72c-.192-.426-.181-.81.032-1.152.235-.341.587-.661 1.056-.96.406-.234.886-.47 1.44-.704.576-.256 1.174-.47 1.792-.64.64-.192 1.28-.32 1.92-.384a6.189 6.189 0 011.888.032c.598.086 1.131.288 1.6.608.491.299.886.747 1.184 1.344.363.982.459 1.888.288 2.72-.149.81-.469 1.558-.96 2.24a8.856 8.856 0 01-1.76 1.824 21.394 21.394 0 01-2.08 1.44c.107 1.152.182 2.294.224 3.424.043 1.13.054 2.123.032 2.976zM20.838 6.832c.64.235 1.173.587 1.6 1.056.448.47.79 1.003 1.024 1.6.235.576.363 1.174.384 1.792a4.587 4.587 0 01-.192 1.728 10.521 10.521 0 01-.896 1.76 8.01 8.01 0 01-1.248 1.536c-.47.448-1.003.81-1.6 1.088a4.654 4.654 0 01-1.984.416c-.875 0-1.61-.202-2.208-.608a4.33 4.33 0 01-1.408-1.568c-.341-.64-.565-1.365-.672-2.176a9.292 9.292 0 01.064-2.432 9.287 9.287 0 01.416-1.728c.213-.576.48-1.077.8-1.504a4.39 4.39 0 011.088-1.088 2.585 2.585 0 011.44-.416c.299 0 .672.064 1.12.192.448.107.864.267 1.248.48.277-.256.619-.298 1.024-.128zm-1.216 2.336c-.235-.15-.512-.341-.832-.576-.299-.256-.565-.384-.8-.384-.256 0-.512.118-.768.352a4.293 4.293 0 00-.64.832 7.44 7.44 0 00-.448.928c-.128.32-.213.576-.256.768a7.89 7.89 0 00-.128 1.152c-.021.448.01.896.096 1.344.085.427.245.822.48 1.184.256.342.63.587 1.12.736.299.086.65.086 1.056 0 .405-.106.8-.288 1.184-.544a4.565 4.565 0 001.12-1.024c.363-.426.64-.917.832-1.472.213-.618.213-1.258 0-1.92-.192-.682-.597-1.173-1.216-1.472a.767.767 0 01-.448.16.798.798 0 01-.352-.064zM37.167 17.264c-.17.235-.362.395-.575.48a2.027 2.027 0 01-.576.096 1.697 1.697 0 01-.832-.288c-.256-.192-.416-.384-.48-.576a74.585 74.585 0 01-.416-1.216c-.15-.448-.3-.896-.448-1.344-.129-.47-.267-.917-.417-1.344a73.32 73.32 0 00-.416-1.216 46.456 46.456 0 00-1.215 2.272c-.385.747-.811 1.526-1.28 2.336-.214.32-.46.544-.736.672-.278.107-.512.15-.704.128a1.359 1.359 0 01-.768-.32 3.908 3.908 0 01-.512-.544 9.595 9.595 0 01-.705-1.472 40.47 40.47 0 01-.671-1.92 96.957 96.957 0 01-.544-2.016c-.171-.682-.31-1.29-.416-1.824a2.752 2.752 0 010-1.024c.085-.32.277-.501.576-.544.362-.021.693.107.991.384.3.256.47.512.512.768.086.427.182.896.288 1.408.128.49.256.992.384 1.504.15.512.288 1.014.416 1.504.15.49.3.928.448 1.312.32-.512.672-1.098 1.056-1.76.406-.682.79-1.333 1.152-1.952.363-.64.694-1.194.993-1.664.298-.47.533-.757.703-.864.128-.085.31-.074.544.032.235.086.406.214.513.384.469.939.853 1.974 1.152 3.104.32 1.11.629 2.144.928 3.104.298-.384.618-.885.96-1.504.34-.64.671-1.312.991-2.016.32-.704.62-1.408.896-2.112a26.38 26.38 0 00.672-1.888c.171-.576.406-.853.705-.832.383.043.714.17.992.384.277.214.383.438.32.672-.47 1.878-1.078 3.606-1.825 5.184a31.225 31.225 0 01-2.656 4.512zM51.067 10.48c-.832.49-1.728.875-2.688 1.152-.96.256-1.995.384-3.104.384.043.747.256 1.344.64 1.792.384.427.864.683 1.44.768.341.043.683.032 1.024-.032.363-.064.693-.16.992-.288.32-.15.608-.31.864-.48.256-.17.48-.341.672-.512.192-.17.395-.277.608-.32.213-.064.373-.074.48-.032.299.107.405.427.32.96a5.048 5.048 0 01-1.472 1.76c-.64.47-1.355.768-2.144.896a4.747 4.747 0 01-2.112-.096 4.413 4.413 0 01-1.952-1.12 4.933 4.933 0 01-1.12-1.728 7.537 7.537 0 01-.48-2.048 5.045 5.045 0 01.16-1.888c.192-.597.48-1.12.864-1.568.384-.47.864-.853 1.44-1.152.576-.298 1.248-.47 2.016-.512.917-.064 1.75.107 2.496.512.747.406 1.27.97 1.568 1.696.17.406.213.758.128 1.056-.064.299-.277.566-.64.8zm-3.68-2.176a3.78 3.78 0 00-.704.224 3.182 3.182 0 00-.672.416c-.192.15-.373.33-.544.544-.15.192-.235.416-.256.672a8.02 8.02 0 001.184-.096c.448-.064.875-.138 1.28-.224.427-.106.81-.224 1.152-.352.363-.128.661-.266.896-.416-.17-.405-.49-.65-.96-.736a3.317 3.317 0 00-1.376-.032zM63.47 6.96c-.384.214-.79.438-1.216.672a12.68 12.68 0 00-1.248.832c-.406.299-.8.662-1.184 1.088a7.089 7.089 0 00-.992 1.472 8.472 8.472 0 00-.864 2.496c-.15.832-.245 1.654-.288 2.464 0 .384-.096.779-.288 1.184-.17.384-.416.576-.736.576-.406 0-.736-.202-.992-.608a4.63 4.63 0 01-.48-1.216 59.411 59.411 0 01-.896-4.48 111.021 111.021 0 01-.608-4.448c0-.298.085-.49.256-.576.192-.085.405-.117.64-.096.256.022.501.086.736.192.234.107.373.278.416.512.085.79.192 1.622.32 2.496.128.854.256 1.59.384 2.208.085-.725.32-1.43.704-2.112a8.52 8.52 0 011.408-1.856 8.898 8.898 0 011.92-1.408 7.365 7.365 0 012.208-.768c.32-.042.587-.042.8 0 .213.043.363.118.448.224.085.107.096.278.032.512-.043.235-.203.448-.48.64zM65.882 12.176c-.299.043-.65.01-1.056-.096-.384-.106-.65-.373-.8-.8a1.19 1.19 0 01-.032-.608c.042-.213.266-.362.672-.448.384-.085.79-.16 1.216-.224.448-.085.896-.16 1.344-.224l-1.184-3.584c-.363-1.365-.406-2.538-.128-3.52C66.19 1.691 66.98.987 68.282.56A4.014 4.014 0 0169.85.368a4.054 4.054 0 011.504.416c.47.235.896.544 1.28.928s.693.832.928 1.344c.085.235.128.448.128.64.021.17-.043.33-.192.48-.214.214-.448.31-.704.288-.256-.042-.427-.117-.512-.224a9.551 9.551 0 00-.64-.704 3.3 3.3 0 00-.704-.64 2.25 2.25 0 00-.768-.416 1.797 1.797 0 00-.896-.096c-.15.022-.33.096-.544.224-.192.128-.363.33-.512.608-.15.256-.246.598-.288 1.024-.022.427.053.96.224 1.6a64.75 64.75 0 001.152 3.68 18.436 18.436 0 012.816-.096c.47.043.906.128 1.312.256.405.128.736.32.992.576.064.214.053.395-.032.544a1.241 1.241 0 01-.384.352c-.15.086-.33.15-.544.192a5.44 5.44 0 01-.576.096c-.427.043-.875.096-1.344.16-.47.043-.96.086-1.472.128.341.96.65 1.878.928 2.752.299.854.533 1.568.704 2.144.085.32.096.662.032 1.024a8.49 8.49 0 01-.256 1.056c-.17.49-.384.886-.64 1.184-.256.299-.534.395-.832.288-.235-.106-.384-.245-.448-.416-.064-.17-.075-.405-.032-.704.043-.341.064-.682.064-1.024 0-.341-.021-.65-.064-.928a3.589 3.589 0 00-.128-.768 9.095 9.095 0 00-.096-.48l-1.344-3.904-1.024.128c-.342.022-.694.054-1.056.096zM78.749 8.528a50.786 50.786 0 00-.384 1.92 23.417 23.417 0 00-.288 1.984c-.043.64-.043 1.216 0 1.728.064.512.203.875.416 1.088.363.064.779-.085 1.248-.448a8.94 8.94 0 001.376-1.44c.448-.576.853-1.194 1.216-1.856.362-.682.618-1.28.768-1.792.085-.256.16-.522.224-.8a3.83 3.83 0 00.096-.864c0-.17.106-.33.32-.48.234-.17.427-.266.576-.288a.545.545 0 01.352.064c.15.064.277.16.384.288.128.107.234.246.32.416.106.15.16.31.16.48.043.64.106 1.344.192 2.112.085.768.181 1.536.288 2.304.128.768.256 1.515.384 2.24.128.726.256 1.376.384 1.952.064.235 0 .502-.192.8-.192.299-.406.48-.64.544a1.019 1.019 0 01-.608-.064c-.192-.085-.341-.256-.448-.512a11.808 11.808 0 01-.32-1.088c-.085-.448-.17-.906-.256-1.376a72.55 72.55 0 00-.192-1.376 16.47 16.47 0 01-.128-1.12c-.32.576-.704 1.163-1.152 1.76a12.6 12.6 0 01-1.408 1.6c-.49.47-1.013.843-1.568 1.12a3.007 3.007 0 01-1.664.288c-.853-.106-1.504-.906-1.952-2.4a7.208 7.208 0 01-.256-1.984c.021-.725.075-1.44.16-2.144.106-.725.224-1.408.352-2.048.15-.64.277-1.162.384-1.568a.95.95 0 01.256-.448c.128-.15.277-.202.448-.16.32.064.608.256.864.576.277.32.373.65.288.992zM91.17 3.024c.106 2.326.288 4.736.544 7.232.256 2.475.533 4.843.832 7.104.064.939-.192 1.419-.768 1.44a.688.688 0 01-.384-.128 2.04 2.04 0 01-.352-.384 9.43 9.43 0 01-.32-.48 1.636 1.636 0 01-.16-.448c-.17-1.088-.33-2.24-.48-3.456a212.34 212.34 0 01-.416-3.648 269.893 269.893 0 01-.288-3.616 64.009 64.009 0 01-.16-3.232c.042-.512.117-.938.224-1.28.107-.362.33-.533.672-.512.362.022.618.17.768.448.17.256.266.576.288.96zM103.978 12.176c-.299.043-.651.01-1.056-.096-.384-.106-.651-.373-.8-.8a1.187 1.187 0 01-.032-.608c.043-.213.267-.362.672-.448.384-.085.789-.16 1.216-.224.448-.085.896-.16 1.344-.224l-1.184-3.584c-.363-1.365-.405-2.538-.128-3.52.277-.981 1.067-1.685 2.368-2.112a4.014 4.014 0 011.568-.192 4.054 4.054 0 011.504.416 4.91 4.91 0 011.28.928c.384.384.693.832.928 1.344a1.9 1.9 0 01.128.64c.021.17-.043.33-.192.48-.213.214-.448.31-.704.288-.256-.042-.427-.117-.512-.224a9.484 9.484 0 00-.64-.704 3.293 3.293 0 00-.704-.64 2.256 2.256 0 00-.768-.416 1.796 1.796 0 00-.896-.096c-.149.022-.331.096-.544.224-.192.128-.363.33-.512.608-.149.256-.245.598-.288 1.024-.021.427.053.96.224 1.6a67.191 67.191 0 001.152 3.68 18.437 18.437 0 012.816-.096c.469.043.907.128 1.312.256s.736.32.992.576c.064.214.053.395-.032.544a1.233 1.233 0 01-.384.352 1.81 1.81 0 01-.544.192 5.44 5.44 0 01-.576.096c-.427.043-.875.096-1.344.16-.469.043-.96.086-1.472.128.341.96.651 1.878.928 2.752.299.854.533 1.568.704 2.144.085.32.096.662.032 1.024a8.42 8.42 0 01-.256 1.056c-.171.49-.384.886-.64 1.184-.256.299-.533.395-.832.288-.235-.106-.384-.245-.448-.416-.064-.17-.075-.405-.032-.704.043-.341.064-.682.064-1.024 0-.341-.021-.65-.064-.928a3.57 3.57 0 00-.128-.768 9.786 9.786 0 00-.096-.48l-1.344-3.904-1.024.128c-.341.022-.693.054-1.056.096zM121.837 10.48c-.832.49-1.728.875-2.688 1.152-.96.256-1.995.384-3.104.384.043.747.256 1.344.64 1.792.384.427.864.683 1.44.768.341.043.683.032 1.024-.032.363-.064.693-.16.992-.288.32-.15.608-.31.864-.48.256-.17.48-.341.672-.512.192-.17.395-.277.608-.32.213-.064.373-.074.48-.032.299.107.405.427.32.96a5.044 5.044 0 01-1.472 1.76c-.64.47-1.355.768-2.144.896a4.747 4.747 0 01-2.112-.096 4.415 4.415 0 01-1.952-1.12 4.928 4.928 0 01-1.12-1.728 7.537 7.537 0 01-.48-2.048 5.039 5.039 0 01.16-1.888c.192-.597.48-1.12.864-1.568.384-.47.864-.853 1.44-1.152.576-.298 1.248-.47 2.016-.512.917-.064 1.749.107 2.496.512.747.406 1.269.97 1.568 1.696.171.406.213.758.128 1.056-.064.299-.277.566-.64.8zm-3.68-2.176a3.789 3.789 0 00-.704.224 3.167 3.167 0 00-.672.416 3.29 3.29 0 00-.544.544 1.237 1.237 0 00-.256.672 8.02 8.02 0 001.184-.096c.448-.064.875-.138 1.28-.224.427-.106.811-.224 1.152-.352.363-.128.661-.266.896-.416-.171-.405-.491-.65-.96-.736a3.317 3.317 0 00-1.376-.032zM132.672 6.16c.085.598.149 1.238.192 1.92.064.662.106 1.334.128 2.016.042.683.064 1.344.064 1.984 0 .64-.011 1.216-.032 1.728.682.47 1.088.886 1.216 1.248.149.363.17.683.064.96-.128.384-.363.587-.704.608-.32 0-.694-.117-1.12-.352-.299.214-.64.448-1.024.704-.384.235-.79.47-1.216.704-.427.214-.854.406-1.28.576-.427.17-.822.288-1.184.352-.683.107-1.302-.021-1.856-.384-.534-.362-.896-.906-1.088-1.632a3.96 3.96 0 01-.096-1.504 4.143 4.143 0 01.48-1.504c.256-.49.597-.928 1.024-1.312.448-.384.97-.682 1.568-.896a2.72 2.72 0 01.608-.16c.277-.042.554-.053.832-.032.298 0 .597.054.896.16.298.107.576.288.832.544 0-.362-.011-.757-.032-1.184 0-.448-.011-.896-.032-1.344a20.991 20.991 0 00-.096-1.248 10.98 10.98 0 00-.096-1.024c-.043-.32-.171-.512-.384-.576-.192-.085-.438-.074-.736.032-.512.17-1.11.502-1.792.992a23.08 23.08 0 00-1.952 1.568.817.817 0 01-.672.256.957.957 0 01-.608-.288.93.93 0 01-.288-.576c-.022-.234.064-.48.256-.736.362-.384.768-.778 1.216-1.184.448-.405.917-.768 1.408-1.088.49-.341.992-.618 1.504-.832a4.456 4.456 0 011.536-.352c.746-.021 1.322.15 1.728.512.405.342.65.79.736 1.344zm-3.712 6.88c-.278.064-.576.203-.896.416a3.812 3.812 0 00-.832.736 3.027 3.027 0 00-.544.96 1.673 1.673 0 000 1.024.483.483 0 00.256.288.735.735 0 00.48.032c.512-.106 1.088-.31 1.728-.608.661-.32 1.184-.661 1.568-1.024 0-.128-.064-.288-.192-.48a4.097 4.097 0 00-.448-.608 2.787 2.787 0 00-.576-.544c-.192-.15-.374-.213-.544-.192zM142.796 9.424c.405-.021.81.075 1.216.288.405.214.608.544.608.992-.043.363-.246.598-.608.704a3.606 3.606 0 01-.832.128c-.427 0-.886.01-1.376.032-.491.022-.992.054-1.504.096-.043.704-.086 1.366-.128 1.984-.022.619-.043 1.174-.064 1.664-.022.47-.032.854-.032 1.152 0 .299.01.459.032.48a9.5 9.5 0 001.504-.416 38.153 38.153 0 001.632-.672 57.758 57.758 0 001.6-.768c.533-.277 1.034-.533 1.504-.768.213-.106.405-.138.576-.096.192.043.309.139.352.288.042.235.01.523-.096.864-.107.342-.299.65-.576.928-.32.256-.747.555-1.28.896-.512.32-1.067.63-1.664.928-.598.299-1.206.566-1.824.8-.598.214-1.131.342-1.6.384-.704.064-1.238-.128-1.6-.576-.363-.448-.566-1.013-.608-1.696a27.43 27.43 0 01-.032-2.368c.042-.896.085-1.845.128-2.848l-1.184.128c-.363.022-.715.054-1.056.096-.278 0-.587-.064-.928-.192-.32-.128-.48-.373-.48-.736 0-.128.053-.298.16-.512.106-.213.341-.373.704-.48.874-.15 1.845-.277 2.912-.384.064-1.002.138-1.973.224-2.912.085-.938.16-1.792.224-2.56.021-.256.096-.48.224-.672.128-.192.266-.288.416-.288.362-.021.704.075 1.024.288.341.192.512.416.512.672a97.853 97.853 0 00-.256 2.464c-.064.918-.128 1.856-.192 2.816.426-.042.832-.064 1.216-.064.405-.021.789-.042 1.152-.064zM150.706 8.528a50.786 50.786 0 00-.384 1.92 23.417 23.417 0 00-.288 1.984c-.042.64-.042 1.216 0 1.728.064.512.203.875.416 1.088.363.064.779-.085 1.248-.448a8.91 8.91 0 001.376-1.44 13.85 13.85 0 001.216-1.856c.363-.682.619-1.28.768-1.792.086-.256.16-.522.224-.8a3.83 3.83 0 00.096-.864c0-.17.107-.33.32-.48.235-.17.427-.266.576-.288a.544.544 0 01.352.064c.15.064.278.16.384.288.128.107.235.246.32.416.107.15.16.31.16.48.043.64.107 1.344.192 2.112.086.768.182 1.536.288 2.304.128.768.256 1.515.384 2.24.128.726.256 1.376.384 1.952.064.235 0 .502-.192.8-.192.299-.405.48-.64.544a1.02 1.02 0 01-.608-.064c-.192-.085-.341-.256-.448-.512a12.13 12.13 0 01-.32-1.088c-.085-.448-.17-.906-.256-1.376a72.55 72.55 0 00-.192-1.376 16.932 16.932 0 01-.128-1.12c-.32.576-.704 1.163-1.152 1.76-.426.576-.896 1.11-1.408 1.6-.49.47-1.013.843-1.568 1.12a3.007 3.007 0 01-1.664.288c-.853-.106-1.504-.906-1.952-2.4a7.235 7.235 0 01-.256-1.984c.022-.725.075-1.44.16-2.144.107-.725.224-1.408.352-2.048.15-.64.278-1.162.384-1.568a.952.952 0 01.256-.448c.128-.15.278-.202.448-.16.32.064.608.256.864.576.278.32.374.65.288.992zM170.007 6.96c-.384.214-.789.438-1.216.672-.405.235-.821.512-1.248.832-.405.299-.8.662-1.184 1.088a7.128 7.128 0 00-.992 1.472 8.512 8.512 0 00-.864 2.496 19.97 19.97 0 00-.288 2.464c0 .384-.096.779-.288 1.184-.17.384-.416.576-.736.576-.405 0-.736-.202-.992-.608a4.68 4.68 0 01-.48-1.216 59.913 59.913 0 01-.896-4.48 112.869 112.869 0 01-.608-4.448c0-.298.086-.49.256-.576a1.27 1.27 0 01.64-.096c.256.022.502.086.736.192.235.107.374.278.416.512.086.79.192 1.622.32 2.496.128.854.256 1.59.384 2.208a5.63 5.63 0 01.704-2.112 8.541 8.541 0 011.408-1.856 8.898 8.898 0 011.92-1.408 7.378 7.378 0 012.208-.768c.32-.042.587-.042.8 0 .214.043.363.118.448.224.086.107.096.278.032.512-.042.235-.202.448-.48.64zM179.043 10.48c-.832.49-1.728.875-2.688 1.152-.96.256-1.994.384-3.104.384.043.747.256 1.344.64 1.792.384.427.864.683 1.44.768.342.043.683.032 1.024-.032a4.48 4.48 0 00.992-.288c.32-.15.608-.31.864-.48.256-.17.48-.341.672-.512.192-.17.395-.277.608-.32.214-.064.374-.074.48-.032.299.107.406.427.32.96a5.044 5.044 0 01-1.472 1.76c-.64.47-1.354.768-2.144.896a4.748 4.748 0 01-2.112-.096 4.415 4.415 0 01-1.952-1.12 4.942 4.942 0 01-1.12-1.728 7.537 7.537 0 01-.48-2.048 5.06 5.06 0 01.16-1.888c.192-.597.48-1.12.864-1.568.384-.47.864-.853 1.44-1.152.576-.298 1.248-.47 2.016-.512.918-.064 1.75.107 2.496.512.747.406 1.27.97 1.568 1.696.171.406.214.758.128 1.056-.064.299-.277.566-.64.8zm-3.68-2.176a3.789 3.789 0 00-.704.224 3.217 3.217 0 00-.672.416 3.29 3.29 0 00-.544.544 1.245 1.245 0 00-.256.672 8.01 8.01 0 001.184-.096c.448-.064.875-.138 1.28-.224.427-.106.811-.224 1.152-.352a4.4 4.4 0 00.896-.416c-.17-.405-.49-.65-.96-.736a3.317 3.317 0 00-1.376-.032zM187.862 8.432a39.046 39.046 0 00-.128-.672c-.043-.213-.149-.352-.32-.416a2.328 2.328 0 00-1.152-.032 3.913 3.913 0 00-1.12.416 3.3 3.3 0 00-.864.608c-.235.214-.363.406-.384.576-.064.32.021.63.256.928.235.299.576.598 1.024.896.747.448 1.525.907 2.336 1.376.811.47 1.493.95 2.048 1.44.555.49.928 1.035 1.12 1.632.213.576.171 1.238-.128 1.984-.235.576-.672 1.046-1.312 1.408-.64.363-1.344.65-2.112.864-.768.192-1.536.33-2.304.416-.768.064-1.419.096-1.952.096a1.24 1.24 0 01-.48-.128 7.333 7.333 0 01-.512-.352 7.5 7.5 0 01-.416-.384c-.107-.15-.16-.277-.16-.384 0-.384.171-.65.512-.8.341-.15.693-.224 1.056-.224.512 0 1.056-.021 1.632-.064.597-.064 1.163-.15 1.696-.256a8.155 8.155 0 001.44-.48c.427-.192.725-.437.896-.736.149-.256.053-.554-.288-.896-.32-.362-.757-.736-1.312-1.12a19.213 19.213 0 00-1.76-1.12 32.996 32.996 0 01-1.6-.992 4.962 4.962 0 01-1.152-1.056c-.32-.426-.523-.95-.608-1.568a3.25 3.25 0 01.352-1.6c.256-.512.587-.96.992-1.344a5.01 5.01 0 011.44-.96 3.944 3.944 0 011.6-.352c.917.043 1.675.299 2.272.768.597.448.949 1.12 1.056 2.016 0 .299-.053.544-.16.736-.085.192-.245.31-.48.352-.299.043-.544.01-.736-.096a.676.676 0 01-.288-.48z"
            ></path>
          </svg>
        </div>
        <div className="text-center max-w-[800px] mx-auto mb-8">
          <h2 className="mb-3">
            Capture your screen effortlessly,
            <br />
            share it instantly.
          </h2>
          <p className="text-[1.125rem] leading-[1.75rem]">
            Tired of spending ages setting up screen recordings and editing
            videos? We&apos;ve made it super easy. Whether you&apos;re recording
            a tutorial, presentation, or just showing something off, you&apos;ll
            get it done faster without the stress.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto gap-4">
          <div
            className="border-[1px] border-gray-200 rounded-[20px] overflow-hidden"
            style={{
              boxShadow: "0px 2px 8px rgba(18, 22, 31, 0.02)",
            }}
          >
            <div>
              <img
                className="w-full h-auto"
                src="/features/app-view.png"
                alt="App View Illustration"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[1.125rem] leading-[1.75rem] text-gray-500 font-medium">
                A tool that just works.
              </h3>
              <p className="text-[1.125rem] leading-[1.75rem] text-gray-400">
                No more complicated software that slows you down. Our app feels
                natural and smooth from the moment you open it.
              </p>
            </div>
          </div>
          <div
            className="border-[1px] border-gray-200 rounded-[20px] overflow-hidden"
            style={{
              boxShadow: "0px 2px 8px rgba(18, 22, 31, 0.02)",
            }}
          >
            <div>
              <img
                className="w-full h-auto"
                src="/features/record-view.png"
                alt="Record View Illustration"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[1.125rem] leading-[1.75rem] text-gray-500 font-medium">
                Click, record, done.
              </h3>
              <p className="text-[1.125rem] leading-[1.75rem] text-gray-400">
                Recording your screen shouldn&apos;t be rocket science. Just hit
                record, and we&apos;ll take care of the rest.
              </p>
            </div>
          </div>
          <div
            className="border-[1px] border-gray-200 rounded-[20px] overflow-hidden"
            style={{
              boxShadow: "0px 2px 8px rgba(18, 22, 31, 0.02)",
            }}
          >
            <div>
              <img
                className="w-full h-auto"
                src="/features/editor-view.png"
                alt="Editor View Illustration"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[1.125rem] leading-[1.75rem] text-gray-500 font-medium">
                Edit like a pro — no skills required.
              </h3>
              <p className="text-[1.125rem] leading-[1.75rem] text-gray-400">
                Editing doesn&apos;t have to be hard. Our tool makes it a breeze
                to polish your video, so you can focus on what matters — getting
                your message out there.
              </p>
            </div>
          </div>
          <div
            className="border-[1px] border-gray-200 rounded-[20px] overflow-hidden"
            style={{
              boxShadow: "0px 2px 8px rgba(18, 22, 31, 0.02)",
            }}
          >
            <div>
              <img
                className="w-full h-auto"
                src="/features/share-view.png"
                alt="Share View Illustration"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[1.125rem] leading-[1.75rem] text-gray-500 font-medium">
                Instantly share your video with anyone, anywhere.
              </h3>
              <p className="text-[1.125rem] leading-[1.75rem] text-gray-400">
                Hit share, and your video is live. No waiting, no fuss — just
                quick, simple sharing, wherever you need it to go.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper pb-32 md:pb-40">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[84px] h-auto mx-auto"
            fill="none"
            viewBox="0 0 84 25"
          >
            <path
              fill="#8991A3"
              d="M12.283 15.264c-.17.235-.362.395-.576.48a2.027 2.027 0 01-.576.096 1.697 1.697 0 01-.832-.288c-.256-.192-.416-.384-.48-.576a73.92 73.92 0 01-.416-1.216l-.448-1.344c-.128-.47-.266-.917-.416-1.344-.149-.448-.288-.853-.416-1.216a46.406 46.406 0 00-1.216 2.272c-.384.747-.81 1.526-1.28 2.336-.213.32-.458.544-.736.672-.277.107-.512.15-.704.128a1.359 1.359 0 01-.768-.32 3.906 3.906 0 01-.512-.544 9.584 9.584 0 01-.704-1.472 40.314 40.314 0 01-.672-1.92 96.671 96.671 0 01-.544-2.016C.817 8.31.678 7.702.571 7.168a2.752 2.752 0 010-1.024c.086-.32.278-.501.576-.544.363-.021.694.107.992.384.3.256.47.512.512.768.086.427.182.896.288 1.408.128.49.256.992.384 1.504.15.512.288 1.014.416 1.504.15.49.3.928.448 1.312.32-.512.672-1.098 1.056-1.76.406-.682.79-1.333 1.152-1.952.363-.64.694-1.194.992-1.664.3-.47.534-.757.704-.864.128-.085.31-.074.544.032.235.086.406.214.512.384.47.939.854 1.974 1.152 3.104.32 1.11.63 2.144.928 3.104.3-.384.62-.885.96-1.504.342-.64.672-1.312.992-2.016.32-.704.62-1.408.896-2.112a26.38 26.38 0 00.672-1.888c.171-.576.406-.853.704-.832.384.043.715.171.992.384.278.214.384.438.32.672-.469 1.878-1.077 3.606-1.824 5.184a31.225 31.225 0 01-2.656 4.512zM20.679 1.824c0 .512-.01 1.088-.032 1.728v1.984c.021.683.032 1.387.032 2.112.021.726.043 1.419.064 2.08.213-.426.47-.842.768-1.248.299-.426.63-.8.992-1.12.384-.32.779-.576 1.184-.768a3.314 3.314 0 011.376-.288c.533 0 1.003.17 1.408.512.427.342.79.8 1.088 1.376.32.555.587 1.184.8 1.888.213.683.384 1.387.512 2.112.15.704.256 1.387.32 2.048.064.64.117 1.195.16 1.664 0 .342-.085.619-.256.832-.17.214-.373.32-.608.32-.17 0-.384-.106-.64-.32a2.1 2.1 0 01-.512-.832c-.064-.256-.128-.63-.192-1.12a68.774 68.774 0 00-.224-1.568 24.527 24.527 0 00-.32-1.728 8.696 8.696 0 00-.48-1.536c-.17-.469-.384-.832-.64-1.088-.256-.256-.555-.352-.896-.288-.533.107-1.003.48-1.408 1.12-.384.64-.725 1.366-1.024 2.176a24.92 24.92 0 00-.704 2.464c-.17.832-.299 1.504-.384 2.016-.085.384-.203.65-.352.8a.614.614 0 01-.448.192c-.17 0-.33-.085-.48-.256a5.042 5.042 0 01-.384-.608 11.3 11.3 0 01-.288-.768 3.972 3.972 0 01-.16-.704c-.107-1.152-.192-2.25-.256-3.296a160.869 160.869 0 01-.16-3.2 163.526 163.526 0 01-.032-3.264c0-1.13.021-2.336.064-3.616 0-1.066.384-1.546 1.152-1.44.256.043.48.235.672.576.192.32.288.672.288 1.056zM40.938 5.92l.192 3.488a31.82 31.82 0 01.064 3.488c-.043 1.13-.16 2.24-.352 3.328a13.203 13.203 0 01-.896 3.136 11.028 11.028 0 01-1.728 2.752c-.704.854-1.6 1.622-2.688 2.304a1.32 1.32 0 01-.576.192 1.75 1.75 0 01-.576-.032 1.314 1.314 0 01-.512-.16.48.48 0 01-.288-.288c-.064-.192-.032-.405.096-.64.128-.234.341-.48.64-.736.938-.704 1.728-1.45 2.368-2.24.64-.79 1.152-1.642 1.536-2.56.384-.917.629-1.91.736-2.976.128-1.088.128-2.272 0-3.552-.256.32-.555.65-.896.992-.342.342-.704.65-1.088.928-.384.256-.779.48-1.184.672-.406.17-.79.256-1.152.256-.299 0-.598-.064-.896-.192-.299-.128-.598-.373-.896-.736a9.441 9.441 0 01-.928-1.504c-.256-.576-.48-1.13-.672-1.664a28.368 28.368 0 01-.48-1.44 8.927 8.927 0 01-.192-.896 1.458 1.458 0 010-.608c.042-.192.181-.31.416-.352.32-.064.618-.042.896.064.277.107.469.278.576.512.085.235.202.598.352 1.088.149.49.33.982.544 1.472.213.47.437.886.672 1.248.256.363.522.544.8.544.32 0 .693-.16 1.12-.48.448-.32.874-.736 1.28-1.248a7.974 7.974 0 001.024-1.696c.298-.64.448-1.258.448-1.856 0-.128.021-.277.064-.448.042-.17.106-.33.192-.48.085-.17.181-.31.288-.416.128-.128.256-.202.384-.224.341-.042.64.054.896.288.277.214.416.438.416.672zM59.066 7.776a.894.894 0 01-.544.096c-.213-.042-.394-.181-.544-.416-.34-.448-.757-.672-1.248-.672-.448 0-.853.107-1.216.32-.34.192-.65.459-.928.8-.256.32-.469.683-.64 1.088-.17.406-.288.81-.352 1.216-.106.747.022 1.376.384 1.888.363.512.928.768 1.696.768.62.022 1.312-.096 2.08-.352.79-.277 1.526-.63 2.208-1.056a2.7 2.7 0 01.832-.224c.256-.021.47.107.64.384.214.342.16.694-.16 1.056-.32.342-.746.65-1.28.928-.533.299-1.098.566-1.696.8-.576.214-1.162.374-1.76.48a6.306 6.306 0 01-1.792 0 4.22 4.22 0 01-1.632-.608c-.81-.554-1.3-1.344-1.472-2.368-.17-1.024-.096-2.08.224-3.168.128-.405.31-.81.544-1.216.235-.426.512-.81.832-1.152.342-.341.715-.63 1.12-.864a3.668 3.668 0 011.344-.512 4.122 4.122 0 012.272.256c.726.278 1.206.8 1.44 1.568.043.171.043.352 0 .544-.042.17-.16.31-.352.416zM70.66 4.16c.086.598.15 1.238.192 1.92.064.662.107 1.334.128 2.016.043.683.064 1.344.064 1.984 0 .64-.01 1.216-.032 1.728.683.47 1.088.886 1.216 1.248.15.363.17.683.064.96-.128.384-.362.587-.704.608-.32 0-.693-.117-1.12-.352-.299.214-.64.448-1.024.704-.384.235-.79.47-1.216.704-.426.214-.853.406-1.28.576-.426.17-.821.288-1.184.352-.682.107-1.301-.021-1.856-.384-.533-.362-.896-.906-1.088-1.632a3.96 3.96 0 01-.096-1.504 4.143 4.143 0 01.48-1.504c.256-.49.597-.928 1.024-1.312a4.93 4.93 0 011.568-.896 2.73 2.73 0 01.608-.16c.278-.042.555-.053.832-.032.299 0 .597.054.896.16.299.107.576.288.832.544 0-.362-.01-.757-.032-1.184 0-.448-.01-.896-.032-1.344a20.028 20.028 0 00-.096-1.248 10.584 10.584 0 00-.096-1.024c-.043-.32-.17-.512-.384-.576-.192-.085-.437-.074-.736.032-.512.171-1.11.502-1.792.992a23.225 23.225 0 00-1.952 1.568.817.817 0 01-.672.256.96.96 0 01-.608-.288.933.933 0 01-.288-.576c-.021-.234.064-.48.256-.736.363-.384.768-.778 1.216-1.184.448-.405.917-.768 1.408-1.088.49-.341.992-.618 1.504-.832a4.456 4.456 0 011.536-.352c.747-.021 1.323.15 1.728.512.405.342.65.79.736 1.344zm-3.712 6.88c-.277.064-.576.203-.896.416a3.819 3.819 0 00-.832.736 3.032 3.032 0 00-.544.96 1.678 1.678 0 000 1.024.485.485 0 00.256.288c.15.064.31.075.48.032.512-.106 1.088-.31 1.728-.608.662-.32 1.184-.661 1.568-1.024 0-.128-.064-.288-.192-.48a4.055 4.055 0 00-.448-.608 2.772 2.772 0 00-.576-.544c-.192-.15-.373-.213-.544-.192zM78.96 19.488a1.025 1.025 0 01-.32.64c-.192.214-.405.31-.64.288-.362-.021-.64-.16-.832-.416-.192-.256-.288-.47-.288-.64 0-.81-.021-1.653-.064-2.528-.043-.896-.096-1.813-.16-2.752a1.534 1.534 0 01-.768-.064.895.895 0 01-.448-.48c-.15-.362-.128-.682.064-.96.192-.277.501-.544.928-.8a638.62 638.62 0 00-.32-2.336 63.75 63.75 0 00-.288-2.24.646.646 0 01.032-.352c.043-.106.096-.202.16-.288.064-.106.181-.202.352-.288.278-.106.587-.021.928.256.363.278.608.63.736 1.056.064.406.128.875.192 1.408.085.512.16 1.078.224 1.696.448-.277.864-.576 1.248-.896a5.81 5.81 0 001.024-1.024 4.11 4.11 0 00.672-1.12c.15-.405.192-.821.128-1.248a1.594 1.594 0 00-.48-.96c-.277-.298-.715-.458-1.312-.48a6.755 6.755 0 00-1.6.128c-.512.107-1.024.246-1.536.416-.49.171-.981.374-1.472.608-.47.235-.928.47-1.376.704a1.56 1.56 0 01-.896.224c-.277-.042-.459-.149-.544-.32-.192-.426-.181-.81.032-1.152.235-.341.587-.661 1.056-.96.406-.234.886-.469 1.44-.704a12.76 12.76 0 011.792-.64c.64-.192 1.28-.32 1.92-.384a6.189 6.189 0 011.888.032c.597.086 1.13.288 1.6.608.49.299.886.747 1.184 1.344.363.982.459 1.888.288 2.72-.15.811-.47 1.558-.96 2.24a8.855 8.855 0 01-1.76 1.824 21.398 21.398 0 01-2.08 1.44c.107 1.152.181 2.294.224 3.424.043 1.13.053 2.123.032 2.976z"
            ></path>
          </svg>
        </div>
        <div className="text-center max-w-[800px] mx-auto mb-8">
          <h2 className="mb-3">Crafted for Simplicity</h2>
          <p className="text-[1.125rem] leading-[1.75rem]">
            We believe great tools should make your life easier, not more
            complicated. Cap is crafted to streamline your workflow, so you can
            record, edit, and share without jumping through hoops.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="overflow-hidden rounded-[20px]">
            <img
              className="w-full h-auto max-h-[290px] object-cover"
              src="/features/ease-of-use.png"
              alt="Ease of use Illustration"
            />
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              className="w-full h-auto max-h-[290px] object-cover"
              src="/features/privacy-first.png"
              alt="Privacy first Illustration"
            />
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              className="w-full h-auto max-h-[290px] object-cover"
              src="/features/lightweight.png"
              alt="Lightweight Illustration"
            />
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              className="w-full h-auto max-h-[290px] object-cover"
              src="/features/open-source.png"
              alt="Open source Illustration"
            />
          </div>
        </div>
      </div>
      <div
        className="wrapper custom-bg max-w-[1000px] mx-auto rounded-[20px] overflow-hidden mb-32 md:mb-40 relative flex flex-col justify-center p-8"
        style={{ minHeight: "264px" }}
      >
        <div
          id="cloud-4"
          className="absolute top-0 -right-20 opacity-50 z-0 pointer-events-none"
        >
          <img
            className="max-w-[40vw] h-auto"
            src="/illustrations/cloud-1.png"
            alt="Footer Cloud One"
          />
        </div>
        <div
          id="cloud-5"
          className="absolute bottom-0 left-0 opacity-50 z-0 pointer-events-none"
        >
          <img
            className="max-w-[40vw] h-auto"
            src="/illustrations/cloud-2.png"
            alt="Footer Cloud Two"
          />
        </div>
        <div className="wrapper mx-auto h-full flex flex-col justify-center items-center relative z-10">
          <div className="text-center max-w-[800px] mx-auto mb-8">
            <h2 className="text-white mb-3">Ready to get started?</h2>
            <p className="text-[1.125rem] leading-[1.75rem] text-white">
              Join thousands of users who are already enjoying Cap's beautiful,
              shareable screen recordings. Start creating stunning videos today!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Button
              variant="white"
              href="/pricing"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              href="/download"
              size="lg"
              className="w-full sm:w-auto"
            >
              Download App
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="pt-6 pb-16 md:pt-16 md:pb-32">
        <div className="wrapper">
          <div
            className="senja-embed"
            data-id="b40c5cc6-3d88-468e-a763-c7e515c3f000"
            data-lazyload="false"
            data-mode="shadow"
          />
          <script
            async
            src="https://widget.senja.io/widget/b40c5cc6-3d88-468e-a763-c7e515c3f000/platform.js"
            type="text/javascript"
          />
        </div>
      </div> */}
    </ParallaxProvider>
  );
};
