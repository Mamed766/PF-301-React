import React from 'react'
import CustomButton from '../components/CustomButton'
import { AsTypography, CardImage, Cards, CardTitleh1, CustomButtonStyled, ParagraphTypography, Wrapper } from './Ui/Ui'


const Todo = () => {

    return (
        <div>
            <CustomButton title="Add" />
            <CustomButtonStyled variant="primary"  >
                Add
            </CustomButtonStyled>
            <CustomButtonStyled variant="secondary"  >
                Add
            </CustomButtonStyled>
            <CustomButtonStyled variant="base"  >
                Add
            </CustomButtonStyled>
            <ParagraphTypography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </ParagraphTypography>
            <AsTypography as="h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </AsTypography>
            <AsTypography as="h2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </AsTypography>
            <AsTypography as="h3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </AsTypography>
            <AsTypography as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </AsTypography>
            <CardTitleh1>
                Todo List
            </CardTitleh1>
            <CardTitleh1 size="2rem">
                Todo List2
            </CardTitleh1>
            <CardTitleh1 size="1rem">
                Todo List2
            </CardTitleh1>
            <Wrapper>
                <Cards maxwidth="300px">
                    <CardImage src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
                <Cards>
                    <CardImage

                        src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
                <Cards>
                    <CardImage src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
                <Cards>
                    <CardImage src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
                <Cards>
                    <CardImage src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
                <Cards>
                    <CardImage src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
                <Cards maxwidth="500px" >
                    <CardImage

                        src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
                <Cards maxwidth="700px">
                    <CardImage

                        src="https://images.unsplash.com/photo-1706430062733-eab3e6b81a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" />
                </Cards>
            </Wrapper>
        </div>
    )
}

export default Todo