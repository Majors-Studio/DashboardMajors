interface HamburguerIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    }

function HamburguerIcon({size, ...props}: HamburguerIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12 21h40M12 33h40M12 45h40"
      />
    </svg>
  );
}

export default HamburguerIcon;