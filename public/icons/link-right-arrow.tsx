const LinkRightArrow = ({ color = '#375DFB', height = 20, width = 20 }: { color?: string; height?: number; width?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path d="M13.0576 8.02011L6.49427 14.5834L5.41602 13.5052L11.9786 6.94186H6.19458V5.41675H14.5827V13.8048H13.0576V8.02011Z" fill={color} />
  </svg>
);

export default LinkRightArrow;
