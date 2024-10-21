import React, {Component} from 'react'

export default class Register extends Component{
    state = {
        first:'',
        last:'',
        username:'',
        pass:'',
        confirm:''
    }
    handleChange = (event)=>{
        const fields = Object.assign({},this.state);
        fields[event.target.name] = event.target.value;
        this.setState({...fields})
    }
   render(){
    return <div className='flex justify-center'>
      <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] mobile:w-[90%]'>
        <text className='text-2xl'>Register</text>
        <div
        className='flex mt-3'>
            <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#38bdf8] focus:border-[#38bdf8] ease-linear duration-200' 
            placeholder='first name' name='first' value={this.state.first} onChange={this.handleChange}/>
             <input className='ml-3 border-[2px] rounded-lg w-[100%] p-2 outline-[#38bdf8] focus:border-[#38bdf8] ease-linear duration-200' 
            placeholder='last name' name='last' value={this.state.last} onChange={this.handleChange}/>
        </div>
        <div
        className='flex mt-3'>
            <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#38bdf8] focus:border-[#38bdf8] ease-linear duration-200' 
            placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className='flex mt-3'>
            <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#38bdf8] focus:border-[#38bdf8] ease-linear duration-200' 
            placeholder='password' name='pass' value={this.state.pass} onChange={this.handleChange} required/>
            <input className='ml-3 border-[2px] rounded-lg w-[100%] p-2 outline-[#38bdf8] focus:border-[#38bdf8] ease-linear duration-200' 
            placeholder='confirm' name='confirm' value={this.state.confirm} onChange={this.handleChange} required/>
        </div>
        <input className='btn mt-7 hover:scale-[1.02]' type='button' value='Register'/>
      </div>
    </div>;
   } 
}
