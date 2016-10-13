import React from 'react';

class SignupPage extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    return (
      <div id = "pages">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3> Sign up! </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SignupPage;