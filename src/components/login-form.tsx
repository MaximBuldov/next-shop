import React from 'react'
import { Button } from './button'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthError, IAuthResponse, ILogin } from '@/models';
import { Input } from './input';
import { useMutation } from '@tanstack/react-query';
import authService from '@/services/auth/auth.service';
import { Loader } from './loader';
import userStore from '@/store/user-store';
import { useRouter } from 'next/router';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ILogin>({ mode: "onChange" });
  const { push } = useRouter();
  const { isLoading, mutate } = useMutation<IAuthResponse, IAuthError, ILogin>({
    mutationFn: authService.login,
    onSuccess: (data) => {
      userStore.setUser(data);
      push('/cart');
    }
  })


  const onSubmit: SubmitHandler<ILogin> = (data) => {
    mutate(data);
    reset();
  }

  return (
    <div className="login-form">
      <h2>Please login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('username', {
            required: 'Username is required'
          })}
          label="Username"
          error={errors.username?.message}
        />
        <Input
          {...register('password', {
            required: 'Password is required'
          })}
          label="Password"
          type="password"
          error={errors.password?.message}
        />
        <Button type="submit" outline={isLoading} disabled={isLoading}>
          {isLoading ? <Loader size={20} /> : 'Login'}
        </Button>
      </form>
    </div>
  )
}
