import styled from 'styled-components'

const Error = styled.div`
    height: 30px;
    padding-top: 16px;
    color: white;
    min-width: 10px;
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        .shortcut {
            margin: 0 4px;
        }
    }
`

export default Error;