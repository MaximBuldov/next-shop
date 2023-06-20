import { LoginForm } from '@/components/login-form';
import { MainLayout } from '@/layouts'
import { NextPage } from 'next/types';
import React from 'react'

const Login: NextPage = () => {
  return (
    <MainLayout title="Login">
      <LoginForm />
    </MainLayout>
  )
}

export default Login;
