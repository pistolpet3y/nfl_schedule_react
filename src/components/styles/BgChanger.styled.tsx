import styled from 'styled-components';

export const StyledBgChanger =styled.div`
    

.btn {
position: fixed;
    bottom: 160px;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 18px;
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
  0%   { box-shadow: 0 0 5px rgb(142, 197, 252); }
  50%  { box-shadow: 0 0 10px rgb(235,252,142); }
  75%  { box-shadow: 0 0 15px rgb(235,252,142); }
  100% { box-shadow: 0 0 5px rgb(142, 197, 252); }
}

`