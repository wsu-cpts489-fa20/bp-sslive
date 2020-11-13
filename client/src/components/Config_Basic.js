import React from 'react';

class Config_Basic extends React.Component {

    render() {
        return (
        <div className="padded-page">
            <center>
            <form id="loginInterface" onSubmit={this.handleLoginSubmit} onChange={this.handleLoginChange}>
            <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tornament Name:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                type="email"
                placeholder="New Tournament"
                id="emailInput"
                //pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tornament Short Name:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                type="email"
                placeholder="NT"
                id="emailInput"
                //pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tournament Directors Name:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                type="email"
                placeholder="aa b"
                id="emailInput"
                //pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tornament Director Code:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                type="email"
                placeholder="Director"
                id="emailInput"
                //pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <p></p>
            </form>    
            </center>
        </div>
        );
    }   
}

export default Config_Basic;