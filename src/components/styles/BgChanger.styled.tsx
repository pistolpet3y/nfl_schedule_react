import styled from 'styled-components';

export const StyledBgChanger =styled.div`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);

.btn {
    width: 15px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.42);
    border: 2px solid rgba(142, 197, 252, 0.86);
    border-radius: 20%;
    cursor: pointer;
    z-index: 9999;
    text-shadow: rebeccapurple 0 0 10px;
    animation: glow 2s infinite;
    color: white;
}

@keyframes glow {
  0%   { box-shadow: 0 0 5px rgb(255, 255, 255); }
  50%  { box-shadow: 0 0 10px rgb(142, 197, 252); }
  75%  { box-shadow: 0 0 15px rgb(142, 197, 252); }
  100% { box-shadow: 0 0 5px rgb(255, 255, 255); }
}

`