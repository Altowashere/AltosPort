import { useState, useEffect } from "react";
import FadeIn from "../animations/fadein";
import Navbar from "../layout/Navbar";

const WipBanner = () => {
  // useState(true) means the modal is visible by default when the page loads.
  // If we used useState(false), the modal would start hidden and never show
  // unless something triggered setVisible(true).
  // `visible` is the current value, `setVisible` is the function to change it.
  const [visible, setVisible] = useState(true);

  // useEffect runs AFTER the component renders, whenever `visible` changes.
  // When visible is true: we add "overflow-hidden" to the <body> element,
  // which prevents the entire page from scrolling behind the modal.
  // When visible is false: we remove it, restoring normal scroll behavior.
  // The return function is a "cleanup" — it runs when the component unmounts
  // from the DOM entirely, guaranteeing overflow-hidden is always removed
  // even if the component disappears in an unexpected way.
  useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [visible]); // the [visible] dependency array means this effect only
  // re-runs when `visible` changes, not on every render

  // Early return — if visible is false, we render absolutely nothing.
  // This is how React conditionally removes a component from the DOM entirely.
  // When the user clicks "Close", setVisible(false) is called, visible becomes
  // false, and the next render hits this line and returns null, making the
  // modal disappear.
  if (!visible) return null;
  if (!visible) {
    Navbar: setVisible(false)
  }

  return (
    // React requires a single root element. Since we need two sibling divs
    // (the backdrop and the modal), we wrap them in a Fragment (<>...</>).
    // A Fragment renders no actual HTML element — it's just a grouping wrapper.
    <>
      {/* BACKDROP
          This is the dark blurred overlay behind the modal.
          - fixed inset-0: positions it to cover the ENTIRE screen (top/right/bottom/left all 0)
          - z-40: stacking order — sits below the modal (z-50) but above all page content
          - bg-black/60: black background at 60% opacity, dimming the page behind it
          - backdrop-blur-sm: blurs everything behind this element (the page content)
          - onClick: clicking anywhere on the backdrop calls setVisible(false),
            which closes the modal — same behavior as clicking outside a dialog */}
      <div
        className="fixed inset-0 z-[1010] bg-black/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* MODAL POSITIONER
          This div doesn't have a visible appearance — it's purely for positioning.
          - fixed inset-0: also covers the full screen, layered on top of the backdrop
          - z-50: higher z-index than the backdrop (z-40), so it renders on top
          - flex items-center justify-center: centers its child (the modal card)
            both vertically and horizontally on the screen
          - px-4: horizontal padding so the modal doesn't touch screen edges on mobile */}
      <div className="fixed inset-0 z-[1020] flex items-center justify-center px-4">
        {/* FADEIN ANIMATION WRAPPER
            FadeIn is a custom component that uses IntersectionObserver to trigger
            a CSS fade animation when the element enters the viewport.
            - delay={120}: waits 120ms before starting the fade, giving the backdrop
              time to appear first so the modal feels layered and intentional */}
        <FadeIn delay={120}>
          {/* MODAL CARD
              The actual visible box the user sees.
              - relative: needed so any absolutely positioned children (like a close
                button) are positioned relative to this card, not the whole page
              - bg-[#111111]: very dark gray background, slightly lighter than pure black
              - border border-white/10: a subtle white border at 10% opacity for depth
              - rounded-3xl: heavily rounded corners (24px) for a soft, modern look
              - shadow-2xl: large drop shadow to lift the card off the backdrop
              - max-w-sm: caps the width at ~384px so it doesn't stretch too wide
              - px-7 py-7: padding of 28px on all sides for internal breathing room */}
          <div className="relative bg-[#111111] border border-white/10 rounded-3xl shadow-2xl max-w-sm px-7 py-7">
            {/* ICON + TITLE ROW
                A flex row that holds the emoji and the heading side by side.
                - flex items-center: aligns the emoji and text vertically centered
                - justify-center: centers the whole row horizontally in the card
                - gap-2: 8px space between the emoji and the text
                - mb-4: 16px margin below this row, separating it from the body text */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {/* The construction emoji acting as a visual icon */}
              <span className="text-2xl">🚧</span>

              {/* Modal title
                  - text-white: full white for high contrast and visual hierarchy
                  - text-base: 16px font size
                  - font-semibold: 600 weight, bold enough to be a heading without being heavy
                  - tracking-tight: slightly tightens letter spacing for a cleaner look */}
              <h2 className="text-white text-base font-semibold tracking-tight">
                Work in Progress
              </h2>
            </div>

            {/* BODY TEXT
                The descriptive message below the title.
                - text-white/50: white at 50% opacity — intentionally dimmer than the title
                  to create visual hierarchy (title is most important, body is secondary)
                - text-sm: 14px font size, smaller than the title
                - leading-relaxed: increases line height for easier reading of multi-line text
                - mb-6: 24px margin below, creating space before the button
                - text-center: centers the text to match the centered title above */}
            <p className="text-white/50 text-sm leading-relaxed mb-6 text-center">
              This site is actively being built. All text, values, and content
              will be updated after website framework is finished.
            </p>

            {/* DISMISS BUTTON
                Clicking this calls setVisible(false), which triggers the early return
                at the top of the component and removes the entire modal from the DOM.
                This also indirectly triggers the useEffect cleanup, which removes
                overflow-hidden from <body> and restores normal page scrolling.
                - w-full: stretches the button to the full width of the card
                - bg-[#C9A84C]: the gold accent color used throughout the site
                - hover:bg-[#d4b05a]: slightly lighter gold on hover for feedback
                - hover:scale-101: very subtle grow on hover (1% scale) for interactivity
                - transition-all duration-250: smoothly animates ALL property changes
                  (color, scale) over 250ms
                - text-black: black text on the gold background for contrast
                - text-sm font-semibold: readable, slightly bold button label
                - py-3: 12px vertical padding for a comfortable click target
                - rounded-xl: rounded corners (12px) slightly less than the card's rounded-3xl */}
            <button
              onClick={() => setVisible(false)}
              className="w-full bg-[#C9A84C] hover:bg-[#d4b05a] transition-all hover:scale-101 duration-250 text-black text-sm font-semibold py-3 rounded-xl"
            >
              Close
            </button>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default WipBanner;
