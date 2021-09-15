/*
 * @Description:
 * @Version:
 * @Author: liupf
 * @Date: 2021-09-15 20:35:30
 * @LastEditors: liupf
 * @LastEditTime: 2021-09-15 21:26:50
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import './login.less'

class Login extends Component {
  render() {
    return (
      <div className="P-login">
        <h1>Login page</h1>
        <Button type="primary" onClick={this.gotoHome.bind(this)}>
          跳转Home页
        </Button>
      </div>
    )
  }

  gotoHome() {
    this.props.history.push('/home')
  }
}

Login.propTypes = {
  history: PropTypes.array,
}

export default Login
