import React from 'react';

export class NewMessage extends React.Component {

	onInputKeyUp(event){
		if(event.keyCode === 13){
			this.send();
		}
	}

	onSend(){
		this.send();
	}

	send(){
		this.props.sendHandler(this.textInput.value);
		this.textInput.value = "";
	}

	render() {
		return (
			<div className="ui grid">
				<div className="twelve wide column">
					<div className="ui form">
						<div className="field">
							<input ref={(ref) => this.textInput = ref} type="text" name="content" placeholder="Introduce tu mensaje y pulsa enviar"
								onKeyUp={this.onInputKeyUp.bind(this)}
							/>
						</div>
					</div>
				</div>
				<div className="two wide column">
					<button id="send" className="ui button" type="submit" onClick={this.onSend.bind(this)}>Enviar</button>
				</div>
			</div>
		);
	}
}
