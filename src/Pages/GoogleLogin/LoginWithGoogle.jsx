import React from 'react';
import GoogleButton from 'react-google-button';
import { useCallback } from 'react';

function LoginWithGoogle() {

    const { REACT_APP_GOOGLE_CLIENT_ID,REACT_APP_BASE_FRONTEND_URL } = process.env;
    const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const redirectUri = 'api/google/callback/';
  
    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');
  
    const params = {
      response_type: 'code',
      client_id: REACT_APP_GOOGLE_CLIENT_ID,
      redirect_uri: `${REACT_APP_BASE_FRONTEND_URL}/${redirectUri}`,
      prompt: 'select_account',
      access_type: 'offline',
      scope
    };
  
    const urlParams = new URLSearchParams(params).toString();
    window.location = `${googleAuthUrl}?${urlParams}`
  }, []);

  return (
      <GoogleButton
        onClick={openGoogleLoginPage}
        label="Sign in with Google"
        disabled={!REACT_APP_GOOGLE_CLIENT_ID}
      />
  )
}

export default LoginWithGoogle