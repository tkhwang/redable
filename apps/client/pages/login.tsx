import React from 'react';
import { FeatureLogin } from '@readable/login/feature-login';
import Head from 'next/head';

function Login() {
  return (
    <>
      <Head>
        <title>Readable Sign in</title>
      </Head>
      <body className="h-screen bg-indigo-700">
        <FeatureLogin />
      </body>
    </>
  );
}

export default Login;
