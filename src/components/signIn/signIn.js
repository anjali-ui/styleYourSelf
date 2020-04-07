import React from 'react';
import './sign-in.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
       event.preventDefault();
       this.setState({
           email: '',
           password: ''
       })
    }

    onHandle = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
           <div className="sign-in">
               <h2>I have already an account</h2>
               <span>Sign In with your Email Account</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput name="email" type="email" value={this.state.email} handleChange={this.onHandle} label='email' required />
                   <FormInput name="password" type="password" value={this.state.password} handleChange={this.onHandle} label='password' required />
                   <CustomButton type="submit">Sign In</CustomButton>
               </form>
           </div>
        );
    }
}

export default SignIn;
