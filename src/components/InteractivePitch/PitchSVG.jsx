import * as React from "react";

const PitchSVG = ({ width = "66.6%", maxWidth = "800px", height = "auto", onZoneClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg2"
    style={{ 
      width, 
      height,
      maxWidth,
    }}
    viewBox="0 0 4060 2643.867"
  >
    <g id="g8" transform="matrix(1.33333 0 0 -1.33333 0 2643.867)">
      <g
        id="g10"
        fillOpacity="1"
        fillRule="nonzero"
        stroke="none"
        transform="scale(.1)"
      >

      {/* pitch surrounding */}
        <path
          id="pitchSurrounding"
          fill="#5da75d"
          d="M30440 10H10v19809h30430zM1948.52 17083.5v-14338H28501.5v14338z"
        ></path>
        <path
          id="SVGBorder"
          fill="#349134"
          d="M5 19824v-5h30435V10H10v19814zv-5zH0V0h30450v19829H0v-5z"
        ></path>
        <path
          id="playingPitch_BackgroundColour"
          fill="#5da75d"
          d="M1948.52 2745.5h26553v14338h-26553z"
        ></path>


        {/* pitch border */}
          <path
            id="leftSide_deadballLine"
            fill="none"
            stroke="#fff"
            strokeWidth="50"
            d="M1998.52 2795.5H28451.5"
          />
      
          <path
            id="rightHalf_deadballLine"
            fill="none"
            stroke="#fff"
            strokeWidth="50"
            d="M28451.5 2795.5v14238"
          />
      
          <path
            id="Righside_deadballLine"
            fill="none"
            stroke="#fff"
            strokeWidth="50"
            d="M1998.52 17050.5H28451.5"
          />
      
          <path
            id="lefthalf_deadballLine"
            fill="none"
            stroke="#fff"
            strokeWidth="50"
            d="M1998.52 2795.5v14238"
          />

        <path
          id="Halfwayline"
          fill="#fff"
          d="M15097.7 2745.7h-100v14337.8h100z"
        ></path>
        <path
          id="lefthalf_10mline"
          fill="#fff"
          d="M12159.7 2745.7h-100v14337.8h100z"
        ></path>
        <path
          id="righthalf_10mline"
          fill="#fff"
          d="M17837.1 2745.7h-100v14337.8h100z"
        ></path>
        <path
          id="lefthalf_22mline"
          fill="#fff"
          d="M7850.65 2745.7h-100v14337.8h100z"
        ></path>
        <path
          id="leftside_5mline"
          fill="#fff"
          d="M5001.8 3897.2h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm254.2 0h-104.2v60h104.2z"
        ></path>
        <path
          id="righside_5mline"
          fill="#fff"
          d="M5001.8 15899.3h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm350 0h-200v60h200zm254.2 0h-104.2v60h104.2z"
        ></path>
        <path
          id="leftHalf_TryLine"
          fill="#fff"
          d="M4851.8 2745.7h-100v14337.8h100z"
        ></path>
        <path
          id="rightHalf_TryLine"
          fill="#fff"
          d="M25606 2745.7h-100v14337.8h100z"
        ></path>
        <path
          id="rightHalf_22mLine"
          fill="#fff"
          d="M22408.2 2745.7h-100v14337.8h100z"
        ></path>
        <path
          id="leftHalf_RightSide_5m_15mline"
          fill="#fff"
          d="M4801.8 5365.8h1091.9v60H4801.8Z"
        ></path>
        <path
          id="leftHalf_RightSide_22m_15mline"
          fill="#fff"
          d="M7036.91 5365.8H8576.1v60H7036.91Z"
        ></path>
        <path
          id="leftHalf_RightSide_10m_15mline"
          fill="#fff"
          d="M11340.1 5365.8h1539.2v60h-1539.2z"
        ></path>
        <path
          id="RightSide_Halfway_15mline"
          fill="#fff"
          d="M14278.1 5365.8h1539.2v60h-1539.2z"
        ></path>
        <path
          id="rightHalf_RightSide_10m_15mline"
          fill="#fff"
          d="M17017.5 5365.8h1539.2v60h-1539.2z"
        ></path>
        <path
          id="rightHalf_RightSide_22m_15mline"
          fill="#fff"
          d="M21588.6 5365.8h1539.2v60h-1539.2z"
        ></path>
        <path id="leftHalf_RightSide_5mFromTryline" fill="#fff" d="M5863.7 4952.3h60v887.102h-60z"></path>
        <path
          id="rightHalf_RightSide_5m_15mline"
          fill="#fff"
          d="M24508.2 5365.8h1091.9v60h-1091.9z"
        ></path>
        <path
          id="rightHalf_RightSide_5mFromTryline"
          fill="#fff"
          d="M24478.2 4952.3h60v887.102h-60z"
        ></path>
        <path
          id="leftHalf_LeftSide_5m_15mline"
          fill="#fff"
          d="M4801.8 14166.1h1091.9v60H4801.8Z"
        ></path>
        <path
          id="leftHalf_LeftSide_22m_15mline"
          fill="#fff"
          d="M7036.91 14166.1H8576.1v60H7036.91Z"
        ></path>
        <path
          id="leftHalf_LeftSide_10m_15mline"
          fill="#fff"
          d="M11340.1 14166.1h1539.2v60h-1539.2z"
        ></path>
        <path
          id="LeftSide_Halfway_15mline"
          fill="#fff"
          d="M14278.1 14166.1h1539.2v60h-1539.2z"
        ></path>
        <path
          id="rightHalf_LeftSide_10m_15mline"
          fill="#fff"
          d="M17017.5 14166.1h1539.2v60h-1539.2z"
        ></path>
        <path
          id="rightHalf_LeftSide_22m_15mline"
          fill="#fff"
          d="M21588.6 14166.1h1539.2v60h-1539.2z"
        ></path>
        <path
          id="leftHalf_LeftSide_5mFromTryline"
          fill="#fff"
          d="M5863.7 13752.6h60v887.078h-60z"
        ></path>
        <path
          id="rightHalf_LeftSide_5m_15mline"
          fill="#fff"
          d="M24508.2 14166.1h1091.9v60h-1091.9z"
        ></path>
        <path
          id="rightHalf_LeftSide_5mFromTryline"
          fill="#fff"
          d="M24478.2 13752.6h60v887.078h-60z"
        ></path>
        <path
          id="leftside_rightpost"
          fill="#fff"
          d="M4801.8 9071.4h1956.36v60H4801.8Z"
        ></path>
        <path
          id="leftSide_leftpost"
          fill="#fff"
          d="M4801.8 11210.7h1956.36v60H4801.8Z"
        ></path>
        <path id="leftside_crossbar" fill="#fff" d="M6057.36 9101.4h60v2139.3h-60z"></path>
        <path id="rightside_rightpost" fill="#fff" d="M23530 9071.4h1956.3v60H23530Z"></path>
        <path
          id="rightside_leftpost"
          fill="#fff"
          d="M23530 11210.7h1956.3v60H23530Z"
        ></path>
        <path id="rightside_crossbar" fill="#fff" d="M24170.8 9101.4h60v2139.3h-60z"></path>

        {/* ZONES */}

        {/* Right side Left Half 22m Zone */}
        <path
          id="leftHalf_rightside_22mZone"
          fill="rgba(255, 255, 255, 0.3)" // Semi-transparent fill to indicate it's clickable
          stroke="#ff0000"  // Red border to ensure it's visible
          strokeWidth="20"
          d="
             M4851.8 10100.7 H7850.65
             V3900.65
             H4851.8
            Z                   
          "
          onClick={(e) => onZoneClick(e.target.id)}
        />

        {/* left side Left Half 22m Zone */}
        <path
          id="leftHalf_leftside_22mZone"
          fill="rgba(255, 255, 255, 0.3)" // Semi-transparent fill to indicate it's clickable
          stroke="#ff0000"  // Red border to ensure it's visible
          strokeWidth="20"
          d="
             M4851.8 10100.7 H7850.65
             V15900.65
             H4851.8
            Z                   
          "
          onClick={(e) => onZoneClick(e.target.id)}
        />


        {/* 22m right side left half lineout */}
        <path
          id="22m_rightside_lefthalf_lineout"
          fill="rgba(255, 255, 255, 0.3)" // Semi-transparent fill to indicate it's clickable
          stroke="blue"  // Red border to ensure it's visible
          strokeWidth="20"
          d="
              M4851 3900.65 H7850.65
              V2745.7
              H4851.65
              Z                   
              "
          onClick={(e) => onZoneClick(e.target.id)}
        /> 
       
       
        {/*  22m left side left half lineout */}
        <path
          id="22m left side left half lineout"
          fill="rgba(255, 255, 255, 0.3)" // Semi-transparent fill to indicate it's clickable
          stroke="blue"  // Red border to ensure it's visible
          strokeWidth="20"
          d="
             M4851.8 15900.7 
             H7850.65
             V17100.65
             H4851.8
            Z                   
          "
          onClick={(e) => onZoneClick(e.target.id)}
        />
        
      </g>
    </g>
  </svg>
);

export default PitchSVG;
