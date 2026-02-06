import React from "react";

type ClickHandler = (ev: React.MouseEvent<HTMLElement>) => void;

export type ScrollIntoViewProps = {
  selector: string;
  children: React.ReactNode;
  smooth?: boolean;
  style?: React.CSSProperties;
  alignToTop?: boolean;
  className?: string;
  scrollOptions?: ScrollIntoViewOptions;
  onClick?: ClickHandler;
};

const validScrollOptions = (
  scrollOptions: ScrollIntoViewOptions,
): ScrollOptions => {
  if (typeof scrollOptions !== "object") {
    return {};
  }

  return Object.entries(scrollOptions).reduce<ScrollIntoViewOptions>(
    (acc, [key, val]) => {
      switch (key) {
        case "behavior":
          if (val === "auto" || val === "smooth") {
            acc[key] = val;
          }
          break;

        case "block":
        case "inline":
          if (
            val === "start" ||
            val === "center" ||
            val === "end" ||
            val === "nearest"
          ) {
            acc[key] = val;
          }
          break;

        default:
      }
      return acc;
    },
    {},
  );
};

export const ScrollInto = ({
  children,
  selector,
  smooth = true,
  style = {},
  alignToTop = false,
  className = "",
  onClick,
  scrollOptions = {},
}: ScrollIntoViewProps) => {
  const scrollIntoView = () => {
    const behavior = smooth ? "smooth" : "auto";
    const options: ScrollIntoViewOptions = {
      behavior,
      // provided scrollOptions are valid - we can use them
      ...validScrollOptions(scrollOptions),
    };

    // Scroll to top
    if (alignToTop) {
      options.block = "start";
      options.inline = "nearest";
    }

    document.querySelector(selector)?.scrollIntoView(options);
  };

  /**
   * Click event handler
   * When provided (optional) `onClick` property which is a function it will call it and wait 16ms (single frame) to use
   * `scrollIntoView` as e.g. MaterialUI Menu changes `body` element style to `overflow: hidden` blocking
   * `scrollIntoView`
   */
  const handleClick: ClickHandler = (event) => {
    if (typeof onClick === "function") {
      onClick(event);
      setTimeout(scrollIntoView, 1e3 / 60);
      return;
    }
    scrollIntoView();
  };

  return (
    <div style={style} className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ScrollInto;
