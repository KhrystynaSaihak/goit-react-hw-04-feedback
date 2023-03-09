import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Btn = styled.div`
    padding: 10px 10px;
    background-color: ${({ value }) => {
      switch (value) {
        case 'good':
          return 'var(--color-blue)';
        case 'neutral':
          return 'var(--color-green)';
        case 'bad':
          return 'var(--color-red)';
        default:
          return 'var(--color-blue)';
      }
    }};

    color: var(--color-blue-text);
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    transition: transform 200ms ease, background-color 200ms ease;
  }
  &:hover {
    background-color: ${({ value }) => {
      switch (value) {
        case 'good':
          return 'var(--color-blue-hover)';
        case 'neutral':
          return 'var(--color-green-hover)';
        case 'bad':
          return 'var(--color-red-hover)';
        default:
          return 'var(--color-blue-hover)';
      }
    }};
    transform: scale(1.1);
  }
`;
