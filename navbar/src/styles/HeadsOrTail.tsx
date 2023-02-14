import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding: 4px;
    background-color: #3777FF;`

export const CustomInput = styled.div`
    flex-grow: 1;
`

export const Label = styled.label``

export const RadioInput = styled.input.attrs({ type: "radio" })`
      display: none;
`

export const LabelInput = styled.span`
    display: block;
    padding: 6px 8px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    transition : all .4s 0s ease;
    ${RadioInput}:checked + && {
      background-color: #f5f5f5;
      color: #000;
      border-radius: 4px;
    }
`


  
