import React from "react";
class DodajSliku extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        imageURI : null
      }
    }
    
 
 

    render() {
  
      return <div>
              <label
                htmlFor={this.props.id}
                className="button">
                {this.props.tekst}
              </label>
              <input
              style={{display:'none'}}
                id={this.props.id}
                name={this.props.ime}
                type="file"
                multiple
                onChange={this.props.promjena}
                className="show-for-sr" />
            </div>;
    }
  }
  export default DodajSliku