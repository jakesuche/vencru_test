function CheckMark({color}:{color?:string}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="7"
        fill="none"
        viewBox="0 0 10 7"
      >
        <path
          stroke={color || '#fff'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M8.333 1.5L3.75 6.083 1.667 4"
        ></path>
      </svg>
    );
  }
  
  export default CheckMark;