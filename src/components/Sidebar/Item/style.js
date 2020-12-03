import styled from 'styled-components';

export const SubElements = styled.div`
    transition: max-height 0.3s;
    max-height: ${({ expand }) => (expand ? '20em' : 0)};
    overflow: hidden;
`;

export const SubElement = styled.div`
    color: white;
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 48px;
    cursor: pointer;
    /* color: ${({ active }) => (active ? 'white' : '#A2A3B7')}; */
    background: ${({ active }) => (active ? 'var(--sidebar-item-active)' : 'white')};
`;

export const Container = styled.div`
    padding: 0 var(--sidebar-padding-x);
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 52px;
    background: ${({ active, hovered }) => ((active || hovered) ? 'var(--sidebar-item-active)' : '')};
`;

export const Title = styled.span`
    font-size: 13px;
    font-weight: 550;
    opacity: ${({ collapsed }) => (collapsed ? '0' : '1')};
    display: inline-block;
    min-width: 100%;
    transition: 0.1s;
`;

export const IconContainer = styled.div`
    display: 'flex';
    min-width: 40px;
`;
