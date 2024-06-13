import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import NoSSRWrapper from "../NoSSRWrapper";
// Local Data
import data from "../../data/portfolio-yunus.json";

const Header = ({
  handleWorkScroll,
  handleAboutScroll,
  handleContactScroll,
  handleMotivationScroll,
  isBlog,
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const setHeaderTheme = () => {
    console.log("1: " + theme);
    let result = theme === "light" ? "bg-white" : "bg-black";
    console.log("2: " + result);

    return result;
  };

  return (
    <NoSSRWrapper>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {handleAboutScroll && name + "."}
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  {/* <Button
                    onClick={() => {
                      window.location.href = "/Files/YunusThaiPortfolio.pdf";
                    }}
                  >
                    PDF Version
                  </Button> */}
                  {handleAboutScroll && <Button onClick={handleAboutScroll}>About</Button>}
                  {handleWorkScroll && <Button onClick={handleWorkScroll}>Projects</Button>}
                  {handleMotivationScroll && <Button onClick={handleMotivationScroll}>Motivation</Button>}
                  {handleContactScroll && <Button onClick={handleContactScroll}>Contact</Button>}
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button onClick={() => "mailto:omitted@gmail.com"}>
                      Resume
                    </Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  {/* <Button
                    onClick={() => "mailto:omitted@gmail.com"}
                  >
                    Contact
                  </Button> */}
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${setHeaderTheme()} dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className={`font-medium ${data.showCursor && "cursor-none"} mob:p-2 laptop:p-0`}
        >
          {handleAboutScroll && name + "."}
        </h1>
        {!isBlog ? (
          <div className="flex">
            {/* {handleAboutScroll && <Button
              onClick={() => {
                window.location.href = "/Files/YunusThaiPortfolio.pdf";
              }}
            >
              PDF Version
            </Button>} */}
            {handleAboutScroll && <Button onClick={handleAboutScroll}>About</Button>}
            {handleWorkScroll && <Button onClick={handleWorkScroll}>Projects</Button>}
            {handleMotivationScroll && <Button onClick={handleMotivationScroll}>Motivation</Button>}
            {handleContactScroll && <Button onClick={handleContactScroll}>Contact</Button>}
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            {/* <Button onClick={() => "mailto:omitted@gmail.com"}>
              Contact
            </Button> */}
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            {/* <Button onClick={() => "mailto:omitted@gmail.com"}>
              Contact
            </Button> */}

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </NoSSRWrapper>
  );
};

export default Header;
