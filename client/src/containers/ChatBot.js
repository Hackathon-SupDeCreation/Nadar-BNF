import React, {Component} from 'react'
import './style/ChatBot.css'

class ChatBot extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            BeforeButton1: false,
            BeforeButton2: false,
            BeforeButton3: false,
            disabledButton1: false,
            disabledButton2: false,
            disabledButton3: false,
            disabledButton4: true,
            Chat1: false,
            Chat2: false,
            Chat3: false,
            Chat4: false,
            Chat5: false,
            Chat6: false,
            // Chat7: false,
        };

        
    }


    BeforeButton1 = () => {

        this.setState({BeforeButton1: true, playing: true})
    }

    BeforeButton2 = () => {

        this.setState({BeforeButton2: true})
    }

    Disabled1 = () => {

        this.setState({disabledButton1: true, Chat1: true})
    }

    Disabled2 = () => {

        this.setState({disabledButton2: true,
        Chat2: true})
    }

    Disabled3 = () => {

        this.setState({disabledButton3: true,
        Chat3: true})
    }

    Disabled4 = () => {

        this.setState({disabledButton4: true,
        Chat4: true})
    }
    BeforeView = () => {
        if (this.state.BeforeButton1 === false) {
            return (
                <div className="ButtonContainer">
                    <button className="ChatButton" onClick={this.BeforeButton1}>Oui</button>
                    <button className="ChatButton" onClick={this.BeforeButton2}>Non</button>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
    View = () => {
        if (this.state.playing === false) {
            return <div></div>
        } else {
            return (
<div>
                <div className="ButtonContainer">
                    <button className="ChatButton" disabled={this.state.disabledButton1} onClick={this.Disabled1}>H ou F</button>
                    <button className="ChatButton" disabled={this.state.disabledButton2} onClick={this.Disabled2}>Profession</button>
                    <button className="ChatButton" disabled={this.state.disabledButton3} onClick={this.Disabled3}>Date</button>
                    <button className="ChatButton" disabled={this.state.disabledButton4} onClick={this.Disabled4}>Anecdote</button>
                
                <div>
                <form>
                <label>
            <input type="text" name="Reponse" />
          </label>
          
                  </form>
                  </div>
                  </div>
                  </div>

            );
        }
    }

    scrollToBottom = () => {
      var elmnt = document.getElementById("blankdiv");
      elmnt.scrollIntoView();
    }
    
    componentDidMount() {
      this.scrollToBottom();
    }
    
    componentDidUpdate() {
      this.scrollToBottom();
    }

    Handle = (event) => {
      event.preventDefault()
      this.setState({Chat3: true})
      
    }
  
    marginer1 = {
      marginLeft: '61%'
    }

  marginer2 = {
      marginLeft: '55%'
    }

    marginer3 = {
      marginLeft: '44%'
    }

    marginer4 = {
      marginLeft: '50%'
    }
    
    marginer5 = {
      marginRight: '43%'
    }

    marginer6 = {
      marginRight: '45%'
    }

    Chat0 = () => {
        if (this.state.BeforeButton1 === true) {
            return (
                <div>
                    <div className='Right'>
                        <p className="ChatContainerUser" style={this.marginer1}>Yes, avec plaisir.</p>
                    </div>
                    <div className='Left'>
                        <p className="ChatContainerNadar">Tu remporteras 3 fois plus de point si tu es bon ;)</p>
                    </div>
                    <div className='Left'>
                    <p className="ChatContainerNadar">J'ai choisis une personne present dans un portrait dans mon exposition,
                      maintenant c'est a toi de le deviner en me posant des questions et en cherchant
                      dans la galerie!
                    </p>
                </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

  }

    Chat1 = () => {
        if (this.state.Chat1 === true) {
            return (
              <div>
                <div className='Right'>
                    <p className="ChatContainerUser" style={this.marginer2}>Est-ce une femme?
                    </p>
                </div>
                 <div className='Left'>
                 <p className="ChatContainerNadar" style={this.marginer5}>Oui, c'est une femme.
                 </p>
             </div>
             </div>
                
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    Chat2 = () => {
      if (this.state.Chat2 === true) {
        return (
          <div>
            <div className='Right'>
                <p className="ChatContainerUser" style={this.marginer3}>Quelle est sa profession?
                </p>
            </div>
             <div className='Left'>
             <p className="ChatContainerNadar" style={this.marginer6}>C'est une danseuse!
             </p>
         </div>
         </div>
            
        )
    } else {
        return (
            <div></div>
        )
    }
    }

    Chat3 = () => {
      if (this.state.Chat3 === true) {
        return (
          <div>
            <div className='Right'>
                <p className="ChatContainerUser" style={this.marginer4}> C'est Sarah Bernhardt
                </p>
            </div>
             <div className='Left'>
             <p className="ChatContainerNadar">Bonne reponse! Tu es tres perspicace! :)
             </p>
         </div>
         <div className='Left'>
             <p className="ChatContainerNadar">portrait.jepg
             </p>
         </div>
         <div className='Left'>
             <p className="ChatContainerNadar">Petite Description du type.jpeg
             </p>
         </div>
         </div>
            
        )
    } else {
        return (
            <div></div>
        )
    }
    }

    render() {
        return (
            <div className="ChatContainer">
                <div className="Start">
                    <p className="ChatContainerNadar">Hello Diane, es-tu pretes a lancer l'adventure du Qui Est-ce?</p>
                </div>
                <div>
                <this.Chat0/>
                <this.Chat1/>
                <this.Chat2/>
                <this.Chat3/>
                <this.BeforeView/>
                <this.View/>
                <div id="blankdiv" className="Blank"></div>
                </div>
            </div>
            
        )
    }
}

export default ChatBot;
