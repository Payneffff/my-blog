/*
 * @Description:
 * @Version:
 * @Author: liupf
 * @Date: 2021-09-15 20:35:30
 * @LastEditors: liupf
 * @LastEditTime: 2021-09-16 10:22:51
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button, Checkbox, Card, message } from 'antd'
import './login.less'

class Login extends Component {
  gotoHome() {
    this.props.history.push('/home')
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    }

    const onFinish = (values) => {
      const { username, password } = values
      if (username === 'admin' && password === 'admin') {
        this.gotoHome()
      } else {
        message.error('密码错误')
      }
    }

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }

    return (
      <div className="P-login">
        <Card>
          <h1>Login page</h1>
          <Form
            name="basic"
            {...formItemLayout}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
          {/* <Button type="primary" onClick={this.gotoHome.bind(this)}>
          跳转Home页
        </Button> */}
        </Card>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object,
}

export default Login
