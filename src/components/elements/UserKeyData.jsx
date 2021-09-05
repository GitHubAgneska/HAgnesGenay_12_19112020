import PropTypes from "prop-types"
import { Fragment } from "react"
import UserKeyDataItem from "./UserKeyDataItem"
import styled from "styled-components"

const Wrapper = styled.section `
    padding: 4em;
    border: 2px solid grey;
`;

const UserKeyData = (props) => {

    console.log('keyData INPARENT', props) // object of objects

    return(
        <Fragment>
            <Wrapper>
                <ul>
                    {Object.keys(props).map(i => (
                        <UserKeyDataItem data={props[i]} key= {i} />
                    ))}

                </ul>

            </Wrapper>
        </Fragment>
    )
}

UserKeyData.propTypes = {
    userKeyData: PropTypes.array
}

export default UserKeyData