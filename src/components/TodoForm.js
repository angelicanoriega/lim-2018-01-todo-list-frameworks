import React, { Component } from 'react';

class Form extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      description: '',
    };
    this.InputChange = this.InputChange.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Submit(e) {
    console.log(this.props);
    e.preventDefault();
    if(this.state.title||this.state.description !==''){
      this.props.onAddTodo(this.state);
      console.log(this.state);
      this.setState({
        title: '',
        description: '',
      });
    }
    else{console.log(this.state);

      console.log(this.state.title);

      alert('completa los campos faltantes')
    }
  
  }

  InputChange(e) {

    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className=" text-center row">
      <div className="col-md-12 card">
        <form onSubmit={this.Submit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.InputChange}
              placeholder="Titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.InputChange}
              placeholder="Contenido"
              />
          </div>     
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
        </div>
      </div>
    )
  }
}

export default Form;
