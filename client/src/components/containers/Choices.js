import React from 'react'
import ChoiceButton from '../ChoiceButton.js'
import Text from '../text.json'

class Choices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogueStatus: ''
        };
    }
    handleClick1 = (previousState) => {
        this.setState(previousState => ({
            dialogueStatus: previousState.dialogueStatus + 'a'
        }))
    }
    handleClick2 = (previousState) => {
        this.setState(previousState => ({
            dialogueStatus: previousState.dialogueStatus + 'b'
        }))
    }
    handleClick3 = (previousState) => {
        this.setState(previousState => ({
            dialogueStatus: previousState.dialogueStatus + 'c'
        }))
    }

    handleClick4 = (previousState) => {
        this.setState(previousState => ({
            dialogueStatus: previousState.dialogueStatus + 'd'
        }))
    }
    render() {
        console.log(this.state)
        return (
            <div>

                {Text[this.state.dialogueStatus + 'r']}

                <ChoiceButton onClick={() => this.handleClick1()}>{Text[this.state.dialogueStatus + 'a']}</ChoiceButton>
                <ChoiceButton onClick={this.handleClick2}>{Text[this.state.dialogueStatus + 'b']}</ChoiceButton>
                <ChoiceButton onClick={this.handleClick3}>{Text[this.state.dialogueStatus + 'c']}</ChoiceButton>
                <ChoiceButton onClick={this.handleClick4}>{Text[this.state.dialogueStatus + 'd']}</ChoiceButton>

            </div>

        );
    }
}
export default Choices;