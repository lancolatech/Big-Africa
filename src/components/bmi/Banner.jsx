
import styled from 'styled-components';


// Define styled components for SVG elements
const SvgContainer = styled.svg`
  overflow: visible;
  shape-rendering: geometricPrecision;
  transform-style: preserve-3d;
  perspective: 1500px;
  backface-visibility: hidden;
`;

const BackgroundRect1 = styled.rect`
  fill: url(#GRAD_OVERLAY);
`;

const BackgroundRect2 = styled.rect`
  fill: none;
  opacity: 0;
`;

const Polygon1 = styled.polygon`
  fill: url(#GRAD_2);
`;

const Polygon2 = styled.polygon`
  fill: url(#GRAD_3);
`;

const Polygon3 = styled.polygon`
  fill: url(#GRAD_4);
`;

const Line = styled.polyline`
  fill: none;
  stroke: rgba(255, 255, 255, 0);
  stroke-width: 4;
`;

const Line2 = styled.polyline`
  fill: none;
  stroke: rgba(255, 255, 255, 0);
  stroke-width: 1;
`;

const Line3 = styled.polyline`
  opacity: 0;
  stroke: rgba(255, 255, 255, 0);
  fill: rgba(255, 255, 255, 0.2);
  stroke-width: 2;
`;


// AnimatedSVG component
const AnimatedSVG = () => (
  <SvgContainer
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1200 310"
    preserveAspectRatio="xMinYMin slice"
  >
    <defs>
      <filter id="f1" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      </filter>
      <linearGradient id="GRAD_OVERLAY" gradientUnits="userSpaceOnUse" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0" style={{ stopColor: '#000000', stopOpacity: '0.40' }} />
        <stop offset="1" style={{ stopColor: '#000000', stopOpacity: '0.00' }} />
      </linearGradient>
      <linearGradient id="GRAD_1">
        <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: '0.30' }} />
        <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: '0.00' }} />
      </linearGradient>
      <linearGradient id="GRAD_2" x1="0" y1="1" y2="0" x2="1">
        <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: '0.00' }} />
        <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: '0.20' }} />
      </linearGradient>
      <linearGradient id="GRAD_3">
        <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: '0.00' }} />
        <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: '0.20' }} />
      </linearGradient>
      <linearGradient id="GRAD_4" y2="1" x2="1">
        <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: '0.00' }} />
        <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: '0.20' }} />
      </linearGradient>
    </defs>

    <g id="background">
      <BackgroundRect1 className="st1" width="1200" height="312" />
      <BackgroundRect2 className="st0" width="1200" height="312" />
    </g>

    <g id="graphic">
      <Polygon1 className="st1" points="848.875,311 310.808,311 579.841,-25.535" />
      <Polygon2 className="st2" points="0,-1 0,311 42.081,311 293.299,-1" />
      <Polygon3 className="st3" points="310.807,311 0,311 -0.346,-67.654" />
    </g>

    <g id="line">
      <Line className="st4" points="1054.599,310.25 832.676,30.608 610.333,310.25 761.278,310.25 611.459,121.124 461.785,310.25" />
      <Line2 className="st5" points="1054.599,310.25 832.676,30.608 610.333,310.25 761.278,310.25 611.459,121.124 461.785,310.25" />
      <Line3 className="st6" points="1054.599,310.25 832.676,30.608 610.333,310.25 761.278,310.25 611.459,121.124 461.785,310.25" />
    </g>
  </SvgContainer>
);

export default AnimatedSVG;
