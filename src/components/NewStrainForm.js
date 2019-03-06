import React,{Component} from 'react'

class NewStrainForm extends Component{

  state={
    name: "",
    strain_type: "",
    description: "",
    img_1:"",
    img_2:""
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addStrain(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInput}
        />
        Type:
        <input
          type="text"
          name="strain_type"
          placeholder="Type"
          value={this.state.strain_type}
          onChange={this.handleInput}
        />
        Description:
        <input
          type="text"
          name="description"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleInput}
        />
        Image 1:
        <input
          type="text"
          name="img_1"
          placeholder="Image 1"
          value={this.state.img_1}
          onChange={this.handleInput}
        />

        Image 2:
        <input
          type="text"
          name="img_2"
          placeholder="Image 2"
          value={this.state.img_2}
          onChange={this.handleInput}
        />
        <button>Add To List</button>
      </form>

    )
  }
}

export default NewStrainForm
