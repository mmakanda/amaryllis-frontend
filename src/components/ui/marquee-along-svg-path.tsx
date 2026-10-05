"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import type { RefObject } from "react";
import type { SpringOptions } from "framer-motion";

import { cn } from "@/lib/utils";

const wrap = (min: number, max: number, value: number): number => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

type PreserveAspectRatioAlign =
  | "none"
  | "xMinYMin"
  | "xMidYMin"
  | "xMaxYMin"
  | "xMinYMid"
  | "xMidYMid"
  | "xMaxYMid"
  | "xMinYMax"
  | "xMidYMax"
  | "xMaxYMax";

interface CSSVariableInterpolation {
  property: string;
  from: number | string;
  to: number | string;
}

type PreserveAspectRatioMeetOrSlice = "meet" | "slice";

type PreserveAspectRatio =
  | PreserveAspectRatioAlign
  | `${Exclude<
      PreserveAspectRatioAlign,
      "none"
    >} ${PreserveAspectRatioMeetOrSlice}`;

interface CSSVariableLayerProps {
  property: string;
  from: number | string;
  to: number | string;
  currentOffsetDistance: ReturnType<typeof useMotionValue<number>>;
  children: React.ReactNode;
}

function CSSVariableLayer({
  property,
  from,
  to,
  currentOffsetDistance,
  children,
}: CSSVariableLayerProps) {
  const value = useTransform(
    currentOffsetDistance,
    [0, 100],
    [from, to]
  );

  return (
    <motion.div
      style={{
        [property]: value,
      } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}

interface CSSVariableLayersProps {
  cssVariableInterpolation: CSSVariableInterpolation[];
  currentOffsetDistance: ReturnType<typeof useMotionValue<number>>;
  children: React.ReactNode;
}

function CSSVariableLayers({
  cssVariableInterpolation,
  currentOffsetDistance,
  children,
}: CSSVariableLayersProps) {
  if (cssVariableInterpolation.length === 0) {
    return <>{children}</>;
  }

  return (
    <>
      {cssVariableInterpolation.reduceRight(
        (content, variable) => (
          <CSSVariableLayer
            key={variable.property}
            property={variable.property}
            from={variable.from}
            to={variable.to}
            currentOffsetDistance={currentOffsetDistance}
          >
            {content}
          </CSSVariableLayer>
        ),
        children
      )}
    </>
  );
}

interface MarqueeItemProps {
  child: React.ReactNode;
  itemIndex: number;
  itemsLength: number;
  repeatIndex: number;
  itemKey: string;
  baseOffset: ReturnType<typeof useMotionValue<number>>;
  path: string;
  easing?: (value: number) => number;
  draggable: boolean;
  grabCursor: boolean;
  enableRollingZIndex: boolean;
  calculateZIndex: (offsetDistance: number) => number | undefined;
  cssVariableInterpolation: CSSVariableInterpolation[];
  itemRefs: React.MutableRefObject<Map<string, HTMLDivElement>>;
  isHovered: React.MutableRefObject<boolean>;
}

function MarqueeItem({
  child,
  itemIndex,
  itemsLength,
  repeatIndex,
  itemKey,
  baseOffset,
  path,
  easing,
  draggable,
  grabCursor,
  enableRollingZIndex,
  calculateZIndex,
  cssVariableInterpolation,
  itemRefs,
  isHovered,
}: MarqueeItemProps) {
  const currentOffsetDistance = useMotionValue(0);

  const itemOffset = useTransform(baseOffset, (value) => {
    const position = (itemIndex * 100) / itemsLength;
    const wrappedValue = wrap(0, 100, value + position);

    return `${
      easing ? easing(wrappedValue / 100) * 100 : wrappedValue
    }%`;
  });

  const zIndex = useTransform(currentOffsetDistance, (value) =>
    calculateZIndex(value)
  );

  useEffect(() => {
    const unsubscribe = itemOffset.on("change", (value: string) => {
      const match = value.match(/^([\d.]+)%$/);

      if (match?.[1]) {
        currentOffsetDistance.set(parseFloat(match[1]));
      }
    });

    return unsubscribe;
  }, [itemOffset, currentOffsetDistance]);

  return (
    <motion.div
      key={itemKey}
      ref={(element) => {
        if (element) {
          itemRefs.current.set(itemKey, element);
        } else {
          itemRefs.current.delete(itemKey);
        }
      }}
      className={cn(
        "absolute left-0 top-0",
        draggable && grabCursor && "cursor-grab"
      )}
      style={
        {
          offsetPath: `path('${path}')`,
          offsetDistance: itemOffset,
          zIndex: enableRollingZIndex ? zIndex : undefined,
          willChange: "offset-distance",
          backfaceVisibility: "hidden",
        } as unknown as React.CSSProperties
      }
      aria-hidden={repeatIndex > 0}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
    >
      <CSSVariableLayers
        cssVariableInterpolation={cssVariableInterpolation}
        currentOffsetDistance={currentOffsetDistance}
      >
        {child}
      </CSSVariableLayers>
    </motion.div>
  );
}

interface MarqueeAlongSvgPathProps {
  children: React.ReactNode;
  className?: string;
  path: string;
  pathId?: string;
  preserveAspectRatio?: PreserveAspectRatio;
  showPath?: boolean;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  baseVelocity?: number;
  direction?: "normal" | "reverse";
  easing?: (value: number) => number;
  slowdownOnHover?: boolean;
  slowDownFactor?: number;
  slowDownSpringConfig?: SpringOptions;
  useScrollVelocity?: boolean;
  scrollAwareDirection?: boolean;
  scrollSpringConfig?: SpringOptions;
  scrollContainer?: RefObject<HTMLElement | null> | HTMLElement | null;
  draggable?: boolean;
  grabCursor?: boolean;
  enableRollingZIndex?: boolean;
  calculateZIndex?: (offsetDistance: number) => number | undefined;
  cssVariableInterpolation?: CSSVariableInterpolation[];
}

export default function MarqueeAlongSvgPath({
  children,
  className,
  path,
  pathId,
  preserveAspectRatio = "xMidYMid meet",
  showPath = false,
  width = "100%",
  height = "100%",
  viewBox = "0 0 1000 1000",
  baseVelocity = 1,
  direction = "normal",
  easing,
  slowdownOnHover = false,
  slowDownFactor = 0.1,
  slowDownSpringConfig = {
    stiffness: 200,
    damping: 20,
  },
  useScrollVelocity = false,
  scrollAwareDirection = false,
  scrollSpringConfig = {
    stiffness: 200,
    damping: 20,
  },
  scrollContainer = null,
  draggable = false,
  grabCursor = true,
  enableRollingZIndex = false,
  calculateZIndex = () => undefined,
  cssVariableInterpolation = [],
}: MarqueeAlongSvgPathProps) {
  const baseOffset = useMotionValue(0);
  const velocity = useMotionValue(baseVelocity);

  const scrollVelocity = useScroll({
    container:
      scrollContainer && typeof scrollContainer !== "string"
        ? {
            current: scrollContainer as HTMLElement,
          }
        : undefined,
  });

  const scrollVelocityValue = useVelocity(
    scrollVelocity.scrollYProgress
  );

  const smoothScrollVelocity = useSpring(
    scrollVelocityValue,
    scrollSpringConfig
  );
  const baseVelocityValue = useMotionValue(baseVelocity);

  const hoverVelocity = useSpring(
  slowdownOnHover ? velocity : baseVelocityValue,
  slowDownSpringConfig
  );
  

  const isHovered = useRef(false);

  const itemRefs = useRef(
    new Map<string, HTMLDivElement>()
  );

  const directionMultiplier =
    direction === "reverse" ? -1 : 1;

  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  const itemsLength = childrenArray.length;

  const repeats = useMemo(() => {
    if (itemsLength === 0) {
      return 1;
    }

    return Math.max(1, Math.ceil(100 / itemsLength));
  }, [itemsLength]);

  const effectiveVelocity = useTransform(
    [hoverVelocity, smoothScrollVelocity],
    ([hoverValue, scrollValue]) => {
      let result = Number(hoverValue);

      if (useScrollVelocity) {
        result += Number(scrollValue);
      }

      if (scrollAwareDirection) {
        result *=
          Number(scrollValue) < 0
            ? -1
            : Number(scrollValue) > 0
              ? 1
              : 1;
      }

      return result * directionMultiplier;
    }
  );

  useAnimationFrame((_, delta) => {
    const currentVelocity = effectiveVelocity.get();

    if (isHovered.current && slowdownOnHover) {
      velocity.set(baseVelocity * slowDownFactor);
    } else {
      velocity.set(baseVelocity);
    }

    baseOffset.set(
      wrap(
        0,
        100,
        baseOffset.get() +
          (currentVelocity * delta) / 1000
      )
    );
  });

  const renderedItems = useMemo(() => {
    return Array.from(
      { length: repeats },
      (_, repeatIndex) =>
        childrenArray.map((child, itemIndex) => {
          const itemKey = `${repeatIndex}-${itemIndex}`;

          return (
            <MarqueeItem
              key={itemKey}
              child={child}
              itemIndex={itemIndex}
              itemsLength={itemsLength}
              repeatIndex={repeatIndex}
              itemKey={itemKey}
              baseOffset={baseOffset}
              path={path}
              easing={easing}
              draggable={draggable}
              grabCursor={grabCursor}
              enableRollingZIndex={enableRollingZIndex}
              calculateZIndex={calculateZIndex}
              cssVariableInterpolation={
                cssVariableInterpolation
              }
              itemRefs={itemRefs}
              isHovered={isHovered}
            />
          );
        })
    );
  }, [
    repeats,
    childrenArray,
    itemsLength,
    baseOffset,
    path,
    easing,
    draggable,
    grabCursor,
    enableRollingZIndex,
    calculateZIndex,
    cssVariableInterpolation,
  ]);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        className
      )}
      style={{
        width,
        height,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {pathId && <path id={pathId} d={path} />}
        </defs>

        {showPath && (
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.2"
          />
        )}
      </svg>

      <div className="absolute inset-0">
        {renderedItems}
      </div>
    </div>
  );
}
