import React from 'react';

const Signin = ({onRouteChange}) => {
  return (
  <article class="br2 ba dark-gray br3 shadow-5 mv6 w-100 w-50-m w-25-l mw7 center">
    <main className="pa4 black-80">
      <form className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 br2 input-reset ba bg-transparent hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 br2 input-reset ba bg-transparent hover-white w-100" type="password" name="password"  id="password"/>
          </div>
        </fieldset>
        <div className="">
          <input 
            className="b ph3 pv2 br2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
            onClick={() => onRouteChange('home')}
          />
        </div>
        <div className="lh-copy mt3">
          <p onClick={() => onRouteChange('register')} className="f6 link hover-white pointer black db">New Member?</p>
        </div>
      </form>
    </main>
  </article>

  );
}

export default Signin;